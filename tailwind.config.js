/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#ff8463',
        'primary-200': '#dd6749',
        'primary-300': '#d86344',
        'accent-100': '#ffce9d',
        'accent-200': '#986f42',
        'clr-secundary': '#e0e0e0',
        'dark-100': '#111111',
        'dark-200': '#202020',
        'dark-300': '#373737',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
