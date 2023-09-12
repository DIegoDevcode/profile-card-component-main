/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      Darkcyan: '#19a2ae',
      Verydarkdesaturatedblue: '#2d3248',
      Darkgrayishblue: '#6a6f81',
      Darlgray: '#969696',
    }),
    extend: {},
  },
  plugins: [],
}

