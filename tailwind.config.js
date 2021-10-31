const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        "light-red": colors.red,
      },
    },
    fontFamily: {
      sans: ["Avenir", "sans-serif"],
      serif: ["Avenir", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
