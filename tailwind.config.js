/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071526',
          900: '#0c2340', // Dominant dark navy from brochure
          800: '#143154',
          700: '#1d416b',
          600: '#2d5483',
          100: '#e2e9f2',
          50: '#f1f5f9',
        },
        teal: {
          900: '#004750',
          800: '#005d68',
          700: '#007a87', // Signature brochure theme teal
          600: '#0094a3',
          500: '#00adc0',
          200: '#aee4ea',
          100: '#dcf4f6',
          50: '#f0f8f9',
        },
        gold: {
          800: '#92400e',
          700: '#b45309',
          600: '#d97706',
          500: '#e59b2c', // Brochure emblem gold
          400: '#f59e0b',
          100: '#fef3c7',
          50: '#fffbeb',
        },
        pillar: {
          innovation: '#e67e22',
          business: '#1e6091',
          technology: '#0d9488',
          society: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
