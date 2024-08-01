/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center    : true,
      padding   : '16px',
    },
    extend: {
      colors: {
        white   : '#FFFFFF',
        white2  : '#F8F6F6',
        black   : '#2A363B',
        red     : '#CF4647',
        yellow  : '#F5D061',
        gray    : '#38464B',
      },
      screens:{
        '2xl'   : '1320px',
      },
    },
  },
  plugins: [],
}
