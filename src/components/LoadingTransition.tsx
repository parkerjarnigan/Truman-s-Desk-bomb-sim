import React, { useEffect, useState } from 'react';
import { DidYouKnowFact } from '../types/simulation';
import { soundFx } from '../utils/audio';
import { Cpu, ArrowRight, Compass, Shield, Activity, Radio } from 'lucide-react';

interface LoadingTransitionProps {
  fact?: DidYouKnowFact;
  nextRoundNumber: number;
  onProceed: () => void;
}

export const LoadingTransition: React.FC<LoadingTransitionProps> = ({
  fact,
  nextRoundNumber,
  onProceed,
}) => {
  const [telemetry, setTelemetry] = useState({
    code: 'CYPHER-774-K',
    freq: 142.8,
    lat: 35.98,
    lon: 139.75,
    progress: 12,
  });

  useEffect(() => {
    // Start 1940s vintage soft radio jazz with light tube static
    soundFx.start1940sRadioJazz();

    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const nextProgress = Math.min(100, prev.progress + 14);
        return {
          code: `CYPHER-${Math.floor(100 + Math.random() * 899)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
          freq: Number((130 + Math.random() * 30).toFixed(1)),
          lat: Number((34 + Math.random() * 3).toFixed(2)),
          lon: Number((135 + Math.random() * 8).toFixed(2)),
          progress: nextProgress,
        };
      });
    }, 280);

    return () => {
      clearInterval(interval);
      soundFx.stop1940sRadioJazz();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b100e] text-[#d6ded9] p-4 font-mono select-none overflow-y-auto">
      <div className="w-full max-w-2xl bg-[#111714] border-2 border-[#2b3a32] rounded-xl shadow-2xl p-6 md:p-8 space-y-6 my-auto relative">
        
        {/* Retro Header with PS2/PS3 Era phosphor aesthetic */}
        <div className="flex items-center justify-between border-b border-[#212f27] pb-3 text-xs text-[#6ee7b7]">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 animate-spin" />
            <span className="tracking-widest uppercase font-bold">
              WAR DEPARTMENT CALCULATING ENGINE · POTSDAM RELAY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:flex items-center gap-1 text-[10px] text-[#86efac] font-mono bg-[#16271e] px-2 py-0.5 rounded border border-[#2b4436]">
              <Radio className="w-3 h-3 text-[#a7f3d0] animate-pulse" />
              <span>AFRS Radio: 1945 Soft Jazz</span>
            </span>
            <span className="text-[11px] text-[#4b6a5a]">
              STATUS: DECLASSIFYING DOSSIER 0{nextRoundNumber}
            </span>
          </div>
        </div>

        {/* Tactical Dial & Telemetry Cluster */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] bg-[#0c1310] border border-[#1b2821] p-3 rounded-lg text-[#95b0a2]">
          <div className="space-y-0.5">
            <span className="text-[#4b6a5a] block text-[9px]">CIPHER ENCRYPTION</span>
            <span className="text-[#a7f3d0] font-bold tracking-wider">{telemetry.code}</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[#4b6a5a] block text-[9px]">RADIO FREQ (MHz)</span>
            <span className="text-[#fcd34d] font-bold tabular-nums">{telemetry.freq} kHz</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[#4b6a5a] block text-[9px]">TARGET COORD</span>
            <span className="text-[#93c5fd] font-bold tabular-nums">{telemetry.lat}°N / {telemetry.lon}°E</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-[#4b6a5a] block text-[9px]">BUFFER PROGRESS</span>
            <span className="text-[#34d399] font-bold tabular-nums">{telemetry.progress}%</span>
          </div>
        </div>

        {/* Dynamic Oscillating Gauges Display */}
        <div className="flex items-center justify-center gap-6 py-2">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-16 h-16 rounded-full border-2 border-[#2c4035] bg-[#0d1612] flex items-center justify-center relative shadow-inner">
              <div
                className="w-1 h-7 bg-[#34d399] origin-bottom rounded-full transition-transform duration-300"
                style={{ transform: `rotate(${(telemetry.progress * 2.8) - 140}deg)` }}
              />
              <div className="w-2.5 h-2.5 rounded-full bg-[#6ee7b7] z-10" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-[#5f8270]">Manhattan Dial</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-16 h-16 rounded-full border-2 border-[#2c4035] bg-[#0d1612] flex items-center justify-center relative shadow-inner">
              <div
                className="w-1 h-7 bg-[#f59e0b] origin-bottom rounded-full transition-transform duration-300"
                style={{ transform: `rotate(${Math.sin(telemetry.progress) * 70}deg)` }}
              />
              <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] z-10" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-[#5f8270]">Pacific Flux</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-16 h-16 rounded-full border-2 border-[#2c4035] bg-[#0d1612] flex items-center justify-center relative shadow-inner">
              <div
                className="w-1 h-7 bg-[#60a5fa] origin-bottom rounded-full transition-transform duration-300"
                style={{ transform: `rotate(${(telemetry.lat * 4) % 180 - 90}deg)` }}
              />
              <div className="w-2.5 h-2.5 rounded-full bg-[#93c5fd] z-10" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-[#5f8270]">Cabinet Sync</span>
          </div>
        </div>

        {/* "DID YOU KNOW" Archival Fact Card */}
        {fact && (
          <div className="p-4 bg-[#14201a] border border-[#263d30] rounded-lg space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#fde047]">
              <span className="px-2 py-0.5 rounded bg-[#2b3a1a] border border-[#526a2e] text-[10px] font-bold uppercase tracking-wider">
                DID YOU KNOW?
              </span>
              <h4 className="font-serif font-bold text-sm text-[#fef9c3]">
                {fact.headline}
              </h4>
            </div>

            <p className="text-[#d1ded7] leading-relaxed font-sans text-xs pt-1">
              {fact.fact}
            </p>

            <p className="text-[11px] text-[#86a896] italic border-t border-[#203126] pt-2">
              💡 <strong>Historical Context:</strong> {fact.historicalSignificance}
            </p>
          </div>
        )}

        {/* Progress Bar & Proceed Button */}
        <div className="space-y-3 pt-2">
          <div className="w-full h-2 bg-[#121c16] rounded-full overflow-hidden border border-[#22362b]">
            <div
              className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] transition-all duration-300"
              style={{ width: `${telemetry.progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#527362]">
            <span>TELETYPE STREAM VERIFIED</span>
            <button
              onClick={() => {
                soundFx.stop1940sRadioJazz();
                soundFx.playStamp();
                onProceed();
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#34d399] hover:bg-[#6ee7b7] text-[#0a1f14] font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-900/30 cursor-pointer"
            >
              <span>Review Dossier Round 0{nextRoundNumber}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
