/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    extend: {
      'backgroundImage': {
        'main-img': "url('../images/img.jpg')"
      },
    },
  },
  plugins: [],
}
