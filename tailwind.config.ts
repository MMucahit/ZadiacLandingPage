const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "title-radial-gradient":
          "radial-gradient(100% 100% at top left, white, white, rgba(74, 32, 138, 0.5))",
        "planet-radial-gradient":
          "radial-gradient(50% 50% at 16.8% 18.3%, white, rgb(184, 148, 255) 37.7%, rgb(24, 0, 66))",
        "planet-second-radial-gradient":
          "radial-gradient(75% 75% at center center, rgb(140, 69, 255, 0.5) 15%, rgb(14, 0, 36, 0.5) 78%, transparent)",
      },
      boxShadow: {
        planet:
          "-20px -20px 50px rgba(255, 255, 255, 0.5), -20px 20px 80px rgba(255, 255, 255, 0.1), 0 0 50px rgba(140, 69, 255)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
