import React, { useEffect, useState } from 'react';
import { QTEFlashEvent } from '../types/simulation';
import { soundFx } from '../utils/audio';
import { Radio, AlertTriangle, Clock, Pause, Play, Check } from 'lucide-react';

interface FlashTelegramModalProps {
  qte: QTEFlashEvent;
  onSelectOption: (optionId: string) => void;
}

export const FlashTelegramModal: React.FC<FlashTelegramModalProps> = ({
  qte,
  onSelectOption,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(25);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  useEffect(() => {
    // Play initial telegraph alert
    soundFx.playTeletype();
    const interval = setInterval(() => {
      if (!isPaused) {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            // Auto-trigger first option if timer expires
            clearInterval(interval);
            return 0;
          }
          if (prev % 5 === 0) {
            soundFx.playDial();
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // When timer runs out, auto-select first option if none picked
  useEffect(() => {
    if (secondsLeft === 0 && !selectedOptionId) {
      soundFx.playStamp();
      onSelectOption(qte.options[0].id);
    }
  }, [secondsLeft, selectedOptionId, qte, onSelectOption]);

  const handleConfirm = () => {
    if (!selectedOptionId) return;
    soundFx.playStamp();
    onSelectOption(selectedOptionId);
  };

  const timerPercent = (secondsLeft / 25) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#1c140d] border-2 border-[#b45309] rounded-xl shadow-2xl p-6 md:p-8 text-[#ede4d4] space-y-5 relative overflow-hidden">
        
        {/* Urgent Watermark / Top Banner */}
        <div className="flex items-center justify-between border-b-2 border-[#b45309]/60 pb-3">
          <div className="flex items-center gap-2 text-[#f59e0b]">
            <Radio className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">
              {qte.urgencyLevel} · WIRE TELETYPE INTERCEPT
            </span>
          </div>

          {/* Timer and pause accommodation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playDial();
                setIsPaused(!isPaused);
              }}
              className="flex items-center gap-1 text-[11px] font-mono text-[#a3907c] hover:text-[#f3e5d3] px-2 py-1 rounded bg-[#2b1f14] border border-[#4d3824]"
              title="Pause Timer for Accessibility"
            >
              {isPaused ? <Play className="w-3 h-3 text-[#34d399]" /> : <Pause className="w-3 h-3" />}
              <span>{isPaused ? 'Resume' : 'Accommodation Pause'}</span>
            </button>

            <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-[#f59e0b] bg-[#2a1a0e] px-2.5 py-1 rounded border border-[#6b3c10]">
              <Clock className="w-3.5 h-3.5" />
              <span className="tabular-nums">{secondsLeft}s</span>
            </div>
          </div>
        </div>

        {/* Pulsing countdown line */}
        <div className="w-full h-1.5 bg-[#2d1b0e] rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ${
              secondsLeft <= 7 ? 'bg-[#ef4444] animate-pulse' : 'bg-[#f59e0b]'
            }`}
            style={{ width: `${timerPercent}%` }}
          />
        </div>

        {/* Telegram Content Body */}
        <div className="space-y-3 bg-[#17100a] border border-[#4a3421] rounded-lg p-4 font-mono text-xs">
          <div className="flex justify-between items-start text-[#a89582] text-[10px] border-b border-[#302214] pb-2">
            <span>SOURCE: {qte.source}</span>
            <span>FOR PRESIDENT TRUMAN’S EYES ONLY</span>
          </div>
          
          <h3 className="font-serif font-bold text-base text-[#fef3c7] leading-tight pt-1">
            {qte.title}
          </h3>

          <p className="text-[#dfd0be] leading-relaxed text-xs">
            {qte.situation}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          <p className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">
            ⚡ Immediate Presidential Action Required:
          </p>
          {qte.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => {
                  soundFx.playTypewriter();
                  setSelectedOptionId(opt.id);
                }}
                className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#312010] border-[#f59e0b] ring-1 ring-[#f59e0b]'
                    : 'bg-[#1e150d] border-[#3e2b1b] hover:border-[#73502f]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="font-serif font-semibold text-xs md:text-sm text-[#f5efe3]">
                      {opt.actionText}
                    </p>
                    <p className="text-[11px] font-mono text-[#b3a18e]">
                      {opt.consequenceText}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-[#f59e0b] text-[#1a140d] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* Anticipated impacts indicator */}
                <div className="mt-2 pt-1.5 border-t border-[#362516] flex items-center gap-3 text-[10px] font-mono text-[#8a7662]">
                  <span>Est. Military: {opt.impact.military > 0 ? `+${opt.impact.military}%` : `${opt.impact.military}%`}</span>
                  <span>·</span>
                  <span>Political: {opt.impact.political > 0 ? `+${opt.impact.political}%` : `${opt.impact.political}%`}</span>
                  <span>·</span>
                  <span>Public: {opt.impact.public > 0 ? `+${opt.impact.public}%` : `${opt.impact.public}%`}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            disabled={!selectedOptionId}
            onClick={handleConfirm}
            className={`px-6 py-2.5 rounded-lg font-serif font-bold text-xs uppercase tracking-wider transition-all ${
              selectedOptionId
                ? 'bg-[#f59e0b] hover:bg-[#d97706] text-[#1c1208] cursor-pointer shadow-lg'
                : 'bg-[#3b2b1c] text-[#715943] cursor-not-allowed'
            }`}
          >
            Transmit Executive Order
          </button>
        </div>

      </div>
    </div>
  );
};
