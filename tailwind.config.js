/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'pic01': "url('./images/pic01.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
