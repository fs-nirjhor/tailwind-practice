/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leafGreen: colors.teal,
        soil: "#a66205",
        ash: {
          light: "#a29898",
          DEFAULT: "#7d854e",
          500: "#545979",
          dark: "#45254a",
        },
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
