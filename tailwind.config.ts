import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050a14",
          900: "#080d1a",
          800: "#0f172a",
          700: "#1e2d45",
        },
        brand: {
          blue: "#3b82f6",
          cyan: "#06b6d4",
          "blue-dark": "#1d4ed8",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #080d1a 0%, #0f172a 50%, #080d1a 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
