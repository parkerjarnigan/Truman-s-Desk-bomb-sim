import React, { useState } from 'react';
import { ReadingLevel, BiasStance } from '../types/simulation';
import { soundFx } from '../utils/audio';
import { BookOpen, Shield, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface CalibrationModalProps {
  onComplete: (readingLevel: ReadingLevel, bias: BiasStance) => void;
}

export const CalibrationModal: React.FC<CalibrationModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'welcome' | 'gauge_intro' | 'reading_test' | 'bias_selection'>('welcome');
  const [selectedReadingOption, setSelectedReadingOption] = useState<ReadingLevel>('standard');
  const [selectedBias, setSelectedBias] = useState<BiasStance | null>(null);

  // Calibration questions disguised as adviser briefing preference
  const readingPreferences = [
    {
      id: 'accessible' as ReadingLevel,
      title: '🟢 Accessible / Visual Scaffolding',
      desc: 'Clear, direct summaries with bullet-pointed military facts, key concepts, and visual icons for English Language Learners (ELL) and developing readers.',
      sampleText: '"Keep reports focused on essential battle numbers, immediate civilian food shortages, and clear tactical choices."'
    },
    {
      id: 'standard' as ReadingLevel,
      title: '🟡 Standard Cabinet Memoranda',
      desc: 'Balanced historical documents with diplomatic context, cabinet debates, and full advisory memos.',
      sampleText: '"Provide full intelligence summaries balancing Joint Chiefs projections against State Department cables."'
    },
    {
      id: 'advanced' as ReadingLevel,
      title: '🔴 Unabridged Strategic Intelligence',
      desc: 'Deep archival detail with military acronyms (Ultra, Magic, Ketsu-Go), economic production metrics, and grand strategic doctrine.',
      sampleText: '"Present rigorous declassified cryptographic intercepts, diplomatic communiqués, and economic survey datasets."'
    }
  ];

  const handleStart = () => {
    soundFx.playStamp();
    setStep('gauge_intro');
  };

  const handleGaugeDone = () => {
    soundFx.playTypewriter();
    setStep('reading_test');
  };

  const handleReadingDone = () => {
    soundFx.playTypewriter();
    setStep('bias_selection');
  };

  const handleFinish = () => {
    if (!selectedBias) return;
    soundFx.playStamp();
    onComplete(selectedReadingOption, selectedBias);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0a08]/90 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-[#1d1610] border-2 border-[#523e2b] rounded-xl shadow-2xl p-6 md:p-8 text-[#ede4d4] my-auto">
        
        {/* Step 1: Welcome & Teacher Framing */}
        {step === 'welcome' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#3e2e1e] pb-4">
              <div className="w-12 h-12 rounded-lg bg-[#2e2116] border border-[#5a422d] flex items-center justify-center text-[#c5a059] shrink-0 font-serif font-bold text-2xl shadow-inner">
                OR
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#9d886f]">
                  Oak Ridge High School · Oak Ridge, TN
                </span>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#f5efe3]">
                  Truman’s Desk: YOU Decide
                </h1>
                <p className="text-xs text-[#b8a691] font-mono">
                  CP World History Interactive Simulation
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#d4c6b5] leading-relaxed">
              <p>
                Welcome, students. Here in <strong>Oak Ridge, Tennessee</strong>—the once-secret "Atomic City" whose massive plants enriched the uranium for the Manhattan Project—we hold a unique connection to the fateful events of the summer of 1945.
              </p>
              <p>
                In this simulation, you are stepping directly behind President Harry S. Truman’s desk. Barely three months into his presidency following the death of Franklin D. Roosevelt, Truman faced one of the most agonizing decisions in world history: <strong>should the United States drop atomic bombs on Hiroshima and Nagasaki?</strong>
              </p>
              <p className="p-3.5 bg-[#261d15] border border-[#483623] rounded-lg text-xs font-mono text-[#c5a059]">
                📜 <strong>Historical Rule:</strong> You will evaluate only the information, primary sources, and military estimates available to President Truman in 1945. Beware of 21st-century hindsight!
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleStart}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d6b26b] text-[#1a140d] font-serif font-bold text-sm tracking-wide shadow-md transition-colors"
              >
                <span>Enter Presidential Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: The Trio Pressure Gauge Orientation */}
        {step === 'gauge_intro' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-[#3e2e1e] pb-3">
              <span className="text-xs uppercase font-mono text-[#c5a059]">
                Briefing 01 of 03: Executive Telemetry
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#f5efe3]">
                The Trio Pressure Gauge System
              </h2>
              <p className="text-xs text-[#a69279] font-mono mt-0.5">
                How Truman’s three crucial leadership pressures are tracked throughout the simulation
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-3">
              <div className="p-4 bg-[#241a12] border border-[#3e2d1f] rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-[#6ee7b7]">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-bold text-xs uppercase font-mono tracking-wider">Military Confidence</h3>
                </div>
                <p className="text-xs md:text-sm text-[#c4b5a3] leading-relaxed">
                  Reflects the trust of General Marshall and Pacific combat troops. Dropping too low risks military mutiny or insubordination.
                </p>
                <div className="text-xs font-mono text-[#8a7660]">Starting range: 70% – 85%</div>
              </div>

              <div className="p-4 bg-[#241a12] border border-[#3e2d1f] rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-[#fbbf24]">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-bold text-xs uppercase font-mono tracking-wider">Political Pressure</h3>
                </div>
                <p className="text-xs md:text-sm text-[#c4b5a3] leading-relaxed">
                  Reflects support from Congress, Allied leaders (Churchill, Stalin), and Truman’s cabinet. High volatility based on secrecy.
                </p>
                <div className="text-xs font-mono text-[#8a7660]">Starting range: 40% – 90%</div>
              </div>

              <div className="p-4 bg-[#241a12] border border-[#3e2d1f] rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-[#93c5fd]">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-bold text-xs uppercase font-mono tracking-wider">Public Opinion</h3>
                </div>
                <p className="text-xs md:text-sm text-[#c4b5a3] leading-relaxed">
                  American civilian morale, patience with rationing, and tolerance for mounting telegram casualty lists.
                </p>
                <div className="text-xs font-mono text-[#8a7660]">Starting range: 50% – 75%</div>
              </div>
            </div>

            <div className="p-4 bg-[#2f1b1b] border border-[#782c2c] rounded-lg space-y-2 text-xs md:text-sm text-[#ffd2d2]">
              <p className="font-bold font-mono uppercase text-[#ff8080]">
                ⚠️ EMERGENCY COLLAPSE RULE (≤ 25% THRESHOLD):
              </p>
              <p className="leading-relaxed">
                Every decision moves your gauges by <strong>5% to 25%</strong>. Warning sirens sound when any gauge drops to <strong>≤ 35%</strong>. If any single gauge drops to <strong>≤ 25%</strong>, your administration suffers an immediate crisis collapse. You will instantly lose decision time, skip remaining briefings, and be forced straight into Round 6 with <em>heavily redacted intelligence</em>!
              </p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStep('welcome')}
                className="text-xs font-mono text-[#9e886f] hover:text-[#e4d5bf]"
              >
                ← Back
              </button>
              <button
                onClick={handleGaugeDone}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d6b26b] text-[#1a140d] font-serif font-bold text-sm tracking-wide shadow-md transition-colors"
              >
                <span>Acknowledge Telemetry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Adaptive Reading Level Selection */}
        {step === 'reading_test' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-[#3e2e1e] pb-3">
              <span className="text-xs uppercase font-mono text-[#c5a059]">
                Briefing 02 of 03: Chief of Staff Preference
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#f5efe3]">
                Adviser Briefing Protocol
              </h2>
              <p className="text-xs text-[#a69279] font-mono mt-0.5">
                How would you prefer presidential dossiers and primary sources formatted during this session?
              </p>
            </div>

            <div className="space-y-3">
              {readingPreferences.map(pref => {
                const isSelected = selectedReadingOption === pref.id;
                return (
                  <div
                    key={pref.id}
                    onClick={() => {
                      soundFx.playTypewriter();
                      setSelectedReadingOption(pref.id);
                    }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#2b2016] border-[#c5a059] ring-1 ring-[#c5a059]'
                        : 'bg-[#211811] border-[#3e2e1e] hover:border-[#6b5235]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif font-bold text-sm text-[#f5efe3]">
                        {pref.title}
                      </h4>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                      )}
                    </div>
                    <p className="text-xs text-[#c7b7a4] mb-2">{pref.desc}</p>
                    <p className="text-[11px] font-mono italic text-[#8e7a64]">
                      {pref.sampleText}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStep('gauge_intro')}
                className="text-xs font-mono text-[#9e886f] hover:text-[#e4d5bf]"
              >
                ← Back
              </button>
              <button
                onClick={handleReadingDone}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#d6b26b] text-[#1a140d] font-serif font-bold text-sm tracking-wide shadow-md transition-colors"
              >
                <span>Confirm Briefing Style</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Pre-Existing Bias Check & Stance Framing */}
        {step === 'bias_selection' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-[#3e2e1e] pb-3">
              <span className="text-xs uppercase font-mono text-[#c5a059]">
                Briefing 03 of 03: Pre-Game Stance Calibration
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#f5efe3]">
                Where Do You Stand Today?
              </h2>
              <p className="text-xs text-[#a69279] font-mono mt-0.5">
                Before examining the 1945 dossiers, indicate your initial personal perspective.
              </p>
            </div>

            {/* Illustrative Quotes framing the stakes */}
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-[#241a12] border-l-2 border-[#c5a059] rounded-r-lg space-y-1">
                <span className="font-mono text-[10px] text-[#c5a059] uppercase tracking-wider">
                  President Harry S. Truman
                </span>
                <p className="font-serif italic text-[#dfd2c1]">
                  “The dropping of the bombs stopped the war, saved millions of lives….”
                </p>
              </div>
              <div className="p-3.5 bg-[#241a12] border-l-2 border-[#b8764a] rounded-r-lg space-y-1">
                <span className="font-mono text-[10px] text-[#b8764a] uppercase tracking-wider">
                  Maj. Gen. Curtis LeMay, U.S. Army Air Force
                </span>
                <p className="font-serif italic text-[#dfd2c1]">
                  “The atomic bomb had nothing to do with the end of the war at all.”
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <p className="text-xs font-mono text-[#b3a18e]">
                Select the statement closest to your current initial instinct:
              </p>

              <div
                onClick={() => {
                  soundFx.playTypewriter();
                  setSelectedBias('pro-bomb');
                }}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedBias === 'pro-bomb'
                    ? 'bg-[#2b2016] border-[#c5a059] ring-1 ring-[#c5a059]'
                    : 'bg-[#211811] border-[#3e2e1e] hover:border-[#6b5235]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-sm text-[#f5efe3] flex items-center gap-2">
                    <span>💥</span>
                    <span>"I think the atomic bomb was probably the right decision."</span>
                  </span>
                  {selectedBias === 'pro-bomb' && (
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  )}
                </div>
                <p className="text-xs text-[#a3917d] mt-1 font-mono pl-6">
                  Believing it shortened the war, avoided a bloody invasion, and saved countless soldier lives.
                </p>
              </div>

              <div
                onClick={() => {
                  soundFx.playTypewriter();
                  setSelectedBias('anti-bomb');
                }}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedBias === 'anti-bomb'
                    ? 'bg-[#2b2016] border-[#c5a059] ring-1 ring-[#c5a059]'
                    : 'bg-[#211811] border-[#3e2e1e] hover:border-[#6b5235]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-semibold text-sm text-[#f5efe3] flex items-center gap-2">
                    <span>🕊️</span>
                    <span>"I already am against the use of atomic weapons."</span>
                  </span>
                  {selectedBias === 'anti-bomb' && (
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  )}
                </div>
                <p className="text-xs text-[#a3917d] mt-1 font-mono pl-6">
                  Believing Japan was already defeated by blockade, or that weapons of mass civilian annihilation are morally unacceptable.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-[#8e7a64] font-mono italic">
              Note: The simulation will actively challenge your selected stance across subsequent rounds to test your critical thinking and historical empathy.
            </p>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStep('reading_test')}
                className="text-xs font-mono text-[#9e886f] hover:text-[#e4d5bf]"
              >
                ← Back
              </button>
              <button
                disabled={!selectedBias}
                onClick={handleFinish}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-serif font-bold text-sm tracking-wide shadow-md transition-all ${
                  selectedBias
                    ? 'bg-[#c5a059] hover:bg-[#d6b26b] text-[#1a140d] cursor-pointer'
                    : 'bg-[#3b2e21] text-[#715c46] cursor-not-allowed'
                }`}
              >
                <span>Take the Oath & Assume Truman’s Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
