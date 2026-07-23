import type { ReactNode } from "react";

export type ProcessIconName =
  | "intake"
  | "shape"
  | "build"
  | "review"
  | "measure"
  | "frame"
  | "design"
  | "launch"
  | "target"
  | "research"
  | "reach"
  | "learn"
  | "automation"
  | "search"
  | "decision";

type ProcessIconProps = {
  name: ProcessIconName;
};

export default function ProcessIcon({ name }: ProcessIconProps) {
  let glyph: ReactNode;

  switch (name) {
    case "intake":
      glyph = (
        <>
          <path d="M8 31v8h32v-8" />
          <path d="M16 31h5l3 4 3-4h5" />
          <path d="M24 7v20" />
          <path d="m17 20 7 7 7-7" />
        </>
      );
      break;
    case "shape":
      glyph = (
        <>
          <path d="M24 7 41 24 24 41 7 24Z" />
          <circle cx="24" cy="24" r="6" />
          <path d="M24 7v11M41 24H30M24 41V30M7 24h11" />
        </>
      );
      break;
    case "build":
      glyph = (
        <>
          <path d="m27 9 12 12-7 7-12-12Z" />
          <path d="m25 23-13.5 13.5a3.2 3.2 0 0 0 4.5 4.5L29.5 27.5" />
          <path d="m32 14 3-3 5 5-3 3" />
        </>
      );
      break;
    case "review":
      glyph = (
        <>
          <path d="M5 24s7-11 19-11 19 11 19 11-7 11-19 11S5 24 5 24Z" />
          <path d="m18.5 24 3.5 3.5 7.5-8" />
        </>
      );
      break;
    case "measure":
      glyph = (
        <>
          <path d="M8 39h32" />
          <path d="M12 35V25h7v10M21 35V18h7v17M30 35V11h7v24" />
        </>
      );
      break;
    case "frame":
      glyph = (
        <>
          <path d="M18 8H8v10M30 8h10v10M40 30v10H30M18 40H8V30" />
          <rect x="15" y="15" width="18" height="18" rx="1" />
        </>
      );
      break;
    case "design":
      glyph = (
        <>
          <path d="m10 38 7-17L34 8l6 6-13 17Z" />
          <path d="m17 21 10 10M10 38l9-3" />
          <path d="m30 12 6 6" />
        </>
      );
      break;
    case "launch":
      glyph = (
        <>
          <path d="M27 8c7 2 11 6 13 13L25 36 12 23Z" />
          <circle cx="30" cy="18" r="3" />
          <path d="m17 28-7 1-3 7 10-2M23 34l-2 7 7-3 1-7" />
          <path d="m12 38-4 4M17 40l-3 3" />
        </>
      );
      break;
    case "target":
      glyph = (
        <>
          <circle cx="23" cy="25" r="16" />
          <circle cx="23" cy="25" r="9" />
          <circle cx="23" cy="25" r="2.5" />
          <path d="M23 25 39 9M32 9h7v7" />
        </>
      );
      break;
    case "research":
      glyph = (
        <>
          <circle cx="21" cy="21" r="11" />
          <path d="m29 29 10 10" />
          <path d="M17 17h8M17 21h5M17 25h7" />
        </>
      );
      break;
    case "reach":
      glyph = (
        <>
          <path d="m6 20 36-12-13 34-6-14Z" />
          <path d="M23 28 42 8M23 28l-1 9 7 5" />
        </>
      );
      break;
    case "learn":
      glyph = (
        <>
          <path d="M15 21a9 9 0 1 1 18 0c0 6-5 7-5 12h-8c0-5-5-6-5-12Z" />
          <path d="M19 37h10M21 41h6" />
          <path d="M24 7V4M11 12 8 9M37 12l3-3M10 24H6M42 24h-4" />
        </>
      );
      break;
    case "automation":
      glyph = (
        <>
          <rect x="18" y="18" width="12" height="12" rx="2" />
          <circle cx="10" cy="10" r="4" />
          <circle cx="38" cy="10" r="4" />
          <circle cx="24" cy="40" r="4" />
          <path d="m13 13 7 7M35 13l-7 7M24 30v6" />
          <path d="m16 18 4 2-2 4M32 18l-4 2 2 4M20 34l4 2 4-2" />
        </>
      );
      break;
    case "search":
      glyph = (
        <>
          <path d="M10 7h19l8 8v10M29 7v8h8M10 7v34h15" />
          <path d="M16 18h12M16 24h8" />
          <circle cx="31" cy="32" r="8" />
          <path d="m37 38 5 5" />
        </>
      );
      break;
    case "decision":
      glyph = (
        <>
          <path d="m24 6 9 9-9 9-9-9Z" />
          <path d="M24 24v7M24 31H12v6M24 31h12v6" />
          <circle cx="12" cy="40" r="3" />
          <circle cx="36" cy="40" r="3" />
          <path d="m8 15 4 4M40 15l-4 4" />
        </>
      );
      break;
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
    >
      {glyph}
    </svg>
  );
}
