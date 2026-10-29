import React from 'react';
import { Volume2, VolumeX, RotateCcw, ShieldAlert, Award, Camera } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface TopBarProps {
  currentDate: string;
  roundTitle: string;
  roundNumber: number;
  totalRounds: number;
  audioMuted: boolean;
  vintageFilterActive: boolean;
  onToggleAudio: () => void;
  onToggleVintageFilter: () => void;
  onReset: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentDate,
  roundTitle,
  roundNumber,
  totalRounds,
  audioMuted,
  vintageFilterActive,
  onToggleAudio,
  onToggleVintageFilter,
  onReset,
}) => {
  return (
    <header className="w-full bg-[#16120e] border-b border-[#3e3226] text-[#e6ded0] px-4 md:px-8 py-3 flex items-center justify-between gap-4 sticky top-0 z-40 shadow-lg">
      {/* Zone 1: Brand & School Identification */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded bg-[#2b2016] border border-[#5a432e] flex items-center justify-center text-[#c5a059] shadow-inner font-serif font-bold text-lg">
          T
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold tracking-tight text-base md:text-lg text-[#f2ece1]">
              Truman’s Desk: YOU Decide
            </span>
            <span className="text-xs uppercase tracking-wider font-mono text-[#a69279] bg-[#241a12] px-2 py-0.5 rounded border border-[#3d2e20]">
              Oak Ridge High School CP World History
            </span>
          </div>
          <p className="text-[11px] text-[#8e7a64] font-mono">
            Executive Command Simulation · Summer 1945
          </p>
        </div>
      </div>

      {/* Zone 2: Date & Operational Round Status */}
      <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-[#c2b39f] bg-[#1f1812] px-3 py-1.5 rounded border border-[#3e3124]">
        <div className="flex items-center gap-1.5">
          <span className="text-[#8e7a64]">TIMELINE:</span>
          <span className="text-[#e2d5c3] font-bold">{currentDate}</span>
        </div>
        <span className="text-[#514030]">|</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[#8e7a64]">DOSSIER:</span>
          <span className="text-[#c5a059]">
            {roundNumber > 0 && roundNumber <= totalRounds ? `Round ${roundNumber} of ${totalRounds}` : roundTitle}
          </span>
        </div>
      </div>

      {/* Zone 3: Interactive Controls */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => {
            onToggleVintageFilter();
            soundFx.playDial();
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border transition-colors cursor-pointer ${
            vintageFilterActive
              ? 'bg-[#2e2318] text-[#c5a059] border-[#6b5032] hover:bg-[#382b1d]'
              : 'bg-[#261e16] text-[#8c7965] border-[#443526] hover:text-[#d5c3ad]'
          }`}
          title={vintageFilterActive ? '1945 Vintage Photo Filter: Active (High-Contrast B&W)' : 'Vintage Photo Filter: Off (Standard)'}
        >
          <Camera className={`w-3.5 h-3.5 ${vintageFilterActive ? 'text-[#e5b967]' : 'text-[#8c7965]'}`} />
          <span className="hidden sm:inline">{vintageFilterActive ? '1945 B&W Photo Filter' : 'Photo Filter Off'}</span>
        </button>

        <button
          onClick={() => {
            onToggleAudio();
            soundFx.playDial();
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border transition-colors ${
            audioMuted
              ? 'bg-[#261e16] text-[#8c7965] border-[#443526] hover:text-[#d5c3ad]'
              : 'bg-[#2e2318] text-[#c5a059] border-[#6b5032] hover:bg-[#382b1d]'
          }`}
          title={audioMuted ? 'Turn Sound Effects On' : 'Mute Sound Effects'}
        >
          {audioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#e5b967]" />}
          <span className="hidden sm:inline">{audioMuted ? 'Muted' : 'Sound On'}</span>
        </button>

        <button
          onClick={() => {
            soundFx.playDial();
            onReset();
          }}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-[#a8957e] bg-[#221a13] border border-[#3e3124] hover:text-[#e8decb] hover:border-[#634f3a] transition-colors"
          title="Restart Simulation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Restart</span>
        </button>
      </div>
    </header>
  );
};
