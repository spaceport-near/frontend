/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '17.5px'],
      menu_sm: ['15px', {
        lineHeight: '24px',
        fontWeight: '400',
        letterSpacing: '-0.015em'
      }],
      footer_sm: ['15px', {
        lineHeight: '24px',
        fontWeight: '400',
        letterSpacing: '-0.015em'
      }],
      hero: ['32px', {
        lineHeight: '40px',
        fontWeight: '400',
        letterSpacing: '0.34em'
      }],
      lg: ['18px', '22.5px'],
      '2xl': ['24px', '30px'],
    },
    minWidth: {
      '323': '323px',
      '630': '630px',
    },
    flexGrow: {
      '5': 5
    },
    extend: {
      colors: {
        dark: '#000000',
        darkLight: '#1E1E1E',
        primary: '#78DED4',
        primaryLight: '#B3E7E2',
        red: '#FF6D6D',
        green: '#009C8D'
      }
    },
  },
  plugins: [],
}
