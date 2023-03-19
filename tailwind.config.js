/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: 'Helvetica-Neue',
      },
      colors: {
        primary: {
          green: "#08694A",
          pink: "#DD4A6B",
        },
        brand: "#2C2B6C",
        secondary: '#D1E797',
        green:"#05F26C",
        pink:"#F2055C",
        stale:"#07F2F2",
        yellow:"#EAF205"
      },
    },
  },
  plugins: [],
}
