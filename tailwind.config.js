/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#284b63",
        secondary: "#fdfcdc",
        test1: "maroon",
        test2: "aquamarine",
      },
    },
  },
  plugins: [],
};
