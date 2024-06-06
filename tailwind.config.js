/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainDark': '#0B0D17',
        'mainLight': '#D0D6F9',
        'borderLight': '#616476',
        'hovercolor': '#979797',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'barlowcondensed': ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      screens: {
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
      }
    },
  },
  plugins: [],
}