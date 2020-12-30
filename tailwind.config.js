const colors = require("tailwindcss/colors");
// const forms = require('tailwindcss/forms');

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors,
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
  // xwind options
  xwind: {
    mode: "objectstyles",
  },
};
