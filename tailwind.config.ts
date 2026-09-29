import type { Config } from "tailwindcss";

// Design tokens for Korean Hub.
//
// Palette is drawn from obangsaek (the five traditional Korean cardinal
// colours) and dancheong architectural painting, muted for an editorial,
// premium feel rather than a literal/costume reading of "Korean colours."
//
//   ink       — near-black, used for text and the dark mode base
//   porcelain — warm off-white paper background
//   celadon   — the primary brand colour, referencing celadon ceramics
//   dancheong — a muted brick-red accent, used sparingly for emphasis
//   ochre     — a soft gold used for highlights and dividers
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1A17",
          soft: "#33312C",
        },
        porcelain: {
          DEFAULT: "#F7F3EC",
          dim: "#EFE9DD",
        },
        celadon: {
          50: "#EEF3EE",
          100: "#D6E3D8",
          300: "#9CBBA2",
          500: "#4C7458",
          600: "#3A5A45",
          700: "#2C4636",
          900: "#182B21",
        },
        dancheong: {
          400: "#C1594A",
          500: "#A33B2E",
          600: "#832E24",
        },
        ochre: {
          300: "#E4C77E",
          400: "#C9A24B",
          500: "#AC873A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(27,26,23,0.06), 0 8px 24px -12px rgba(27,26,23,0.18)",
      },
      keyframes: {
        "brush-in": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      transitionTimingFunction: {
        ink: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
