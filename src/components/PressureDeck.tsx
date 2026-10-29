import React, { useState } from 'react';
import { PressureGauges } from '../types/simulation';
import { Shield, Flag, Users, AlertTriangle, Info } from 'lucide-react';

interface PressureDeckProps {
  gauges: PressureGauges;
  previousGauges?: PressureGauges;
  isCompact?: boolean;
}

export const PressureDeck: React.FC<PressureDeckProps> = ({
  gauges,
  previousGauges,
  isCompact = false,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const getDelta = (current: number, prev?: number) => {
    if (prev === undefined) return null;
    const diff = current - prev;
    if (diff === 0) return null;
    return diff > 0 ? `+${diff}%` : `${diff}%`;
  };

  const getMeterColor = (val: number) => {
    if (val <= 25) return 'bg-[#8f1d1d] text-[#ff6b6b]';
    if (val <= 35) return 'bg-[#b45309] text-[#fbbf24]';
    if (val <= 60) return 'bg-[#785b2e] text-[#d4af37]';
    return 'bg-[#2b6138] text-[#86efac]';
  };

  const getBarColor = (val: number) => {
    if (val <= 25) return 'from-[#8f1d1d] to-[#ef4444] animate-pulse';
    if (val <= 35) return 'from-[#b45309] to-[#f59e0b]';
    if (val <= 60) return 'from-[#785b2e] to-[#c5a059]';
    return 'from-[#204a2c] to-[#34d399]';
  };

  const meters = [
    {
      key: 'military' as const,
      label: '🎖️ Military Confidence',
      sublabel: 'Joint Chiefs & Pacific Theater Forces',
      value: Math.max(0, Math.min(100, gauges.military)),
      delta: getDelta(gauges.military, previousGauges?.military),
      icon: Shield,
      tooltip: 'General Marshall, Admiral Leahy, and Pacific commanders. If confidence hits 25% or below, field commands revolt against White House delays.'
    },
    {
      key: 'political' as const,
      label: '🏛️ Political Pressure',
      sublabel: 'Congress, Secretary Byrnes & Allied Coalition',
      value: Math.max(0, Math.min(100, gauges.political)),
      delta: getDelta(gauges.political, previousGauges?.political),
      icon: Flag,
      tooltip: 'Bipartisan Congressional leaders and Allied partners. If pressure collapses to 25% or below, cabinet mutiny and budget hearings force Truman’s hand.'
    },
    {
      key: 'public' as const,
      label: '👥 Public Opinion Polling',
      sublabel: 'American Civilian Morale & War Fatigue',
      value: Math.max(0, Math.min(100, gauges.public)),
      delta: getDelta(gauges.public, previousGauges?.public),
      icon: Users,
      tooltip: 'Gold-star families, war rationing patience, and homeland morale. If public will hits 25% or below, nationwide outrage demands an instant end to the war.'
    }
  ];

  const anyCritical = meters.some(m => m.value <= 35 && m.value > 25);
  const anyCollapsed = meters.some(m => m.value <= 25);

  return (
    <div className="w-full bg-[#1e1711] border border-[#4a3928] rounded-lg p-3 md:p-4 text-[#ede4d4] shadow-md">
      {/* Header with info toggle */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#3b2d1f]">
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider font-mono text-[#a89279]">
            EXECUTIVE PRESSURE TELEMETRY
          </span>
          {anyCritical && !anyCollapsed && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-[#fbbf24] bg-[#3a2815] px-2 py-0.5 rounded border border-[#7a4e22] animate-pulse">
              <AlertTriangle className="w-3 h-3 text-[#f59e0b]" />
              CRITICAL STRAIN (≤35%)
            </span>
          )}
          {anyCollapsed && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-white bg-[#8b1818] px-2 py-0.5 rounded font-bold animate-bounce">
              <AlertTriangle className="w-3 h-3" />
              ≤25% GAUGE COLLAPSE — FORCED DIRECTIVE
            </span>
          )}
        </div>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="text-[#9e886f] hover:text-[#e4d6c1] text-xs font-mono flex items-center gap-1 p-1 rounded hover:bg-[#2d2117] transition-colors"
          title="Telemetry Rules"
        >
          <Info className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">How Gauges Work</span>
        </button>
      </div>

      {showInfo && (
        <div className="mb-3 p-3 bg-[#17120e] border border-[#523e2b] rounded text-xs text-[#c9baa7] space-y-1.5 font-mono animate-fadeIn">
          <p className="font-bold text-[#e8c682]">CRITICAL OVAL OFFICE RULES:</p>
          <p>• Starting levels are calibrated to 1945 realities: Military (70–85%), Political (40–90%), Public (50–75%).</p>
          <p>• Warning alerts trigger when any gauge drops to ≤35%.</p>
          <p className="text-[#ff9999]">• DANGER: If any gauge drops to ≤25%, your administration collapses and you are instantly rushed to Round 6 to make the final decision with redacted intelligence!</p>
        </div>
      )}

      {/* The 3 Gauges */}
      <div className={`grid gap-3 ${isCompact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
        {meters.map(meter => {
          const Icon = meter.icon;
          return (
            <div
              key={meter.key}
              className={`p-2.5 rounded bg-[#16110c] border transition-all ${
                meter.value <= 25
                  ? 'border-[#8f1d1d] ring-1 ring-[#8f1d1d]/40'
                  : meter.value <= 35
                  ? 'border-[#b45309] ring-1 ring-[#b45309]/30'
                  : 'border-[#382b1d] hover:border-[#57432d]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-[#261d15] flex items-center justify-center text-[#c5a059] border border-[#423120] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-[#e8decb] leading-tight">
                      {meter.label}
                    </h4>
                    <p className="text-[11px] text-[#9c8975] truncate max-w-[130px] sm:max-w-none">
                      {meter.sublabel}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="font-mono font-bold text-base text-[#f5efe3] tabular-nums">
                      {meter.value}%
                    </span>
                    {meter.delta && (
                      <span
                        className={`text-[11px] font-mono font-semibold px-1 py-0.2 rounded ${
                          meter.delta.startsWith('+')
                            ? 'text-[#6ee7b7] bg-[#122e1b]'
                            : 'text-[#fca5a5] bg-[#3a1515]'
                        }`}
                      >
                        {meter.delta}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded inline-block font-semibold ${
                      meter.value <= 25
                        ? 'bg-[#4f1313] text-[#fca5a5] font-bold'
                        : meter.value <= 35
                        ? 'bg-[#3d240d] text-[#fde68a]'
                        : meter.value <= 60
                        ? 'bg-[#1b2b1d] text-[#a7f3d0]'
                        : 'bg-[#10381d] text-[#6ee7b7]'
                    }`}
                  >
                    {meter.value <= 25 ? 'COLLAPSING' : meter.value <= 35 ? 'STRAINED' : meter.value <= 60 ? 'STEADY' : 'STRONG'}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 rounded bg-[#241a12] border border-[#3d2f21] overflow-hidden">
                <div
                  className={`h-full rounded bg-gradient-to-r ${getBarColor(
                    meter.value
                  )} transition-all duration-500`}
                  style={{ width: `${meter.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
