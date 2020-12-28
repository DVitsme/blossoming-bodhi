const colors = require('tailwindcss/colors');
// const forms = require('tailwindcss/forms');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
};
