/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'DarkBlue': "hsl(209, 23%, 22%)",
        'VeryDarkBlueBg': "hsl(207, 26%, 17%)",
        'VeryDarkBlueTxt': 'hsl(200, 15%, 8%)',
        'DarkGray': 'hsl(0, 0%, 52%)',
        'VeryLightGrayBg': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontSize: {
        'HomepageItems': '0.875rem',
        'DetailPage': '1rem'
      },
      fontWeight: {
        'fw-300': '300',
        'fw-600': '600',
        'fw-800': '800'
      },
      fontFamily: {
        'font-family': "Nunito Sans"
      },
      gridTemplateColumns: {
        'autofit': "repeat(auto-fit, minmax(250px, 1fr))"
      },
      opacity: {
        'DetailedPageOpacity': '0.75'
      },
      keyframes: {
        spin: {
          'to': {transform: 'rotate(360deg)'},
        }
      },
      animation: {
        spin: 'spin 30s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

