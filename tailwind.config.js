/** @type {import('tailwindcss').Config} */
/* const _ = require('lodash')
const plugin = require('tailwindcss/plugin') */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        prototurk: "#32445a",
        twitter: "#1da1f2",
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
  plugins: [
    /* plugin(function({ addUtilities, theme, e }) {
      const rotateUtilities = _.map(theme('rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities)
    }) */
  ]
};
