/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      boxShadow: {
        mdSymmetric: "rgba(17, 17, 26, 0.1) 0px 2px 20px",
        lgSymmetric: "rgba(17, 17, 26, 0.3) 0px 2px 10px",
      },
      colors: {
        // Dark mode
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBG: "hsl(207, 26%, 17%)",
        cardLightGrayText: "#d8e0e9",
        // Light mode
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        darkGrayText: "hsl(0, 0%, 20%)",
        darkGrayInput: "hsl(0, 0%, 52%)",
        veryLightGrayBG: "hsl(0, 0%, 98%)",
        // Dark Mode Text & Light Mode Elements
        white: "#fff",
      },
      gridTemplateColumns: {
        oneThirdTwoThirds: "49% 51%",
      },
    },
  },
  plugins: [],
};
