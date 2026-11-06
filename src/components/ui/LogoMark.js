/**
 * LogoMark — CSS-drawn celestial symbol (sun + orbital ring + mandala details)
 * Fully self-contained, no image dependency. Replace with an SVG asset later.
 */
export default function LogoMark({ size = 40, dark = false }) {
  const sunColor = '#FF9933';
  const ringColor = dark ? 'rgba(200, 169, 107, 0.7)' : '#C8A96B';
  const outerRingColor = dark ? 'rgba(200, 169, 107, 0.3)' : 'rgba(200, 169, 107, 0.45)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      {/* Outer dashed ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={outerRingColor}
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      {/* Inner orbital ring */}
      <circle
        cx="20"
        cy="20"
        r="12"
        stroke={ringColor}
        strokeWidth="1.25"
      />
      {/* Small orbit dot — top */}
      <circle cx="20" cy="8" r="1.75" fill={ringColor} />
      {/* Small orbit dot — bottom-right */}
      <circle cx="30.3" cy="25" r="1.25" fill={ringColor} opacity="0.7" />
      {/* Sun core */}
      <circle cx="20" cy="20" r="5.5" fill={sunColor} />
      {/* Sun rays (4 short lines) */}
      <line x1="20" y1="12.5" x2="20" y2="14.5" stroke={sunColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="25.5" x2="20" y2="27.5" stroke={sunColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="12.5" y1="20" x2="14.5" y2="20" stroke={sunColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="25.5" y1="20" x2="27.5" y2="20" stroke={sunColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
