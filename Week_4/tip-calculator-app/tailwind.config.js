/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        strongCyan: 'var(--StrongCyan)',
        veryDarkCyan: 'var(--VeryDarkCyan)',
        darkGrayishCyan: 'var(--DarkGrayishCyan)',
        grayishCyan: 'var(--GrayishCyan)',
        lightGrayishCyan: 'var(--LightGrayishCyan)',
        veryLightGrayishCyan: 'var(--VeryLightGrayishCyan)',
        white: 'var(--White)',
      },
      fontFamily:{
        'space-mono' : ['Space Mono', 'monospace']
      },
      letterSpacing:{
        'ultra-wide': '0.7rem'
      }
    },
  },
  plugins: [],
}

