/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(90deg)",
          },
          "100%": {
            transform: "rotate(-90deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
