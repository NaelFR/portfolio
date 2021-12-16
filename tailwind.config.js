module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Satoshi"', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#FF8761',
        violet: '#7B39FF',
        cyan: '#47C2FF',
        lightGreen: '#79E2B1',
        pinkViolet: '#A071FF',
        black: '#04050B',
        darkBlue: '#01152E',
      },
      keyframes: {
        totalPulse: {
          '0%': { opacity: 0.1 },
          '25%': { opacity: 0.5 },
          '50%': { opacity: 1 },
          '75%': { opacity: 0.5 },
          '100%': { opacity: 0.1 },
        },
      },
      animation: {
        totalPulse: 'totalPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
