/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        jungle: '#0f2f26',
        dusk: '#0b1b16',
        sand: '#f3f0e9',
      },
      fontFamily: {
        sans: ['Manrope', 'Space Grotesk', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
