/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff8f5',
          100: '#ffede6',
          200: '#ffd9cc',
          300: '#ffc2ad',
          400: '#ffa082',
          500: '#ff7a55',
          600: '#f05d3a',
          700: '#d94a2a',
          800: '#b53f24',
          900: '#943620',
        },
        ink: {
          950: '#1f1d1c',
          900: '#2c2a28',
          800: '#403d3a',
          700: '#5c5856',
          500: '#7a7572',
          400: '#a8a4a0',
          200: '#e8e6e3',
          100: '#fdfcfa',
        },
        accent: {
          gold: '#f5a623',
          peach: '#ffb088',
          cream: '#fff5eb',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
