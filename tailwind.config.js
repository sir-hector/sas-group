/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : {
          400: '#0059ce',
          500: '#070099',
          600: '#006',
        },
        white: colors.white,
      },
      fontFamily: {
        'scand': ['Scandinavian New','Helvetica Neue','Helvetica','Arial','sans-serif']
      },
      backgroundImage: {
        // 'hero1': "url('../public/images/sas-group.jpeg')",
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
