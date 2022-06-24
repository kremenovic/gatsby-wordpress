/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: { max: "1440px" },
    },

    extend: {
      colors: {
        primaryColor: "#212121",
        secondaryColor: "#313131",
        linkColor: "#bf9f5a",
      },
    },
  },
  plugins: [],
}
