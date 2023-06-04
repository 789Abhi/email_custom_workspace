/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2.5': '0px 2px 5px -2px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}