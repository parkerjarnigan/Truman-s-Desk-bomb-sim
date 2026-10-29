import React, { useState, useEffect, useMemo } from 'react';
import {
  ReadingLevel,
  BiasStance,
  PressureGauges,
  RoundChoice,
  QTEFlashEvent,
} from './types/simulation';
import { HISTORICAL_ROUNDS } from './data/historicalRounds';
import { QTE_FLASH_EVENTS } from './data/qteFlashEvents';
import { DID_YOU_KNOW_FACTS } from './data/didYouKnowFacts';
import { soundFx } from './utils/audio';

import { TopBar } from './components/TopBar';
import { PressureDeck } from './components/PressureDeck';
import { CalibrationModal } from './components/CalibrationModal';
import { DossierRoundView } from './components/DossierRoundView';
import { SpeedrunWarningModal } from './components/SpeedrunWarningModal';
import { FlashTelegramModal } from './components/FlashTelegramModal';
import { LoadingTransition } from './components/LoadingTransition';
import { DecisionRedactionView } from './components/DecisionRedactionView';
import { PostDecisionReport } from './components/PostDecisionReport';
import { DecisionTimeline } from './components/DecisionTimeline';
import { FilmGrainOverlay } from './components/FilmGrainOverlay';

export default function App() {
  // Calibration & Session Setup
  const [readingLevel, setReadingLevel] = useState<ReadingLevel>('standard');
  const [initialBias, setInitialBias] = useState<BiasStance | null>(null);
  const [showCalibrationModal, setShowCalibrationModal] = useState<boolean>(true);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const [vintageFilterActive, setVintageFilterActive] = useState<boolean>(true);

  // Initialized gauges with user-specified randomized starting points
  // Military: 70-85%, Political: 40-90%, Public: 50-75%
  const generateInitialGauges = (): PressureGauges => ({
    military: Math.floor(70 + Math.random() * 16),
    political: Math.floor(40 + Math.random() * 51),
    public: Math.floor(50 + Math.random() * 26),
  });

  const [gauges, setGauges] = useState<PressureGauges>(generateInitialGauges);
  const [previousGauges, setPreviousGauges] = useState<PressureGauges | undefined>();

  // Progression State
  const [currentRoundNumber, setCurrentRoundNumber] = useState<number>(1);
  const [choicesMade, setChoicesMade] = useState<Record<number, RoundChoice>>({});
  const [isLoadingTransition, setIsLoadingTransition] = useState<boolean>(false);
  const [transitionFactRound, setTransitionFactRound] = useState<number>(1);

  // Emergency <= 25% Collapse State
  const [hasEncounteredCrisisCollapse, setHasEncounteredCrisisCollapse] = useState<boolean>(false);
  const [collapsedGaugeName, setCollapsedGaugeName] = useState<'military' | 'political' | 'public'>('military');

  // Anti-speedrun detection
  const [showSpeedrunWarning, setShowSpeedrunWarning] = useState<boolean>(false);

  // Randomized QTE Flash Event State
  const [activeQTE, setActiveQTE] = useState<QTEFlashEvent | null>(null);
  const [qtePool, setQtePool] = useState<QTEFlashEvent[]>([]);
  const [scheduledQTERounds, setScheduledQTERounds] = useState<number[]>([]);

  // Culmination State
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [finalDecision, setFinalDecision] = useState<'drop' | 'withhold' | null>(null);
  const [finalDecisionWeightFactor, setFinalDecisionWeightFactor] = useState<string>('');
  const [counterfactualSeed, setCounterfactualSeed] = useState<number>(() => Math.floor(Math.random() * 100));

  // Initialize randomized QTE schedule so neighboring students get different events
  const initQteSchedule = () => {
    // Shuffle QTE pool
    const shuffled = [...QTE_FLASH_EVENTS].sort(() => Math.random() - 0.5);
    setQtePool(shuffled);
    // Randomize 2 rounds between Round 2, 3, 4, 5 where sudden telegrams appear
    const possibleRounds = [2, 3, 4, 5].sort(() => Math.random() - 0.5).slice(0, 2);
    setScheduledQTERounds(possibleRounds);
  };

  useEffect(() => {
    initQteSchedule();
  }, []);

  // Check if current round has a scheduled QTE Flash event
  useEffect(() => {
    if (
      !showCalibrationModal &&
      !isLoadingTransition &&
      !isGameOver &&
      !hasEncounteredCrisisCollapse &&
      scheduledQTERounds.includes(currentRoundNumber) &&
      qtePool.length > 0
    ) {
      // Trigger QTE event after a 2-second delay to catch the player off guard!
      const timer = setTimeout(() => {
        const nextQte = qtePool[0];
        setActiveQTE(nextQte);
        setQtePool((prev) => prev.slice(1));
        // Remove current round so it only triggers once
        setScheduledQTERounds((prev) => prev.filter((r) => r !== currentRoundNumber));
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [currentRoundNumber, showCalibrationModal, isLoadingTransition, isGameOver, hasEncounteredCrisisCollapse]);

  // Restart Simulation
  const handleReset = () => {
    setGauges(generateInitialGauges());
    setPreviousGauges(undefined);
    setCurrentRoundNumber(1);
    setChoicesMade({});
    setIsLoadingTransition(false);
    setHasEncounteredCrisisCollapse(false);
    setShowSpeedrunWarning(false);
    setActiveQTE(null);
    setIsGameOver(false);
    setFinalDecision(null);
    setFinalDecisionWeightFactor('');
    setCounterfactualSeed(Math.floor(Math.random() * 100));
    initQteSchedule();
    setShowCalibrationModal(true);
  };

  // Calibration completion
  const handleCalibrationComplete = (selectedReading: ReadingLevel, selectedBias: BiasStance) => {
    setReadingLevel(selectedReading);
    setInitialBias(selectedBias);
    setShowCalibrationModal(false);
  };

  // Audio Toggle
  const handleToggleAudio = () => {
    const nextMuted = !audioMuted;
    setAudioMuted(nextMuted);
    soundFx.setMuted(nextMuted);
  };

  // Check and apply gauge changes with <= 25% collapse rule
  const applyGaugeChanges = (deltas: { military?: number; political?: number; public?: number }) => {
    setPreviousGauges({ ...gauges });

    const newMilitary = Math.max(0, Math.min(100, gauges.military + (deltas.military || 0)));
    const newPolitical = Math.max(0, Math.min(100, gauges.political + (deltas.political || 0)));
    const newPublic = Math.max(0, Math.min(100, gauges.public + (deltas.public || 0)));

    const nextGauges = {
      military: newMilitary,
      political: newPolitical,
      public: newPublic,
    };

    setGauges(nextGauges);

    // CRITICAL COLLAPSE CHECK: If any gauge drops to <= 25%, jump straight to Round 6!
    if (newMilitary <= 25 || newPolitical <= 25 || newPublic <= 25) {
      soundFx.playEmergencyAlarm();
      let collapsedName: 'military' | 'political' | 'public' = 'military';
      if (newMilitary <= 25) collapsedName = 'military';
      else if (newPolitical <= 25) collapsedName = 'political';
      else collapsedName = 'public';

      setCollapsedGaugeName(collapsedName);
      setHasEncounteredCrisisCollapse(true);
      setCurrentRoundNumber(6);
      return true; // Collapsed
    }

    // Warning sound if drops to <= 35%
    if (newMilitary <= 35 || newPolitical <= 35 || newPublic <= 35) {
      soundFx.playEmergencyAlarm();
    }

    return false; // Did not collapse
  };

  // Handle QTE Selection
  const handleSelectQTEOption = (optionId: string) => {
    if (!activeQTE) return;
    const option = activeQTE.options.find((o) => o.id === optionId) || activeQTE.options[0];
    setActiveQTE(null);

    // Apply QTE impact
    applyGaugeChanges(option.impact);
  };

  // Handle Round Decision
  const handleSelectDecision = (choice: RoundChoice) => {
    setChoicesMade((prev) => ({ ...prev, [currentRoundNumber]: choice }));

    // Apply impact
    const didCollapse = applyGaugeChanges(choice.impact);

    if (didCollapse) {
      // Already forwarded to Round 6 by collapse logic
      return;
    }

    // If on Round 6, culminate game
    if (currentRoundNumber === 6) {
      const decision = choice.id === 'c6_drop_the_bomb' ? 'drop' : 'withhold';
      setFinalDecision(decision);
      setFinalDecisionWeightFactor(choice.impact.summary);
      setIsGameOver(true);
      return;
    }

    // Otherwise show loading transition screen
    setTransitionFactRound(currentRoundNumber);
    setIsLoadingTransition(true);
  };

  // Handle Redacted Round 6 Decision
  const handleMakeFinalDecisionFromRedaction = (decision: 'drop' | 'withhold', weightFactor: string) => {
    setFinalDecision(decision);
    setFinalDecisionWeightFactor(weightFactor);
    setIsGameOver(true);
  };

  // Advance from loading transition and scroll back to top
  const handleProceedFromLoading = () => {
    setIsLoadingTransition(false);
    setCurrentRoundNumber((prev) => prev + 1);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Ensure view smoothly resets to top whenever loading screen closes or round changes
  useEffect(() => {
    if (!isLoadingTransition) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [isLoadingTransition, currentRoundNumber]);

  // Current Round Data
  const currentRoundData = useMemo(() => {
    return (
      HISTORICAL_ROUNDS.find((r) => r.roundNumber === currentRoundNumber) ||
      HISTORICAL_ROUNDS[0]
    );
  }, [currentRoundNumber]);

  return (
    <div className="min-h-screen bg-[#18130e] text-[#f5f0e6] flex flex-col font-sans selection:bg-[#c5a059] selection:text-[#16120e]">
      
      {/* 1945 Period Film Grain & Archival Lens Overlay */}
      <FilmGrainOverlay />

      {/* Top Bar Navigation */}
      <TopBar
        currentDate={currentRoundData.dateString}
        roundTitle={currentRoundData.title}
        roundNumber={currentRoundNumber}
        totalRounds={HISTORICAL_ROUNDS.length}
        audioMuted={audioMuted}
        vintageFilterActive={vintageFilterActive}
        onToggleAudio={handleToggleAudio}
        onToggleVintageFilter={() => setVintageFilterActive(!vintageFilterActive)}
        onReset={handleReset}
      />

      {/* Main Simulation Viewport */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-6">
        
        {/* Trio Pressure Deck (always active except inside modals) */}
        {!showCalibrationModal && !isGameOver && (
          <PressureDeck
            gauges={gauges}
            previousGauges={previousGauges}
          />
        )}

        {/* Content Router */}
        {isGameOver && finalDecision ? (
          /* Post-Decision Synthesis & Debrief */
          <PostDecisionReport
            finalDecision={finalDecision}
            weightFactor={finalDecisionWeightFactor}
            initialBias={initialBias}
            gauges={gauges}
            choicesMade={choicesMade}
            hasEncounteredCrisisCollapse={hasEncounteredCrisisCollapse}
            collapsedGaugeName={collapsedGaugeName}
            counterfactualIndex={counterfactualSeed}
            vintageFilterActive={vintageFilterActive}
            onToggleVintageFilter={() => setVintageFilterActive(!vintageFilterActive)}
            onRestart={handleReset}
          />
        ) : hasEncounteredCrisisCollapse && currentRoundNumber === 6 ? (
          /* Emergency Redacted Round 6 View when <= 25% gauge reached */
          <DecisionRedactionView
            roundData={currentRoundData}
            collapsedGaugeName={collapsedGaugeName}
            onMakeFinalDecision={handleMakeFinalDecisionFromRedaction}
          />
        ) : (
          /* Standard Historical Intelligence Dossier alongside Decision Timeline */
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 w-full min-w-0">
              <DossierRoundView
                key={currentRoundData.roundNumber}
                roundData={currentRoundData}
                readingLevel={readingLevel}
                playerBias={initialBias}
                vintageFilterActive={vintageFilterActive}
                onToggleVintageFilter={() => setVintageFilterActive(!vintageFilterActive)}
                onSelectDecision={handleSelectDecision}
                onSpeedrunTriggered={() => setShowSpeedrunWarning(true)}
              />
            </div>
            <DecisionTimeline
              currentRoundNumber={currentRoundNumber}
              choicesMade={choicesMade}
            />
          </div>
        )}

      </main>

      {/* MODALS & OVERLAYS */}

      {/* 1. Round 0 Calibration & Bias Modal */}
      {showCalibrationModal && (
        <CalibrationModal onComplete={handleCalibrationComplete} />
      )}

      {/* 2. Anti-Speedrun Comprehension Sentry */}
      {showSpeedrunWarning && (
        <SpeedrunWarningModal
          roundTitle={currentRoundData.title}
          essentialQuestion={currentRoundData.essentialQuestion}
          onDismiss={() => setShowSpeedrunWarning(false)}
        />
      )}

      {/* 3. Randomized Flash Telegram QTE Intercept */}
      {activeQTE && (
        <FlashTelegramModal
          qte={activeQTE}
          onSelectOption={handleSelectQTEOption}
        />
      )}

      {/* 4. PS2/PS3 Era Retro Computing Loading Screen */}
      {isLoadingTransition && (
        <LoadingTransition
          fact={DID_YOU_KNOW_FACTS[transitionFactRound]}
          nextRoundNumber={currentRoundNumber + 1}
          onProceed={handleProceedFromLoading}
        />
      )}

      {/* Footer */}
      <footer className="w-full bg-[#140f0b] border-t border-[#312519] py-4 text-center text-[11px] font-mono text-[#8a7662]">
        <p>Oak Ridge High School CP World History Department · Classroom Interactive Simulation · Summer 1945</p>
      </footer>

    </div>
  );
}
