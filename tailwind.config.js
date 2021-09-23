module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#9ECBF7',
          DEFAULT: '#035AA6',
          dark: '#1B365C',
        },
        green: {
          light: '#D9F6D7',
          DEFAULT: '#3BD923',
          dark: '#1C750E',
        },
        orange: {
          light: '#FBF3EF',
          DEFAULT: '#F28E13',
          dark: '#995A0C',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
