/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'tapes':"url('../images/hosein-zanbori-wvbOWcIDuYg-unsplash.jpg')",
      },
      colors: {
        'dark': '#0A100D',
        'light-dark':'#2E2B2B',
        'yellow': '#EDBD4C',
        'whiteish': '#F7EFD3',
      },
    },
  },
  plugins: [],
}
