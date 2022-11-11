/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        light: "#F6F6F6",
        blue: "#375A9E",
        grey: "#EFEFEF",
        charcoal: "#3F3F3F",
      },
    },
  },
  plugins: [],
};
