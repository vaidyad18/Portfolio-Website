/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
