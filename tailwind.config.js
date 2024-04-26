/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#35969c',
        secondary: '#383d45',
        main_bg: '#35969c50',
      },

    },
  },
  plugins: [],
}