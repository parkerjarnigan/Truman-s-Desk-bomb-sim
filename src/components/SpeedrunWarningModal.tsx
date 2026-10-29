import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { AlertOctagon, FileText, CheckCircle2 } from 'lucide-react';

interface SpeedrunWarningModalProps {
  roundTitle: string;
  essentialQuestion: string;
  onDismiss: () => void;
}

export const SpeedrunWarningModal: React.FC<SpeedrunWarningModalProps> = ({
  roundTitle,
  essentialQuestion,
  onDismiss,
}) => {
  const [understood, setUnderstood] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="w-full max-w-lg bg-[#241717] border-2 border-[#8f1d1d] rounded-xl shadow-2xl p-6 text-[#f5dede] space-y-4">
        
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#5e1919] pb-3">
          <div className="w-10 h-10 rounded-lg bg-[#3d1212] border border-[#a82424] flex items-center justify-center text-[#ff6b6b] shrink-0">
            <AlertOctagon className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff9999] bg-[#4a1212] px-2 py-0.5 rounded border border-[#782323]">
              Presidential Adjutant General Vaughan
            </span>
            <h3 className="text-lg font-serif font-bold text-[#ffffff] mt-0.5">
              🛑 Hold Your Orders, Mr. President!
            </h3>
          </div>
        </div>

        {/* Adjutant's Warning */}
        <div className="text-xs text-[#ebd2d2] space-y-2 leading-relaxed">
          <p>
            ⏱️ You submitted an executive order in <strong>5 seconds or less</strong>! The War Department and cabinet advisers spent months compiling this classified dossier.
          </p>
          <p className="p-2.5 bg-[#170e0e] border border-[#541616] rounded font-mono text-[11px] text-[#ffb3b3]">
            “A hurried commander makes catastrophic mistakes with millions of human lives on the line. At Oak Ridge High School, we analyze the historical evidence before issuing commands.”
          </p>
        </div>

        {/* Quick Comprehension Check */}
        <div className="p-3 bg-[#1e1111] border border-[#4d1a1a] rounded-lg text-xs space-y-2">
          <div className="flex items-center gap-2 text-[#ffd6d6] font-bold">
            <FileText className="w-4 h-4 text-[#ff7878]" />
            <span>❓ Essential Question for {roundTitle}:</span>
          </div>
          <p className="italic text-[#f2e1e1] pl-6 font-serif">
            "{essentialQuestion}"
          </p>
        </div>

        <label className="flex items-start gap-2.5 p-2 rounded hover:bg-[#301616] cursor-pointer transition-colors text-xs text-[#ebd4d4]">
          <input
            type="checkbox"
            checked={understood}
            onChange={(e) => {
              soundFx.playTypewriter();
              setUnderstood(e.target.checked);
            }}
            className="mt-0.5 accent-[#8f1d1d] rounded"
          />
          <span>
            ✅ I have carefully reviewed both the pro-bomb and anti-bomb primary source arguments in this dossier and am prepared to justify my decision.
          </span>
        </label>

        {/* Action */}
        <div className="flex justify-end pt-2">
          <button
            disabled={!understood}
            onClick={() => {
              soundFx.playStamp();
              onDismiss();
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-serif font-bold text-xs uppercase tracking-wider transition-all ${
              understood
                ? 'bg-[#8f1d1d] hover:bg-[#a82424] text-white cursor-pointer shadow-lg'
                : 'bg-[#3b1c1c] text-[#784646] cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Resume Presidential Command ✍️</span>
          </button>
        </div>

      </div>
    </div>
  );
};
