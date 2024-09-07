/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'text-xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'opacity': 'hsl(0deg 3.09% 93.47% / 40%)',
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

