/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./cinematic/index.html', './cinematic/src/**/*.js'],
  theme: {
    extend: {
      colors: { night: '#0e0a09', ivory: '#f6efe6', gold: '#d6b47a', blush: '#f0cdc4' },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
