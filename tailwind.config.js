/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Oxygen: ['Oxygen', 'sans-serif'],
        'Oxygen-Mono': ['Oxygen Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
