/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          black: "#0b0b0b",
          lightblack:"#101010",
          white: "#FFFFFF",
          gray: "#1d1d1d",
        },
      },
    },
  },
  plugins: [],
};
