/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#fff8f5',
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
        warm: {
          50:  '#fffbf7',
          100: '#fff3e8',
          200: '#fde8c8',
          300: '#fbd4a0',
          400: '#f7b86a',
          500: '#f5a623',
          600: '#e08c0a',
          700: '#b86f08',
          800: '#8c520a',
          900: '#6b3d0a',
        },
        ink: {
          950: '#1f1d1c',
          900: '#2c2a28',
          800: '#403d3a',
          700: '#5c5856',
          600: '#6b6764',
          500: '#7a7572',
          400: '#a8a4a0',
          300: '#d5d2cf',
          200: '#e8e6e3',
          100: '#fdfcfa',
          50:  '#fffefe',
        },
        cream: '#fef9f4',
        sand:  '#f5ede0',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow':  'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'draw':       'draw 1.2s ease-out forwards',
        'bounce-x':   'bounceX 1.4s ease-in-out infinite',
        'wiggle':     'wiggle 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.08)' },
        },
        draw: {
          '0%':   { 'stroke-dashoffset': '1000' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        bounceX: {
          '0%,100%': { transform: 'translateX(0)' },
          '50%':     { transform: 'translateX(5px)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-4deg)' },
          '50%':     { transform: 'rotate(4deg)' },
        },
      },
    },
  },
  plugins: [],
};
