/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{App,index}.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-100": "#FFFDF5",
        "gold-200": "#FBF5E6",
        "gold-300": "#EFE1C7",
        "gold-400": "#D4AF37",
        "gold-500": "#AA8C2C",
        "gold-800": "#5C4B13",
        "deepwood": "#1A2E23",
        "christmas-red": "#C23A3A",
        "christmas-green": "#225A2F",
      },
      fontFamily: {
        "display": ['"Cinzel Decorative"', 'serif'],
        "serif": ['"Libre Baskerville"', 'serif'],
        "sans": ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s ease-out forwards',
        'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'melt': 'melt 3s ease-out forwards',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        melt: {
            '0%': { opacity: 0.3, transform: 'scale(1) translateY(0)' },
            '100%': { opacity: 0, transform: 'scale(1.5) translateY(10px)' },
        }
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
      })
    }
  ],
}
