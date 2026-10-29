import React, { useState } from 'react';
import {
  BiasStance,
  PressureGauges,
  RoundChoice,
} from '../types/simulation';
import {
  HISTORICAL_SURVIVOR_TESTIMONIES,
  COUNTERFACTUAL_NO_BOMB_SCENARIOS,
  WHAT_ACTUALLY_HAPPENED_DATA,
} from '../data/realityLedger';
import { HISTORICAL_ROUNDS } from '../data/historicalRounds';
import { soundFx } from '../utils/audio';
import atomicAftermathImg from '../assets/images/atomic_aftermath_ruins_1945_1793237475084.jpg';
import {
  BookOpen,
  History,
  RotateCcw,
  Printer,
  FileCheck,
  CheckCircle2,
  Download,
  Shield,
  Flag,
  Users,
  Camera,
} from 'lucide-react';

interface PostDecisionReportProps {
  finalDecision: 'drop' | 'withhold';
  weightFactor: string;
  initialBias: BiasStance | null;
  gauges: PressureGauges;
  choicesMade: Record<number, RoundChoice>;
  hasEncounteredCrisisCollapse: boolean;
  collapsedGaugeName?: 'military' | 'political' | 'public';
  counterfactualIndex: number;
  vintageFilterActive?: boolean;
  onToggleVintageFilter?: () => void;
  onRestart: () => void;
}

