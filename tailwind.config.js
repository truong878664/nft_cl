/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "c-black": "#121212",
        "c-purple": "#2e004b"
      },
      fontFamily: {
        gaegu: ["Gaegu", "cursive"],
        "lilita-one": ["Lilita One", "cursive"],
      },
    },
  },
  plugins: [],
};
