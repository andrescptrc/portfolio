import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: {
        50: "#E7F6FD",
        100: "#A6DDF8",
        200: "#7ACCF5",
        300: "#4EBBF2",
        400: "#22AAEE",
        500: "#1090D0",
        600: "#0D73A7",
        700: "#09577D",
        800: "#063A53",
        900: "#031D2A",
      },
      white: {
        full: "#FFFFFF",
        title: "#FAFAFA",
        border: "#F3F5F7",
        description: "#E0E4EB",
        dark: "#C7CEDB",
        darkest: "#878787",
      },
      black: {
        full: "#000000",
        primary: "#0A0E15",
        secondary: "#161A23",
        tertiary: "#212631",
        quarternary: "#373F4E",
        quinary: "#4E576A",
      },
    },
  },
  plugins: [],
};
export default config;
