/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "420px",
      xxsm: "500px",
      sm: "640px",
      md: "768px",
      mdd: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "#666666",
        "primary-light": "#eeeeee",
        "dark-background": "#111111",
        "primary-yellow": "#ffb400",
      },
    },
  },
  plugins: [],
};
