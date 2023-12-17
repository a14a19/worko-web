/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-header': {'min': '1180px'},
        'md-small': {'min': '630px'},
        'md-lg-card': {'min': '690px', 'max': "1023px"},
      }
    },
  },
  plugins: [],
}

