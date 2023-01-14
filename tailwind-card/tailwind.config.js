/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      'body-gray': '#2D2E36',
      'desc-text-gray': '#8D91A6',
      'card-gray': '#383A45'
    }
  },
  plugins: [],
}
