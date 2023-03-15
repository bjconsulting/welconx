/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'laptop-maior': '1192',
      // => @media (min-width: 1024px) { ... }
      
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      'desktop-big': '1480px',
      // => @media (min-width: 1280px) { ... }

      '4k': '2500px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        'sub': '#D0A388',
        'prim': '#465361'
      },
    },
  },
  plugins: [],
}
