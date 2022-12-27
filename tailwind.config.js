/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      "Open Sans": ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "#666666",
        "dark-background": "#111111",
        "primary-yellow": "#ffb400",
      },
    },
  },
  plugins: [],
};
