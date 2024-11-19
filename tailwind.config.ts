import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom:
          "repeat(auto-fit, minmax(45%,1fr, 55%,2fr, 40%,3fr,  60%, 4fr))",
      },
      colors: {
        baseColor: {
          100: "#ffffff",
          200: "#EDEEF0",
          300: "#9098A0",
          400: "#555E67",
          500: "#b3b3b3",
          600: "#1D1E20",
        },
        blueColor: {
          100: "#F5F8FE",
          200: "#D9E5FC",
          300: "#B3CCFA",
          400: "#79A5F6",
          500: "#538BF3",
          600: "#266DF0",
        },
        darkColor: {
          100: "#F4F5F6",
          200: "#D3D5D9",
          300: "#B2B6BD",
          400: "#9CA1AA",
          500: "#4B4F58",
          600: "#232529",
        },
        primary: "#ffffff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      padding: {
        "3": "0.875rem",
      },
      mediaQuery: {
        sm: "100px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gilroyBold: ["gilroyBold", "sans-serif"], // Use the name you've assigned in your code
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        // Define mobile styles
        "heading-h1-mobile": ["56px", "56px"], // [fontSize, lineHeight]
        "heading-h2-mobile": ["32px", "38px"],
        "heading-h3-mobile": ["24px", "26px"],

        // Define desktop styles
        "heading-h1-desktop": ["92px", "96px"],
        "heading-h2-desktop": ["52px", "58px"],
        "heading-h3-desktop": ["40px", "44px"],
      },
    },
  },
  plugins: [],
};
export default config;
