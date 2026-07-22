export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="4" fill="currentColor" />
      <path d="M10 12H34V17H27.5L24.5 21H34V26H24.5L28 31H34V36H10V31H20.5L17 26H10V21H17L20.5 17H10V12Z" fill="var(--mark-cutout, #F3F0E8)" />
      <rect x="34" y="8" width="6" height="6" fill="#FF5A36" />
    </svg>
  );
}
