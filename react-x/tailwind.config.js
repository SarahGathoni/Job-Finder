/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,tsx,ts}'
],
  theme: {
    fontFamily:{
      primary: 'Obitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'

    },
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#8809C3',
        customPurple: '#591DA9',
        customPurpleTwo: '#051960'
      }
    },
  },
  plugins: [],
}

