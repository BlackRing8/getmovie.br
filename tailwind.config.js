/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'ungu' : '#756AB6',
    },
    extend: {},
  },
  dark: "class",
  plugins: [nextui()],
});

