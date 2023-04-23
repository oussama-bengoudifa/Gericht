/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#DCCA87",
        goldenLight: "#F5EFDB",
        grey: "#AAAAAA",
        dark: "#0C0B08",
        cream: "#FAFAFA",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        cormorant: ["Cormorant Upright", "serif"],
      },
      screens: {
        xs: "450px",
      },
      letterSpacing: {
        xs: " 0.03em",
        s: "0.04em",
      },
      backgroundImage: {
        overlay: "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
