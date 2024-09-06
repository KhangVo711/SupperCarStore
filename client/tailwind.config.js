/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'opacity': 'hsl(0deg 3.09% 93.47% / 75%)',
      },
      fontFamily: {
        mon: ['Montserrat', 'serif'],
        bebas: ['Bebas Neue', 'serif']
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'hover', 'focus'], 
    },
  },
  plugins: [],
}