export const PostDecisionReport: React.FC<PostDecisionReportProps> = ({
  finalDecision,
  weightFactor,
  initialBias,
  gauges,
  choicesMade,
  hasEncounteredCrisisCollapse,
  collapsedGaugeName,
  counterfactualIndex,
  vintageFilterActive = true,
  onToggleVintageFilter,
  onRestart,
}) => {
  const [activeTab, setActiveTab] = useState<'outcome' | 'reality' | 'reflection'>('outcome');
  const [studentName, setStudentName] = useState<string>('');
  const [classPeriod, setClassPeriod] = useState<string>('3rd Period');
  const [studentReconsiderAnswer, setStudentReconsiderAnswer] = useState<string>('');

  const counterfactual = COUNTERFACTUAL_NO_BOMB_SCENARIOS[counterfactualIndex % COUNTERFACTUAL_NO_BOMB_SCENARIOS.length];

  // Bias shift calculation
  const didShiftStance =
    (initialBias === 'pro-bomb' && finalDecision === 'withhold') ||
    (initialBias === 'anti-bomb' && finalDecision === 'drop');

  const stanceShiftLabel = didShiftStance
    ? 'Significant Stance Shift Observed'
    : 'Initial Stance Reinforced';

  const handlePrintPDF = () => {
    soundFx.playStamp();
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-16 animate-fadeIn">
      
      {/* SCREEN VIEW ONLY: Header & Action Bar */}
      <div className="no-print bg-[#1e1711] border border-[#523e2b] rounded-xl p-5 text-[#ede4d4] shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#c5a059] bg-[#2b2016] px-2.5 py-0.5 rounded border border-[#483624]">
            OAK RIDGE HIGH SCHOOL · CP WORLD HISTORY DEBRIEF
          </span>
          <h1 className="text-2xl font-serif font-bold text-[#f5efe3] mt-1">
            Executive Decision Analysis: Summer 1945
          </h1>
          <p className="text-xs text-[#a3907c] font-mono mt-0.5">
            Commander-in-Chief Vote:{' '}
            <strong className={finalDecision === 'drop' ? 'text-[#f87171]' : 'text-[#86efac]'}>
              {finalDecision === 'drop' ? 'ORDERED ATOMIC BOMBING' : 'WITHHELD ATOMIC WEAPONS'}
            </strong>
          </p>
        </div>

        {/* Print / Save PDF Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrintPDF}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d8b368] text-[#1c140d] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            title="Print or Save as Formatted 1-Page PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF Report</span>
          </button>
        </div>
      </div>

      {/* SCREEN VIEW ONLY: Tab Switchers */}
      <div className="no-print flex items-center gap-2 p-1.5 bg-[#140f0b] rounded-xl border border-[#3b2d1f]">
        <button
          onClick={() => {
            soundFx.playDial();
            setActiveTab('outcome');
          }}
          className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-colors ${
            activeTab === 'outcome'
              ? 'bg-[#3b2d1f] text-[#f5efe3] font-bold shadow'
              : 'text-[#9e8870] hover:text-[#d9ccb9]'
          }`}
        >
          {finalDecision === 'drop' ? '📜 1. Historical Outcome' : '🌐 1. Counterfactual Timeline'}
        </button>
        <button
          onClick={() => {
            soundFx.playDial();
            setActiveTab('reality');
          }}
          className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-colors ${
            activeTab === 'reality'
              ? 'bg-[#3b2d1f] text-[#f5efe3] font-bold shadow'
              : 'text-[#9e8870] hover:text-[#d9ccb9]'
          }`}
        >
          ⚖️ 2. What Actually Happened
        </button>
        <button
          onClick={() => {
            soundFx.playDial();
            setActiveTab('reflection');
          }}
          className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-mono font-medium transition-colors ${
            activeTab === 'reflection'
              ? 'bg-[#3b2d1f] text-[#f5efe3] font-bold shadow'
              : 'text-[#9e8870] hover:text-[#d9ccb9]'
          }`}
        >
          📝 3. Stance-Shift & Submission
        </button>
      </div>

      {/* TAB 1: DECISION OUTCOME */}
      {activeTab === 'outcome' && (
        <div className="no-print space-y-6">
          {finalDecision === 'drop' ? (
            /* YES: Real World Consequences & Testimonies */
            <div className="bg-[#fbf7ee] text-[#1c150e] border-2 border-[#c8b79b] rounded-xl shadow-xl p-6 md:p-8 space-y-6">
              <div className="border-b-2 border-[#d5c3a5] pb-4">
                <div className="flex items-center gap-2 text-[#991b1b] font-mono text-xs font-bold uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#991b1b]" />
                  <span>The Effects of Atomic Weapons (August 1945)</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1f1710] mt-1">
                  Hiroshima & Nagasaki: The Birth of the Nuclear Age
                </h2>
                <p className="text-sm text-[#705a42] font-mono mt-1">
                  Primary Consequence: War concluded within 9 days; over 200,000 dead; world transformed forever.
                </p>
              </div>

              {/* Archival Ruins Photograph with Vintage Photo Filter */}
              <div className="bg-[#120e0a] border border-[#d2c0a4] rounded-lg p-2 overflow-hidden shadow-md">
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded bg-[#1f1812] group">
                  <img
                    src={atomicAftermathImg}
                    alt="Aftermath of Hiroshima atomic bombing"
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      vintageFilterActive
                        ? 'filter grayscale contrast-135 brightness-95 sepia-[0.12]'
                        : 'filter contrast-110'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {onToggleVintageFilter && (
                    <button
                      type="button"
                      onClick={onToggleVintageFilter}
                      className="absolute bottom-2 right-2 bg-black/80 hover:bg-black text-[#f3ede3] border border-[#c5a059]/60 text-[10px] font-mono px-2 py-1 rounded shadow-md flex items-center gap-1.5 backdrop-blur-sm transition-all cursor-pointer"
                      title="Toggle 1945 High-Contrast Black & White Archival Filter"
                    >
                      <Camera className="w-3 h-3 text-[#c5a059]" />
                      <span>{vintageFilterActive ? '1945 B&W Filter: ON' : '1945 B&W Filter: OFF'}</span>
                    </button>
                  )}
                </div>
                <p className="text-xs font-mono text-[#c5b59f] px-2 pt-2 text-center">
                  Archival photograph: Devastation of Hiroshima, August 1945. A single concrete arch remains amidst square miles of pulverized ashes.
                </p>
              </div>

              {/* Historical Reality Narrative */}
              <div className="text-sm md:text-base text-[#382b1d] leading-relaxed space-y-3 font-sans">
                <p>
                  On August 6, 1945, at 8:15 AM, the uranium bomb <em>Little Boy</em> detonated 1,900 feet above the Shima Surgical Clinic in Hiroshima. In less than one-tenth of a second, the temperature at ground zero reached 7,000°F. The blast and ensuing firestorm leveled five square miles and killed approximately 80,000 people within hours.
                </p>
                <p>
                  Japanese residents who survived had been living their everyday lives one minute—eating breakfast, walking to school, reporting to factories—and then, in an instant, found themselves amidst a Moonlike landscape reduced to fire and ashes. As is the case in descriptions of war, statistics about vast numbers of dead can be numbing, impersonal, and difficult to grasp. But individual eyewitness testimonies speak for the human tragedy:
                </p>
              </div>

              {/* First-hand Survivor Testimonies */}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif font-bold text-sm md:text-base text-[#1a140d] uppercase tracking-wide">
                  First-Hand Eyewitness Accounts of Survivors (Hibakusha):
                </h3>

                {HISTORICAL_SURVIVOR_TESTIMONIES.map((testimony, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#f4ecdf] border-l-4 border-[#8f2b2b] rounded-r-lg space-y-2 text-xs md:text-sm text-[#3b2d1f]"
                  >
                    <p className="font-serif italic leading-relaxed text-[#261c13]">
                      “{testimony.quote}”
                    </p>
                    <div className="text-xs font-mono text-[#78614a] pt-1 border-t border-[#dfceb6]">
                      <strong className="text-[#1a140d]">{testimony.author}</strong> ({testimony.ageIn1945}) · {testimony.location}
                    </div>
                  </div>
                ))}
              </div>

              {/* Multi-Perspective Strategic Debrief */}
              <div className="mt-6 pt-5 border-t border-[#d5c3a5] grid sm:grid-cols-2 gap-4 text-xs md:text-sm font-sans">
                <div className="p-4 bg-[#f0e7d5] rounded-lg space-y-2 border border-[#cbba9e]">
                  <h4 className="font-bold text-[#8a2424] font-serif uppercase tracking-wider text-xs">
                    Near-Term Military & Political Result:
                  </h4>
                  <p className="text-[#423323] leading-relaxed">
                    Emperor Hirohito broke the deadlock of the Supreme War Council on August 10 and announced Japan’s surrender on August 15. An estimated 250,000 to 500,000 Allied casualties were spared from having to invade mainland Japan in Operation Downfall.
                  </p>
                </div>
                <div className="p-4 bg-[#f0e7d5] rounded-lg space-y-2 border border-[#cbba9e]">
                  <h4 className="font-bold text-[#1e4663] font-serif uppercase tracking-wider text-xs">
                    Long-Term Nuclear & Cold War Legacy:
                  </h4>
                  <p className="text-[#423323] leading-relaxed">
                    The atomic attacks triggered an immediate nuclear arms race. Within four years, the Soviet Union tested its own bomb in 1949. By 1962, humanity was on the edge of global thermonuclear destruction during the Cuban Missile Crisis.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* NO: Counterfactual Historical Simulation */
            <div className="bg-[#fbf7ee] text-[#1c150e] border-2 border-[#c8b79b] rounded-xl shadow-xl p-6 md:p-8 space-y-6">
              <div className="border-b-2 border-[#d5c3a5] pb-4">
                <div className="flex items-center gap-2 text-[#2e7d32] font-mono text-xs font-bold uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2e7d32]" />
                  <span>Counterfactual Alternate History Simulation</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1f1710] mt-1">
                  {counterfactual.title}
                </h2>
                <p className="text-sm text-[#705a42] font-mono mt-1">
                  Outcome Type: <strong>{counterfactual.outcomeType}</strong> · Projected Timeframe: {counterfactual.timeframe}
                </p>
              </div>

              {/* Simulation Narrative */}
              <div className="text-sm md:text-base text-[#382b1d] leading-relaxed space-y-3 font-sans">
                <p className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#2e7d32]">
                  {counterfactual.summary}
                </p>
              </div>

              {/* Counterfactual Impact Metrics */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs md:text-sm font-mono">
                <div className="p-3 bg-[#f2e7d3] border border-[#d8caa8] rounded-lg space-y-1">
                  <span className="text-[10px] text-[#735e49] uppercase">Projected Allied Losses</span>
                  <p className="font-bold text-[#8a2424] font-serif text-base">
                    {counterfactual.usCasualties}
                  </p>
                </div>
                <div className="p-3 bg-[#f2e7d3] border border-[#d8caa8] rounded-lg space-y-1">
                  <span className="text-[10px] text-[#735e49] uppercase">Soviet Geopolitical Sphere</span>
                  <p className="font-bold text-[#1f3f5c] font-serif text-base">
                    {counterfactual.sovietInfluence}
                  </p>
                </div>
                <div className="p-3 bg-[#f2e7d3] border border-[#d8caa8] rounded-lg space-y-1">
                  <span className="text-[10px] text-[#735e49] uppercase">Global Moral Standing</span>
                  <p className="font-bold text-[#235229] font-serif text-base">
                    Non-Atomic World Order
                  </p>
                </div>
              </div>

              {/* Truman's Domestic Political Reckoning */}
              <div className="p-4 bg-[#f4ecdf] border-l-4 border-[#8f5a18] rounded-r-lg space-y-2 text-xs md:text-sm text-[#3b2d1f]">
                <h4 className="font-serif font-bold text-sm md:text-base text-[#1a140d]">
                  The Political Trial of President Truman:
                </h4>
                <p className="leading-relaxed">
                  {counterfactual.moralStanding}
                </p>
              </div>

              {/* Historical Scholarship Grounding */}
              <div className="p-3.5 bg-[#f0e7d5] border border-[#cbba9e] rounded-lg text-xs md:text-sm font-sans text-[#423323] space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-[#735e49] tracking-wider block">
                  HISTORICAL SCHOLARSHIP NOTE:
                </span>
                <p className="leading-relaxed">
                  This counterfactual simulation is grounded directly in real analysis, declassified war plans (such as Operation Downfall and Ultra intelligence decrypts), and scholarly arguments formulated by leading historians of the Pacific War and the atomic era, including Tsuyoshi Hasegawa, Richard B. Frank, and D.M. Giangreco.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: WHAT ACTUALLY HAPPENED */}
      {activeTab === 'reality' && (
        <div className="no-print bg-[#fbf7ee] text-[#1c150e] border-2 border-[#c8b79b] rounded-xl shadow-xl p-6 md:p-8 space-y-6">
          <div className="border-b-2 border-[#d5c3a5] pb-4">
            <span className="text-xs uppercase font-mono text-[#8a6840] tracking-wider">
              Historical Ledger & Reality Contrast
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1f1710] mt-1">
              What Actually Happened in Summer 1945
            </h2>
            <p className="text-xs md:text-sm text-[#6e5840] font-mono mt-0.5">
              Comparing your simulation commands against the real choices made by President Truman and his cabinet
            </p>
          </div>

          <div className="space-y-4">
            {WHAT_ACTUALLY_HAPPENED_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#f5efe3] border border-[#d8c8b0] rounded-lg space-y-2.5 text-xs md:text-sm text-[#3a2d20]"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-[#ddccb5]">
                  <h3 className="font-serif font-bold text-sm md:text-base text-[#1f1710]">
                    {item.decisionArea}
                  </h3>
                  <span className="text-[10px] font-mono text-[#8f5a18] bg-[#fae8c8] px-2 py-0.5 rounded">
                    1945 Reality
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#ede4d2] rounded border border-[#cbba9e] space-y-1">
                    <span className="font-mono text-[10px] text-[#715c46] uppercase font-bold">
                      What Really Happened:
                    </span>
                    <p className="leading-relaxed text-[#2b2116]">
                      {item.whatActuallyHappened}
                    </p>
                  </div>

                  <div className="p-3 bg-[#ede4d2] rounded border border-[#cbba9e] space-y-1">
                    <span className="font-mono text-[10px] text-[#715c46] uppercase font-bold">
                      Key Historical Divergence:
                    </span>
                    <p className="leading-relaxed text-[#2b2116]">
                      {item.keyDivergence}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#8a7258] pt-1">
                  <strong>Key Historical Actors:</strong> {item.historicalActors}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: STANCE-SHIFT REFLECTION & SUBMISSION */}
      {activeTab === 'reflection' && (
        <div className="no-print bg-[#fbf7ee] text-[#1c150e] border-2 border-[#c8b79b] rounded-xl shadow-xl p-6 md:p-8 space-y-6">
          <div className="border-b-2 border-[#d5c3a5] pb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-mono text-[#8a6840] tracking-wider">
                Oak Ridge High School CP World History Assessment
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1f1710] mt-1">
                Stance-Shift Analysis & Submission
              </h2>
            </div>
            <button
              onClick={handlePrintPDF}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#d8b368] text-[#1c140d] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save 1-Page PDF</span>
            </button>
          </div>

          {/* Student Identifiers for PDF */}
          <div className="p-4 bg-[#f2e9db] border border-[#d4c3ab] rounded-lg grid sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <label className="block text-[#6a543e] uppercase text-[10px] font-bold mb-1">
                Student Full Name:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your first & last name..."
                className="w-full p-2 bg-[#fdfbf7] border border-[#cbba9e] rounded text-sm text-[#1f1710] font-sans"
              />
            </div>
            <div>
              <label className="block text-[#6a543e] uppercase text-[10px] font-bold mb-1">
                Class Period:
              </label>
              <input
                type="text"
                value={classPeriod}
                onChange={(e) => setClassPeriod(e.target.value)}
                placeholder="e.g. 3rd Period CP World History"
                className="w-full p-2 bg-[#fdfbf7] border border-[#cbba9e] rounded text-sm text-[#1f1710] font-sans"
              />
            </div>
          </div>

          {/* Stance Comparison Card */}
          <div className="p-4 bg-[#f5efe3] border-2 border-[#c5a059] rounded-lg grid sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-[10px] uppercase text-[#735e49]">Round 0 Initial Bias</span>
              <p className="font-serif font-bold text-sm text-[#1f1710] mt-0.5">
                {initialBias === 'pro-bomb'
                  ? '"Probably the right decision"'
                  : '"Already against atomic weapons"'}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#735e49]">Round 6 Executive Order</span>
              <p
                className={`font-serif font-bold text-sm mt-0.5 ${
                  finalDecision === 'drop' ? 'text-[#8a2424]' : 'text-[#2e7d32]'
                }`}
              >
                {finalDecision === 'drop' ? 'ORDERED ATOMIC BOMBING' : 'WITHHELD ATOMIC WEAPONS'}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#735e49]">Analytical Evolution</span>
              <p className="font-serif font-bold text-sm text-[#8f5a18] mt-0.5">
                {stanceShiftLabel}
              </p>
            </div>
          </div>

          {/* Heaviest Weight Factor */}
          <div className="p-4 bg-[#f0e7d5] border border-[#d0c0a3] rounded-lg text-xs md:text-sm space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#78614a] font-bold">
              Primary Factor That Weighed Heaviest in Your Conscience:
            </span>
            <p className="font-serif italic text-base text-[#1f1710]">
              “{weightFactor}”
            </p>
          </div>

          {/* Interactive CER (Claim-Evidence-Reasoning) Prompt */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif font-bold text-sm md:text-base text-[#1f1710] uppercase tracking-wide">
              CP World History Classroom Synthesis Response:
            </h3>

            <div className="p-4 bg-[#f8f3e9] border border-[#d8c9b3] rounded-lg space-y-3 text-xs md:text-sm text-[#3a2d20]">
              <p className="font-serif font-semibold text-sm md:text-base">
                ❓ Essential Question: Should President Truman choose to drop atomic bombs on Hiroshima and Nagasaki?
              </p>
              <div className="grid sm:grid-cols-3 gap-2 text-xs font-mono text-[#523e2a] bg-[#efe5d2] p-2.5 rounded border border-[#dfd2be]">
                <div>💡 <strong>Claim:</strong> Your clear stance</div>
                <div>🔍 <strong>Evidence:</strong> 1 pro & 1 anti source</div>
                <div>🧠 <strong>Reasoning:</strong> Why it convinced you</div>
              </div>

              <textarea
                value={studentReconsiderAnswer}
                onChange={(e) => setStudentReconsiderAnswer(e.target.value)}
                placeholder="Type your Claim-Evidence-Reasoning (CER) reflection here... (e.g., 'I claim that President Truman should... because Evidence from Round 1 shows... while Evidence from Round 5 shows... Ultimately, my reasoning is...')"
                rows={5}
                className="w-full p-3.5 rounded border border-[#cbba9e] bg-[#fbf8f0] text-sm font-sans text-[#1a140d] focus:outline-none focus:ring-2 focus:ring-[#99471b]"
              />

              <div className="flex items-center justify-between text-xs font-mono text-[#8a7258] pt-1">
                <span>🏫 Oak Ridge High School History Rubric Standard</span>
                {studentReconsiderAnswer.trim().length > 30 && (
                  <span className="text-[#2e7d32] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Response Ready for PDF Export ✅
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Replay */}
          <div className="flex justify-between items-center pt-6 border-t border-[#d5c3a5]">
            <span className="text-xs font-mono text-[#8a7258]">
              Ready to submit to your teacher via PDF or print
            </span>
            <button
              onClick={() => {
                soundFx.playStamp();
                onRestart();
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#2b1f14] hover:bg-[#3d2d1d] text-[#e8decb] font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Simulation</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1-PAGE FORMATTED PRINT-ONLY DOCUMENT (FOR PDF / PRINTER) */}
      {/* ========================================================= */}
      <div className="print-only print-container font-sans text-black leading-tight">
        
        {/* Document Header */}
        <div className="border-b-2 border-black pb-2 mb-3 flex justify-between items-start">
          <div>
            <h1 className="text-lg font-bold uppercase tracking-tight font-serif">
              OAK RIDGE HIGH SCHOOL · CP WORLD HISTORY
            </h1>
            <p className="text-xs font-mono text-gray-700">
              Simulation: Truman’s Desk: YOU Decide · August 1945 Executive Decision Report
            </p>
          </div>
          <div className="text-right text-xs font-mono">
            <div><strong>Student:</strong> {studentName || '________________________'}</div>
            <div><strong>Period:</strong> {classPeriod || '_____'} · <strong>Date:</strong> {new Date().toLocaleDateString()}</div>
          </div>
        </div>

        {/* Executive Verdict Strip */}
        <div className="border border-black p-2 mb-3 bg-gray-50 flex justify-between items-center text-xs">
          <div>
            <span className="text-[9px] uppercase font-mono text-gray-600 block">Round 0 Pre-Game Bias:</span>
            <strong>{initialBias === 'pro-bomb' ? 'PRO-BOMB (Supported use)' : 'ANTI-BOMB (Against use)'}</strong>
          </div>
          <div className="text-center px-4 border-x border-gray-300">
            <span className="text-[9px] uppercase font-mono text-gray-600 block">Final Commander-in-Chief Vote:</span>
            <strong className="text-sm font-serif">
              {finalDecision === 'drop' ? 'ORDERED ATOMIC BOMBING' : 'WITHHELD ATOMIC WEAPONS'}
            </strong>
          </div>
          <div className="text-right">
            <span className="text-[9px] uppercase font-mono text-gray-600 block">Stance Shift Evolution:</span>
            <strong>{stanceShiftLabel}</strong>
          </div>
        </div>

        {/* Telemetry Gauge Scores */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-center text-xs border border-gray-300 p-1.5">
          <div>
            <span className="text-[9px] text-gray-600 font-mono block">Military Confidence:</span>
            <strong>{gauges.military}%</strong>
          </div>
          <div>
            <span className="text-[9px] text-gray-600 font-mono block">Political Pressure:</span>
            <strong>{gauges.political}%</strong>
          </div>
          <div>
            <span className="text-[9px] text-gray-600 font-mono block">Public Opinion Polling:</span>
            <strong>{gauges.public}%</strong>
          </div>
        </div>

        {/* Executive Orders Across Rounds Table */}
        <div className="mb-3">
          <h2 className="text-[10px] font-bold uppercase tracking-wider font-mono border-b border-gray-400 pb-0.5 mb-1">
            Executive Decision Log (Rounds 1–6):
          </h2>
          <table className="w-full text-[9px] border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left border-b border-gray-300">
                <th className="p-1 w-16">Round</th>
                <th className="p-1 w-32">Topic</th>
                <th className="p-1">Executive Order Issued</th>
                <th className="p-1 w-36">Strategic Outcome</th>
              </tr>
            </thead>
            <tbody>
              {HISTORICAL_ROUNDS.map((r) => {
                const choice = choicesMade[r.roundNumber];
                return (
                  <tr key={r.roundNumber} className="border-b border-gray-200">
                    <td className="p-1 font-mono">Round {r.roundNumber}</td>
                    <td className="p-1 font-semibold">{r.title}</td>
                    <td className="p-1 italic">
                      {choice ? choice.label : (r.roundNumber === 6 ? (finalDecision === 'drop' ? 'ORDER ATOMIC BOMBING' : 'WITHHOLD ATOMIC WEAPONS') : 'Emergency Jump')}
                    </td>
                    <td className="p-1 text-gray-600">
                      {choice ? choice.impact.summary : (r.roundNumber === 6 ? weightFactor : 'Cabinet Crisis')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Conscience Factor */}
        <div className="p-2 border border-gray-300 mb-3 text-[10px]">
          <strong>Primary Factor Weighing Heaviest in Decision: </strong>
          <span className="italic">“{weightFactor}”</span>
        </div>

        {/* Student CER Written Synthesis */}
        <div className="border border-black p-2 mb-3">
          <h2 className="text-[10px] font-bold uppercase tracking-wider font-mono mb-1">
            Student CER (Claim · Evidence · Reasoning) Argument:
          </h2>
          <p className="text-[10px] italic min-h-[60px] leading-relaxed">
            {studentReconsiderAnswer ||
              '[Student left CER written prompt blank during interactive simulation session. Prompt required stating a clear claim, evaluating both pro-bomb and anti-bomb 1945 dossier evidence, and synthesizing strategic/moral reasoning.]'}
          </p>
        </div>

        {/* Teacher Evaluation & Rubric Box */}
        <div className="border-2 border-black p-2 text-[9px]">
          <div className="flex justify-between items-center mb-1 border-b border-gray-300 pb-1">
            <span className="font-bold uppercase tracking-wider font-mono">
              Teacher Assessment & Evaluation Rubric:
            </span>
            <span>Grade Score: _______ / 100</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-[8px] text-gray-700">
            <div>
              <strong>Historical Claim:</strong>
              <p>Clear stance with strategic justification.</p>
            </div>
            <div>
              <strong>1945 Evidence:</strong>
              <p>Cites primary/secondary sources without anachronism.</p>
            </div>
            <div>
              <strong>Counter-Analysis:</strong>
              <p>Directly weighs opposing viewpoint.</p>
            </div>
            <div>
              <strong>Oak Ridge Context:</strong>
              <p>Understands Manhattan Project secrecy & ethics.</p>
            </div>
          </div>
          <div className="mt-2 pt-1 border-t border-gray-300 text-[9px]">
            <strong>Teacher Comments:</strong> ____________________________________________________________________________________
          </div>
        </div>

      </div>

    </div>
  );
};
