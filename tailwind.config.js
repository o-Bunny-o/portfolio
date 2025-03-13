// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f06400',
          light: '#f48733',
          dark: '#c85000',
        },
        secondary: {
          DEFAULT: '#102c3b',
          light: '#3a5e67',
          dark: '#000a13',
        },
        accent: {
          DEFAULT: '#f39e14',
          light: '#f7b36e',
          dark: '#b9780f',
        },
        grayCustom: {
          DEFAULT: '#5a6d74',
          light: '#ebebee',
        },
        white: '#f8f8f8',
        black: '#000000',
      },
      fontFamily: {
        sans: ["'All Round Gothic'", "'Quicksand'", "sans-serif"],
        allround: ["'All Round Gothic'", "sans-serif"],
        quicksand: ["'Quicksand'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
