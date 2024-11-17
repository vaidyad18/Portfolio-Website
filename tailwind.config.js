/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    '3xl': '2156px'  
  },
  theme: {
        extend: {
          fontFamily: {
            poppins: ['Poppins', "sans-serif"],
            display: ['Anek Devanagari',"sans-serif"],
            micro: ["Micro","sans-serif"]
          }
        }
      },
  plugins: [require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })],
};
