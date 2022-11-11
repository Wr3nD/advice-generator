/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Manrope": ['Manrope', "sans-serif"]
      }, colors: {
        "neon-green": "#52ffa8"
      }
    },
  },
  plugins: [],
}