const { plugin } = require('next/dist/build/webpack/config/helpers');

module.exports = {
  important: true, // FIXME: if there is a better way to fix the issue that Next build with tailwind loss
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
};
