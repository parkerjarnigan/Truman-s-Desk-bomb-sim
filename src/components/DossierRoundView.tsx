import React, { useState, useEffect, useRef } from 'react';
import { HistoricalRoundData, ReadingLevel, BiasStance, RoundChoice } from '../types/simulation';
import { soundFx } from '../utils/audio';
import { FileText, Quote, ArrowRight, AlertCircle, CheckCircle, Camera } from 'lucide-react';

interface DossierRoundViewProps {
  roundData: HistoricalRoundData;
  readingLevel: ReadingLevel;
  playerBias: BiasStance | null;
  vintageFilterActive?: boolean;
  onToggleVintageFilter?: () => void;
  onSelectDecision: (choice: RoundChoice) => void;
  onSpeedrunTriggered: () => void;
}

export const DossierRoundView: React.FC<DossierRoundViewProps> = ({
  roundData,
  readingLevel,
  playerBias,
  vintageFilterActive = true,
  onToggleVintageFilter,
  onSelectDecision,
  onSpeedrunTriggered,
}) => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());

  // Reset selection on round change
  useEffect(() => {
    setSelectedChoiceId(null);
    mountTimeRef.current = Date.now();
  }, [roundData.roundNumber]);

  const readingContent = roundData.readingVersions[readingLevel];

  const handleChoiceClick = (choiceId: string) => {
    soundFx.playTypewriter();
    setSelectedChoiceId(choiceId);
  };

  const handleSubmit = () => {
    if (!selectedChoiceId) return;
    const elapsedMs = Date.now() - mountTimeRef.current;
    
    // Anti-speedrun rule: if submitted in 5 seconds or less, trigger Adjutant warning!
    if (elapsedMs <= 5000) {
      onSpeedrunTriggered();
      return;
    }

    soundFx.playStamp();
    const choice = roundData.choices.find((c) => c.id === selectedChoiceId);
    if (choice) {
      onSelectDecision(choice);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-fadeIn">
      
      {/* Manila Folder Workspace Frame */}
      <div className="bg-[#fbf7ee] text-[#1e160e] border-2 border-[#c8b79b] rounded-xl shadow-2xl p-6 md:p-8 relative">
        
        {/* Top Secret Stamp & File Tab */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#d5c3a5] pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8f2b2b]" />
            <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-[#7a2222] bg-[#f5d9d9] px-2.5 py-0.5 rounded border border-[#deb2b2]">
              {roundData.classification}
            </span>
            <span className="text-xs font-mono text-[#8a7258]">
              · {roundData.dateString}
            </span>
          </div>

          <div className="font-mono text-xs text-[#8c745a] tracking-wider">
            DOSSIER FOLDER: RD-{roundData.roundNumber}-1945
          </div>
        </div>

        {/* Title & Essential Question */}
        <div className="space-y-2 mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-[#8a6840]">
            Round 0{roundData.roundNumber} Executive Briefing
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#1f1710] leading-tight">
            {roundData.title}
          </h1>
          <p className="text-sm font-serif italic text-[#634e38]">
            {roundData.subtitle}
          </p>

          <div className="p-3 bg-[#f2e7d3] border-l-4 border-[#c5a059] rounded-r-lg mt-3 text-xs md:text-sm text-[#3b2d1d] font-sans">
            <span className="font-bold font-serif text-[#1f1710]">Essential Question: </span>
            {roundData.essentialQuestion}
          </div>
        </div>

        {/* Archival Image with Vintage Photo Filter */}
        {roundData.imagePath && (
          <div className="my-6 bg-[#120e0a] border border-[#d2c0a4] rounded-lg p-2 overflow-hidden shadow-md">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded bg-[#1f1812] group">
              <img
                src={roundData.imagePath}
                alt={roundData.title}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  vintageFilterActive
                    ? 'filter grayscale contrast-135 brightness-95 sepia-[0.12]'
                    : 'filter contrast-110'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* In-place Vintage Photo Filter Toggle Badge */}
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
            {roundData.imageCaption && (
              <p className="text-[11px] font-mono text-[#c5b59f] px-2 pt-2 text-center">
                {roundData.imageCaption}
              </p>
            )}
          </div>
        )}

        {/* Executive Overview */}
        <div className="text-sm md:text-base text-[#382b1d] leading-relaxed mb-6 space-y-3 font-sans">
          <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#8a2424]">
            {readingContent.historicalOverview}
          </p>
        </div>

        {/* Pro-Bomb vs Anti-Bomb Evidence Split */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          
          {/* Pro-Bomb Arguments */}
          <div className={`p-4 rounded-lg border transition-all ${
            playerBias === 'anti-bomb' ? 'bg-[#fef9f0] border-[#c5a059] ring-1 ring-[#c5a059]/40' : 'bg-[#f5efe3] border-[#d8c8b0]'
          }`}>
            <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-[#ddccb5]">
              <h3 className="font-serif font-bold text-sm uppercase tracking-wide text-[#7d2020] flex items-center gap-1.5">
                <span>💥 Arguments Supporting Atomic Force</span>
              </h3>
              {playerBias === 'anti-bomb' && (
                <span className="text-[10px] font-mono text-[#8f5a18] bg-[#fae8c8] px-2 py-0.5 rounded font-bold">
                  ⚠️ Critical Challenge
                </span>
              )}
            </div>

            <ul className="space-y-2.5 text-xs md:text-sm text-[#3a2d20] leading-relaxed">
              {readingContent.proBombDetails.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8f2b2b] font-bold shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anti-Bomb Arguments */}
          <div className={`p-4 rounded-lg border transition-all ${
            playerBias === 'pro-bomb' ? 'bg-[#fef9f0] border-[#c5a059] ring-1 ring-[#c5a059]/40' : 'bg-[#f5efe3] border-[#d8c8b0]'
          }`}>
            <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-[#ddccb5]">
              <h3 className="font-serif font-bold text-sm uppercase tracking-wide text-[#1e4663] flex items-center gap-1.5">
                <span>🛡️ Arguments for Conventional Alternatives</span>
              </h3>
              {playerBias === 'pro-bomb' && (
                <span className="text-[10px] font-mono text-[#8f5a18] bg-[#fae8c8] px-2 py-0.5 rounded font-bold">
                  ⚠️ Critical Challenge
                </span>
              )}
            </div>

            <ul className="space-y-2.5 text-xs md:text-sm text-[#3a2d20] leading-relaxed">
              {readingContent.antiBombDetails.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#1e4663] font-bold shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Primary Source Quotes */}
        {roundData.quotes && roundData.quotes.length > 0 && (
          <div className="mb-6 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#735e49] font-bold">
              🎙️ PRIMARY SOURCE VOICES FROM 1945:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {roundData.quotes.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#f3ebd9] border border-[#d5c5ad] rounded-lg space-y-2 font-sans"
                >
                  <p className="font-serif italic text-xs md:text-sm text-[#2b2117] leading-relaxed">
                    “{q.quote}”
                  </p>
                  <div className="text-xs font-mono text-[#78624a] pt-1.5 border-t border-[#dfceb5]">
                    <span className="font-bold text-[#1f1710]">{q.speaker}</span>
                    <span className="text-[#8e7a64]"> · {q.role} ({q.year})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decision Selection Section */}
        <div className="mt-8 pt-6 border-t-2 border-[#d5c3a5] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-bold text-[#1f1710]">
                ✍️ Presidential Executive Order
              </h3>
              <p className="text-xs md:text-sm font-mono text-[#756149]">
                Review the options below. Each directive shifts your military, political, and public telemetry.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {roundData.choices.map((choice) => {
              const isSelected = selectedChoiceId === choice.id;
              return (
                <div
                  key={choice.id}
                  onClick={() => handleChoiceClick(choice.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#fefaf3] border-[#99471b] ring-2 ring-[#99471b]/30 shadow-md'
                      : 'bg-[#f5eee0] border-[#d8c9b2] hover:border-[#967d60]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#99471b] bg-[#99471b]' : 'border-[#968269]'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <h4 className="font-serif font-bold text-sm md:text-base text-[#1c150e]">
                          {choice.label}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-[#524131] pl-6 leading-relaxed">
                        {choice.description}
                      </p>
                    </div>
                  </div>

                  {/* Impact preview */}
                  <div className="mt-2.5 pt-2 border-t border-[#dfceb6] pl-6 flex flex-wrap items-center gap-3 text-xs font-mono text-[#786149]">
                    <span>
                      Est. Shifts: 🎖️ Military {choice.impact.military ? (choice.impact.military > 0 ? `+${choice.impact.military}%` : `${choice.impact.military}%`) : '0%'}
                    </span>
                    <span>·</span>
                    <span>
                      🏛️ Political {choice.impact.political ? (choice.impact.political > 0 ? `+${choice.impact.political}%` : `${choice.impact.political}%`) : '0%'}
                    </span>
                    <span>·</span>
                    <span>
                      👥 Public {choice.impact.public ? (choice.impact.public > 0 ? `+${choice.impact.public}%` : `${choice.impact.public}%`) : '0%'}
                    </span>
                    <span className="text-[#8f5a18] italic block sm:inline">
                      ({choice.impact.summary})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action button */}
          <div className="flex justify-end pt-4">
            <button
              disabled={!selectedChoiceId}
              onClick={handleSubmit}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                selectedChoiceId
                  ? 'bg-[#99471b] hover:bg-[#b85623] text-white cursor-pointer hover:shadow-lg'
                  : 'bg-[#d8cbb7] text-[#8e7e6a] cursor-not-allowed'
              }`}
            >
              <span>Authorize Executive Directive ✍️</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
