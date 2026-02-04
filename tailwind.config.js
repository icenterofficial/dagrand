/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#153c63',
          gold: '#b49b67',
          goldLight: '#dcc69a',
          gray: '#f4f6f8',
          dark: '#0f2b4a'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        moul: ['"Moul"', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine-sweep': 'shine 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        }
      }
    }
  },
  plugins: [],
}