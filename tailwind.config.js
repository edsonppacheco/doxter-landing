/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'doxter-blue': '#3584A4',
        'compliance-green': '#27AE60',
        'paper-white': '#F8FAFC',
        'ink-black': '#1A1A1A'
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Courier Prime"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
