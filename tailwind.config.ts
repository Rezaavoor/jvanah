import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        // Brand greens - organic, earthy tones
        primaryGreen: "#5CA350",
        lightGreen: "#D1EDCC",
        lighterGreen: "#DEECDC",
        sage: {
          50: "#f6faf5",
          100: "#eaf5e7",
          200: "#d4eacd",
          300: "#b0d8a4",
          400: "#84bf73",
          500: "#5CA350",
          600: "#4a8a3f",
          700: "#3b6d33",
          800: "#32572c",
          900: "#2a4826",
        },
        // Deep navy - refined dark tones
        primary: "#2A3243",
        navy: {
          50: "#f4f6f9",
          100: "#e8ecf2",
          200: "#cdd5e3",
          300: "#a3b1ca",
          400: "#7289ad",
          500: "#506b94",
          600: "#3e557c",
          700: "#334565",
          800: "#2d3c55",
          900: "#2A3243",
        },
        secondary: "#E3EBEC",
        // Warm accents
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf2e4",
          300: "#f5e6cc",
          400: "#edd5ab",
          500: "#e4c18a",
        },
        warm: {
          50: "#faf8f6",
          100: "#f5f0eb",
          200: "#ebe2d8",
          300: "#dccebe",
          400: "#c9b39e",
        },
      },
      backgroundImage: {
        "profile-gradient": "linear-gradient(135deg, #f6faf5, #eaf5e7)",
        "hero-gradient": "linear-gradient(135deg, #f6faf5 0%, #fdf9f3 50%, #f4f6f9 100%)",
        "section-gradient": "linear-gradient(180deg, transparent, #f6faf5 20%, #f6faf5 80%, transparent)",
        "card-gradient": "linear-gradient(135deg, #ffffff 0%, #faf8f6 100%)",
        "green-soft": "linear-gradient(135deg, #5CA350 0%, #84bf73 100%)",
        "navy-soft": "linear-gradient(135deg, #2A3243 0%, #3e557c 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -4px rgba(0, 0, 0, 0.02)",
        "soft-md": "0 4px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
        "soft-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 4px 15px -5px rgba(0, 0, 0, 0.03)",
        "soft-xl": "0 20px 50px -12px rgba(0, 0, 0, 0.1)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)",
        "green-glow": "0 4px 20px -5px rgba(92, 163, 80, 0.25)",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
