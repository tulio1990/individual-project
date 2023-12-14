/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      silverSand: {
        50: "#f7f8f7",
        100: "#efefef",
        200: "#dbdcdb",
        300: "#b6b9b7",
        400: "#969a97",
        500: "#797e7b",
        600: "#626764",
        700: "#505451",
        800: "#454746",
        900: "#3c3e3d",
        950: "#282928",
      },
      twine: {
        200: "#e1c8a7",
        300: "#c99861",
        400: "#c1864e",
      },
      kumera: {
        500: "#deba14",
        600: "#c0910e",
        700: "#90630e",
      },
      mexicanRed: {
        200: "#ffc6a8",
        300: "#ff9f71",
        400: "#ff7849",
        500: "#fe4411",
      },
      Kilamanjaro: {
        800: "#9a3212",
        900: "#7c2b12",
        950: "#270b04",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      merri: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      md: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      borderRadius: {
        default: "1rem",
        "4xl": "2rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
