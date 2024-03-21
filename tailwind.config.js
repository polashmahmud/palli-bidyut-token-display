/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ["Roboto, sans-serif"],
      },
      colors: {
        'dark-blue': '#0a0f19',
        'dark-blue-light': '#0e1727',
        'dark-blue-light-2': '#102035',
        'sky-blue': '#3092f2',
        'sky-blue-light': '#BAD9FC',
        'sky-blue-light-2': '#9dc3f3',
      }
    },
  },
  plugins: [],
}

