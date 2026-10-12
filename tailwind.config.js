/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7F2',
        pearl: '#F6EFE7',
        blush: { 50: '#FCF5F3', 100: '#F7E6E1', 200: '#EFD2CA', 300: '#E3B7AC' },
        champagne: { 100: '#F3E9D8', 200: '#E9D7B8', 300: '#D9BE8C', 400: '#C6A26A', 500: '#B08A4E', 600: '#8F6E3A' },
        cocoa: { 400: '#8A7268', 500: '#6B5850', 700: '#4A3B35', 900: '#2E2420' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.28em' },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(74, 59, 53, 0.25)',
        glow: '0 10px 40px -10px rgba(198, 162, 106, 0.55)',
      },
      borderRadius: { arch: '999px 999px 1.5rem 1.5rem' },
    },
  },
  plugins: [],
};
