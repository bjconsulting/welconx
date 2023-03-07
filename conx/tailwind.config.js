/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        'sub': '#D0A388',
        'prim': '#465361'
      },
      backgroundImage:{
        'bg-1': "url('../public/bg-1.jpg')",
        'bg-2': "url('../public/bg-2.jpg')",
      },
    },
  },
  plugins: [],
}
