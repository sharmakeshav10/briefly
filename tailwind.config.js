/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #B9E0E7 0.15%, #E9E3E9 62.2%);",
        "custom-gradient-2":
          "linear-gradient(45deg, #BBCCFD 0.15%, #F7E2FF 62.2%);",
        "custom-gradient-3":
          "linear-gradient(45deg, #BFAA4D 0.15%, #F4EDC7 62.2%);",
      },
    },
  },
  plugins: [],
};
