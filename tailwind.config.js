/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '35': '35px',
        '50': '50px',
        '120': '480px',
        'html': '85%',
        'css': '90%',
        'sass': '75%',
        'tw': '80%',
        'js': '55%',
        'rj': '80%',
        'nj': '30%',
        'ej': '30%',
        'md': '55%',
        'seo': '65%'
      },
      colors: {
        'pricol': '#101010',
        'secol': '#c70039',
        'tricol': '#191919'
      },
      content: {
        'home': 'url("../img/home.png")',
        'about': 'url("../img/about.png")',
        'portfolio': 'url("../img/portfolio.png")',
        'contact': 'url("../img/contact.png")'
      },
      boxShadow: {
        '3xl': '0px 0px 0px 400px #c70039'
      },
      screens: {
        'fird': {'max': '1536px'},
        'secd': {'max': '1280px'},
        'thid': {'max': '1024px'},
        'foud': {'max': '768px'},
        'fifd': {'max': '640px'},
        'sixd': {'max': '480px'},
        'sevd': {'max': '380px'},
        'tall': {'raw': '(max-height: 900px)'}
      },
    },
  },
  plugins: [],
}

