/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        primary: "#d7e5fd",
        secondary: "#3C5AB5",
      },
    },
  },
  plugins: [require("daisyui")],
}
