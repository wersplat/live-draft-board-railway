/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007BFF',
          dark: '#0056b3',
        },
        secondary: {
          DEFAULT: '#6c757d',
          dark: '#545b62',
        },
      },
    },
  },
  plugins: [],
}
