/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 120s linear infinite',
        'scan-line': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '0%', opacity: 0.5 },
          '50%': { top: '100%', opacity: 0.8 },
          '100%': { top: '0%', opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};