/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'Times New Roman'],
      },
      boxShadow:{
        'box-shadow': '5px 0px 5px 0px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}

