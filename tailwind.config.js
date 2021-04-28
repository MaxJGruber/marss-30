const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
