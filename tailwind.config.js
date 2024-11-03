/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sen'],
    },
    fontSize: {
      'xs': '10px',
      'sm': '14px',
      'base': '16px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '36px',
      '5xl': '48px',
    },
  },
},
  plugins: [],
}