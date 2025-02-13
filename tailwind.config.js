/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosaAntigo: '#CC7F91',
        fonte: '#EADFDB'
      }
    },
  },
  plugins: [],
}

