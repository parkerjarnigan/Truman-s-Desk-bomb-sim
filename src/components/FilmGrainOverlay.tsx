import React from 'react';

/**
 * FilmGrainOverlay
 * Applies a procedural CSS/SVG-based film grain and soft archival vignette
 * across the viewport to enhance the 1945 historical aesthetic without compromising
 * text contrast, readability, or user interaction.
 */
export const FilmGrainOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40 select-none print:hidden overflow-hidden"
      aria-hidden="true"
    >
      {/* Procedural Film Grain SVG Filter */}
      <svg
        className="w-full h-full absolute inset-0 opacity-[0.042] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="truman-film-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#truman-film-grain)" />
      </svg>

      {/* Subtle 1940s Archival Lens Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 68%, rgba(8, 5, 2, 0.75) 100%)',
        }}
      />
    </div>
  );
};
