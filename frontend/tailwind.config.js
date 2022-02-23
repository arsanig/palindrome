module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
      'qgreen': '#009545',
      'qgray': '#55565A',
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
