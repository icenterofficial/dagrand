
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans Khmer', 'sans-serif'],
        serif: ['Playfair Display', 'Noto Serif Khmer', 'serif'],
        moul: ['Moul', 'serif'],
        chinese: ['Noto Serif SC', 'serif'],
        khmer: ['"Google Sans"', 'Noto Sans Khmer', 'sans-serif'],
        'khmer-serif': ['Noto Serif Khmer', 'serif'],
      },
      colors: {
        brand: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#153c63',
          950: '#0a2138',
        },
        gold: {
          50: '#fbf7eb',
          100: '#f5ecd1',
          200: '#eddca8',
          300: '#e3c577',
          400: '#dab85b',
          500: '#cc9933',
          600: '#a67324',
          700: '#855620',
          800: '#6d4520',
          900: '#5a3a1f',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}
