/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        mountpage: 'mountpage 0.2s ease',
      },
      keyframes: {
        mountpage: {
          '0%': { transform: 'translate(0, -100%)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
};
