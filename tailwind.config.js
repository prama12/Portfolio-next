/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "#666666",
        "primary-light": "#A7A7A7",
        "solid-heading": "#42446E",
        "gradient-heading1": "#13B0F5",
        "gradient-heading2": "#E70FAA",
        "primary-button": "#D7FFE0",
        "primary-button-text": "#018C0F",
        "primary-dark-mode": "#CCCCCC",
        "dark-background": "#363636",
      },
    },
  },
  plugins: [],
};
