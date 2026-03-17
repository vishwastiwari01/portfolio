import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        bg: "#04040c",
        surface: "#080814",
        card: "#0c0c1a",
        primary: '#6366f1',
        cyan: { DEFAULT: '#06b6d4' },
        gold: '#c8a96e',
        text: "#e2e8f0",
        muted: "#64748b",
        "glow-p": "rgba(99,102,241,0.15)",
        "glow-c": "rgba(6,182,212,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
