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
        lightPrimary: "#ADC4CE",
        // secondary: "#898121",
        // secondary: "#3A98B9",
        secondary: "#526D82",
        hoverText: "#9DB2BF",
      },
    },
  },
  plugins: [require("daisyui")],
}
