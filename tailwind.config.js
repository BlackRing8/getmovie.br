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
      'cr-1' : '#ffffec',
      'cr-2' : '#d6d6c7',
      'cr-3' : '#adada2',
      'cr-4' : '#85857d',
      'cr-5' : '#5c5c58',
      'cr-6' : '#333333',
    },
    fontFamily: {
      'myFont': ['Louis-George-Cafe'],
    },

    extend: {},
  },
  dark: "class",
  plugins: [nextui()],
});

