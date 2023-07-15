/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "c-black": "#121212",
        "c-purple": "#2e004b",
        "c-purple-light": "rgb(68, 24, 107)",
        "c-pink": "rgb(255, 214, 216)",
        "c-pick-dark": "rgb(208, 110, 134)",
        "c-sky": "rgb(98, 134, 186)",
      },
      fontFamily: {
        gaegu: ["Gaegu", "cursive"],
        "lilita-one": ["Lilita One", "cursive"],
      },
      keyframes: {
        "nav-move": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "text-move": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0%",
          },
          "10%": {
            transform: "translateY(0)",
            opacity: "100%",
          },
          "50%": {
            transform: "translateX(0)",
            opacity: "100%",
          },
          "55%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        show: {
          "0%, 90%": {
            opacity: "0",
          },
          "100%": { opacity: "100%" },
        },
        "show-1": {
          "0%": {
            opacity: "0",
          },
          "33%": { opacity: "50%" },
          "34%, 100%": { opacity: "0%" },
        },
        "show-2": {
          "0%, 33%": {
            opacity: "0",
          },

          "66%": { opacity: "50%" },
          "67%, 100%": { opacity: "0%" },
        },
        "show-3": {
          "0%": {
            opacity: "0",
          },
          "66%": { opacity: "0%" },
          "67%, 100%": { opacity: "50%" },
        },
        "move-bt": {
          "0%, 90%": {
            transform: "translateY(200%)",
            opacity: "0%",
          },
          "91%": {
            opacity: "100%",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "100%",
          },
        },
        shake: {
          "10%, 80%": {
            transform: "translateX(-1px)",
          },
          "15%, 70%": {
            transform: "translateX(2px)",
          },
          "20%, 40%, 60%": {
            transform: "translateX(-4px)",
          },
          "30%, 50%": {
            transform: "translateX(4px)",
          },
        },
      },
      boxShadow: {
        button: "0px 8px 0px 0px",
        "button-1/2": "0px 4px 0px 0px",
      },
      animation: {},
    },
  },
  plugins: [],
};
