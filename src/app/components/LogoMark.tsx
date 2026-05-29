export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flameGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="anvilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f2340" />
        </linearGradient>
      </defs>

      {/* Anvil base */}
      <rect x="8" y="28" width="24" height="5" rx="1.5" fill="url(#anvilGrad)" />
      {/* Anvil body */}
      <path
        d="M6 22 Q6 19 10 19 L30 19 Q34 19 34 22 L34 27 L6 27 Z"
        fill="url(#anvilGrad)"
      />
      {/* Anvil top plate */}
      <rect x="10" y="16" width="20" height="4" rx="1" fill="#1e3a5f" />

      {/* Circuit S on anvil */}
      <path
        d="M17 24 Q15 24 15 22.5 Q15 21 17 21 L21 21 Q23 21 23 22.5"
        stroke="url(#flameGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="15" cy="24" r="1" fill="url(#flameGrad)" />
      <circle cx="23" cy="21" r="1" fill="url(#flameGrad)" />

      {/* Flame */}
      <path
        d="M20 15 C20 15 24 10 22 5 C22 5 19 9 17 7 C17 7 16 12 20 15Z"
        fill="url(#flameGrad)"
        opacity="0.9"
      />
      <path
        d="M20 15 C20 15 23 12 22 8 C22 8 20 11 18 9 C18 9 17 13 20 15Z"
        fill="white"
        opacity="0.25"
      />

      {/* Pixel sparks */}
      <rect x="24" y="4" width="2.5" height="2.5" rx="0.5" fill="#3b82f6" opacity="0.8" />
      <rect x="27" y="7" width="1.5" height="1.5" rx="0.3" fill="#06b6d4" opacity="0.6" />
      <rect x="25" y="8" width="1" height="1" rx="0.2" fill="#3b82f6" opacity="0.5" />
    </svg>
  );
}
