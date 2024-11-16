/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '810px',
    // => @media (min-width: 810px) { ... }

    '2md':'930px',

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
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
