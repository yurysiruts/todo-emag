/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 20px 0px rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: [],
}

