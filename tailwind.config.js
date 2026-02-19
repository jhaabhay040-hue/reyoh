/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#2563EB',
        accent: '#22C55E',
      },
      borderRadius: {
        xl2: '12px',
      },
      boxShadow: {
        soft: '0 10px 25px -15px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.45s ease-out',
      },
    },
  },
  plugins: [],
}
