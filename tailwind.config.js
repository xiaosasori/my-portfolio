const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      },
      width: {
        '30vh': '30vh',
        '50vh': '50vh'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
