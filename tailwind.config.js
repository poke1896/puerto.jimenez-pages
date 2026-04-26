/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        jungle: '#14362d',
        dusk: '#0b1712',
        sand: '#f2ead8',
        sea: '#5ab7b2',
        sun: '#f4b25f',
        coral: '#e67a5f',
        lagoon: '#1a4c49',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      boxShadow: {
        glow: '0 22px 60px rgba(8, 20, 16, 0.45)',
        sun: '0 20px 55px rgba(244, 178, 95, 0.35)',
      },
    },
  },
  plugins: [],
}
