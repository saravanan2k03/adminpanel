/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'Light Mode',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}','node_modules/preline/dist/*.js',],
  theme: {
    screens:{
      sm:'480px',
      mv:'393px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        Navcolor:'hsla(217, 33%, 17%, 1)',
        profile:'hsla(215, 21%, 36%, 1)'
      },
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
}

