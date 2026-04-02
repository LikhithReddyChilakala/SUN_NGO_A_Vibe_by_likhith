/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#1e1b4b',
          900: '#312e81',
        },
        slate: {
          50: '#f8fafc',
          300: '#cbd5e1',
        },
        orange: {
          500: '#f97316',
        }
      }
    },
  },
  plugins: [],
}
