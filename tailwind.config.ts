import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F4C81",
          primaryHover: "#0C3C67",
          secondary: "#10B981",
          secondaryHover: "#059669",
          accent: "#38BDF8",
          accentHover: "#0284C7",
          dark: "#081B33",
          darkCard: "#0E2545",
          light: "#F8FAFC",
          slate: "#64748B",
          darkText: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 76, 129, 0.12)",
        glow: "0 0 25px rgba(56, 189, 248, 0.25)",
        emeraldGlow: "0 0 25px rgba(16, 185, 129, 0.25)",
        card: "0 4px 20px rgba(8, 27, 51, 0.06)",
        cardHover: "0 12px 30px rgba(8, 27, 51, 0.12)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        floatSlow: "floatSlow 4s ease-in-out infinite",
        wave: "wave 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
