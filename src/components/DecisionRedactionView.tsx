import React, { useState } from 'react';
import { HistoricalRoundData, RoundChoice } from '../types/simulation';
import { soundFx } from '../utils/audio';
import { AlertTriangle, Lock, EyeOff, ShieldAlert, ArrowRight } from 'lucide-react';

interface DecisionRedactionViewProps {
  roundData: HistoricalRoundData;
  collapsedGaugeName: 'military' | 'political' | 'public';
  onMakeFinalDecision: (decision: 'drop' | 'withhold', weightFactor: string) => void;
}

export const DecisionRedactionView: React.FC<DecisionRedactionViewProps> = ({
  roundData,
  collapsedGaugeName,
  onMakeFinalDecision,
}) => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [selectedWeightFactor, setSelectedWeightFactor] = useState<string>('');

  const weightingFactors = [
    'Fear of an endless war and catastrophic casualties in Operation Downfall',
    'Total collapse of command authority / panicked pressure to act immediately',
    'Severe intelligence blindness: lacking scientific dissent and test data',
    'Desire to demonstrate overwhelming force and deter Soviet expansion in Asia',
    'Moral conviction that atomic destruction of civilian cities is inherently criminal'
  ];

  const handleConfirm = () => {
    if (!selectedChoiceId || !selectedWeightFactor) return;
    soundFx.playStamp();
    const decision = selectedChoiceId === 'c6_drop_the_bomb' ? 'drop' : 'withhold';
    onMakeFinalDecision(decision, selectedWeightFactor);
  };

  const getGaugeDisplayName = (name: 'military' | 'political' | 'public') => {
    if (name === 'military') return 'Military Confidence (≤25% — Mutiny & Insubordination Risk)';
    if (name === 'political') return 'Political Pressure (≤25% — Cabinet Mutiny & Treason Inquiries)';
    return 'Public Opinion (≤25% — War Fatigue Collapse & Massive Civilian Protests)';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-fadeIn">
      
      {/* Red Alert Banner */}
      <div className="bg-[#381111] border-2 border-[#b91c1c] rounded-xl p-5 text-[#fecaca] shadow-xl space-y-3 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none text-9xl font-serif font-black">
          ≤25%
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#501313] border border-[#dc2626] flex items-center justify-center text-[#f87171] shrink-0 animate-bounce">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white bg-[#dc2626] px-2 py-0.5 rounded font-bold">
                CRITICAL COLLAPSE TRIGGER ACTIVATED
              </span>
              <span className="text-xs font-mono text-[#fca5a5]">
                TIME EXHAUSTED · FORCED EMERGENCY DIRECTIVE
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white mt-0.5">
              Executive Panic: Rushed Straight to Round 6
            </h2>
          </div>
        </div>

        <p className="text-xs text-[#fee2e2] leading-relaxed">
          Your administration lost control of <strong>{getGaugeDisplayName(collapsedGaugeName)}</strong>. With normal deliberation shattered, military commands or political leaders are demanding an <strong>IMMEDIATE EXECUTIVE DIRECTIVE NOW</strong>. All remaining briefing time has been forfeited!
        </p>
      </div>

      {/* Manila Folder Dossier with Redactions */}
      <div className="bg-[#fbf7ee] text-[#1c150e] border-2 border-[#c8b79b] rounded-xl shadow-2xl p-6 md:p-8 relative">
        
        {/* Rubber Stamp */}
        <div className="absolute right-6 top-6 rotate-6 pointer-events-none">
          <div className="border-4 border-[#991b1b] text-[#991b1b] font-mono font-black text-xs md:text-sm px-3 py-1.5 uppercase tracking-widest rounded opacity-90 shadow-sm">
            TOP SECRET // EMERGENCY REDACTED
          </div>
        </div>

        {/* Header */}
        <div className="border-b-2 border-[#d5c3a5] pb-4 mb-5">
          <span className="text-[11px] font-mono text-[#786147] tracking-wider uppercase">
            WHITE HOUSE MEMORANDUM · AUGUST 1945
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#1f1710] mt-1">
            {roundData.title}
          </h1>
          <p className="text-xs text-[#6e5840] font-mono mt-1">
            {roundData.subtitle}
          </p>
        </div>

        {/* Severe Intelligence Redaction Section */}
        <div className="mb-6 p-4 bg-[#f0e7d5] border border-[#c4b090] rounded-lg space-y-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#991b1b] font-bold">
            <EyeOff className="w-4 h-4" />
            <span>FORFEITED & REDACTED INTELLIGENCE DOSSIERS:</span>
          </div>
          <p className="text-[#5c4935] text-[11px] font-sans leading-relaxed">
            Because crisis pressure forced an emergency jump, your desk never received the full debates of top scientists, Trinity test physics, or scientific petitions. Below is what remains visible on your desk:
          </p>

          <div className="space-y-2 pt-1 text-[11px]">
            <div className="p-2 bg-[#e4d8c2] rounded border border-[#cbba9e]">
              <span className="font-bold text-[#2a1e12]">INTERIM COMMITTEE TRANSCRIPT: </span>
              <span className="bg-[#1a140d] text-[#1a140d] px-2 py-0.5 rounded select-none">
                [TOP SECRET DEMONSTRATION WARNING PROPOSAL REDACTED BY WAR DEPARTMENT]
              </span>
            </div>
            <div className="p-2 bg-[#e4d8c2] rounded border border-[#cbba9e]">
              <span className="font-bold text-[#2a1e12]">TRINITY TEST RADIOLOGICAL LOG: </span>
              <span className="bg-[#1a140d] text-[#1a140d] px-2 py-0.5 rounded select-none">
                [LONG TERM RADIATION SICKNESS DATA AND YIELD TELEMETRY CLASSIFIED]
              </span>
            </div>
            <div className="p-2 bg-[#e4d8c2] rounded border border-[#cbba9e]">
              <span className="font-bold text-[#2a1e12]">SZILARD SCIENTIST PETITION: </span>
              <span className="bg-[#1a140d] text-[#1a140d] px-2 py-0.5 rounded select-none">
                [70 SCIENTISTS CONCERNS OVER NUCLEAR ARMS RACE WITHHELD IN GROVES SAFE]
              </span>
            </div>
          </div>
        </div>

        {/* Available Intelligence Excerpt */}
        <div className="space-y-3 text-xs text-[#3d2e1f] leading-relaxed mb-6">
          <p className="font-semibold text-sm font-serif">
            The Bleak Reality Before You:
          </p>
          <p>
            General Spaatz on Tinian holds the 509th Composite Group ready. Over 1,000,000 Allied soldiers are mobilizing for the planned invasion of Kyushu. Intercepts indicate fanatical military defenses. You must decide whether to authorize the atomic bomb with incomplete, severely compromised intelligence.
          </p>
        </div>

        {/* Choice Selection */}
        <div className="space-y-4 pt-2">
          <h3 className="text-sm font-serif font-bold text-[#1c150e] uppercase tracking-wide">
            Your Final Executive Order:
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            {roundData.choices.map((choice) => {
              const isSelected = selectedChoiceId === choice.id;
              const isDrop = choice.id === 'c6_drop_the_bomb';
              return (
                <div
                  key={choice.id}
                  onClick={() => {
                    soundFx.playTypewriter();
                    setSelectedChoiceId(choice.id);
                  }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    isSelected
                      ? isDrop
                        ? 'bg-[#ffebee] border-[#b91c1c] ring-2 ring-[#b91c1c]/40'
                        : 'bg-[#e8f5e9] border-[#2e7d32] ring-2 ring-[#2e7d32]/40'
                      : 'bg-[#f4ecdf] border-[#d2c1a4] hover:border-[#8f795d]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        isDrop ? 'bg-[#ffcdd2] text-[#b71c1c]' : 'bg-[#c8e6c9] text-[#1b5e20]'
                      }`}
                    >
                      {isDrop ? 'OPTION A: RELEASE BOMB' : 'OPTION B: WITHHOLD BOMB'}
                    </span>
                    {isSelected && (
                      <span className="w-3 h-3 rounded-full bg-current" />
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1a140d] mb-1">
                    {choice.label}
                  </h4>
                  <p className="text-xs text-[#524131] leading-relaxed">
                    {choice.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary Factor Weighing Most Heavily */}
        {selectedChoiceId && (
          <div className="mt-6 pt-5 border-t border-[#d8c7ad] space-y-3 animate-fadeIn">
            <label className="block text-xs font-serif font-bold text-[#2a1d12]">
              Which Factor Weighed Heaviest in Your Forced Emergency Decision?
            </label>
            <p className="text-[11px] text-[#6b5640] font-mono">
              In Oak Ridge CP World History, leaders must be able to articulate the primary justification behind their executive power:
            </p>

            <div className="space-y-2">
              {weightingFactors.map((factor) => {
                const isSelected = selectedWeightFactor === factor;
                return (
                  <div
                    key={factor}
                    onClick={() => {
                      soundFx.playTypewriter();
                      setSelectedWeightFactor(factor);
                    }}
                    className={`p-2.5 rounded border text-xs cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#2b1f14] text-[#f5efe3] border-[#2b1f14] font-medium'
                        : 'bg-[#eee4d2] text-[#423323] border-[#cdbba1] hover:border-[#8f7b63]'
                    }`}
                  >
                    • {factor}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Submit */}
        <div className="flex justify-end pt-6 mt-4 border-t border-[#d8c7ad]">
          <button
            disabled={!selectedChoiceId || !selectedWeightFactor}
            onClick={handleConfirm}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-serif font-bold text-sm uppercase tracking-wider transition-all shadow-md ${
              selectedChoiceId && selectedWeightFactor
                ? 'bg-[#991b1b] hover:bg-[#b91c1c] text-white cursor-pointer hover:shadow-xl'
                : 'bg-[#d8ccb8] text-[#8e7e6a] cursor-not-allowed'
            }`}
          >
            <span>Execute Final Presidential Decree</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
