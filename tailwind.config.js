/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        primary: "#fef18f",
        lightPrimary: "#fffcd9",
        secondary: "#898121",
        hoverText: "#87805E",
      },
    },
  },
  plugins: [require("daisyui")],
}
