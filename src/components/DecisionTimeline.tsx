import React from 'react';
import { RoundChoice } from '../types/simulation';
import { HISTORICAL_ROUNDS } from '../data/historicalRounds';
import { Clock, CheckCircle2, AlertCircle, FileText, Stamp } from 'lucide-react';

interface DecisionTimelineProps {
  currentRoundNumber: number;
  choicesMade: Record<number, RoundChoice>;
}

export const DecisionTimeline: React.FC<DecisionTimelineProps> = ({
  currentRoundNumber,
  choicesMade,
}) => {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-4">
      {/* Title Header */}
      <div className="bg-[#1e1711] border border-[#483726] rounded-xl p-3.5 shadow-md text-[#e8decb]">
        <div className="flex items-center gap-2 border-b border-[#3b2d1f] pb-2 mb-3">
          <Clock className="w-4 h-4 text-[#c5a059]" />
          <h3 className="font-serif font-bold text-sm text-[#f5efe3] tracking-wide">
            Executive Decision Log
          </h3>
        </div>
        <p className="text-[11px] font-mono text-[#9e8b75] leading-relaxed">
          Permanent chronological log of presidential directives issued in the summer of 1945.
        </p>
      </div>

      {/* Chronological Stamped Log Stack */}
      <div className="space-y-3 font-sans">
        {HISTORICAL_ROUNDS.map((round) => {
          const choice = choicesMade[round.roundNumber];
          const isCompleted = round.roundNumber < currentRoundNumber && !!choice;
          const isCurrent = round.roundNumber === currentRoundNumber;
          const isPending = round.roundNumber > currentRoundNumber;

          return (
            <div
              key={round.roundNumber}
              className={`p-3 rounded-lg border transition-all relative overflow-hidden ${
                isCurrent
                  ? 'bg-[#291f15] border-[#c5a059] ring-1 ring-[#c5a059]/40 shadow-md'
                  : isCompleted
                  ? 'bg-[#1b150f] border-[#443322]'
                  : 'bg-[#140f0b] border-[#291e14] opacity-50'
              }`}
            >
              {/* Top metadata line */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#a38f78] mb-1">
                <span>ROUND 0{round.roundNumber}</span>
                <span>{round.dateString.split(',')[0]}</span>
              </div>

              {/* Title */}
              <h4 className="font-serif font-bold text-xs text-[#f5efe3] mb-1">
                {round.title}
              </h4>

              {/* Status Badge & Content */}
              {isCompleted ? (
                <div className="space-y-1.5 pt-1">
                  <div className="inline-block border border-[#99471b] text-[#d97706] bg-[#3a2010] px-1.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider font-bold">
                    EXECUTED ORDER
                  </div>
                  <p className="font-serif italic text-xs text-[#d8cab7] leading-snug">
                    "{choice.label}"
                  </p>
                  <p className="text-[10px] font-mono text-[#8a7660] border-t border-[#302316] pt-1">
                    {choice.impact.summary}
                  </p>
                </div>
              ) : isCurrent ? (
                <div className="space-y-1 pt-1">
                  <span className="inline-flex items-center gap-1 text-[#6ee7b7] bg-[#132d1d] border border-[#235334] px-1.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider font-bold animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                    ON TRUMAN’S DESK
                  </span>
                  <p className="text-[11px] font-mono text-[#c5b59f]">
                    Awaiting executive signature...
                  </p>
                </div>
              ) : (
                <div className="pt-1 text-[10px] font-mono text-[#614e3b] italic">
                  Classified dossier sealed
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
