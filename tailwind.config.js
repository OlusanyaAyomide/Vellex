/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        xs:"340px",
        ...defaultTheme.screens
      },
      colors:{
        "velt-black":"#565E6CFF",
        "velt-pink":"#8255FA",
        "velt-offwhite":"#F0F3F2",
        "velt-blue":"#062B74"
      },
      fontFamily:{
        inter:["Inter"],
        gothic:["Gothic A1","sans-serif"],
       
      }
    },
  },
  plugins: [],
}
