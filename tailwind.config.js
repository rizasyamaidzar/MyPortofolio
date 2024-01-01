/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    "./node_modules/flowbite/**/*.js",
    
  ],
  theme: {
    container :{
      center : true,
      padding : '16px'
    },
    extend: {
      colors : {
        'hitam' :'#040718',
        'ungu' : '#5D3CB1'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],

}



