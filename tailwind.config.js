/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
        extend: {
          screens: {
            'xs': '500px',
            'xsm':'425px'
          },
          keyframes: {
            float: {
              '0%, 50%,100%': { transform: 'translateY(0) ' },
              '25%,75%': { transform: 'translateY(-10px) ' },
            },
          },
          animation: {
            float: 'float 2s ease-in-out infinite',
          },
          fontFamily: {
            poppins: ['Poppins', "sans-serif"],
            display: ['Anek Devanagari',"sans-serif"],
            micro: ["Micro","sans-serif"]
          }
        }
      },
  plugins: [require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })],
  
  darkMode:'class',
};