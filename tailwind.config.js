/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sany: ["Playfair"],
      },
      colors: {
        customGray: {
          100: "#F9FAFB",
          800: "#111827",
        },
    },
  },
  plugins: [],
}}
