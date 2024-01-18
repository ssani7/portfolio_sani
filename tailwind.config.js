/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#641ae6",
        secondary: "#d926a9",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
      darkMode: {
        primary: "#641ae6",
        secondary: "#d926a9",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#1d232a",
      },
    }],
  },
  plugins: [require("daisyui")],
}
