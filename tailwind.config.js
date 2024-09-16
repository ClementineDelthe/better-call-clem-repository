/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{

    },
    extend: {
      colors: {
        // 'blue': '#3B21FD',
        'blue': '#554BF8',
        'purple': '#A59FFE',
        // 'gold': '#FFD400',
        'lime': '#BEF840',
        'fushia': '#F882FB',
        // 'white': '#FFF',
        // 'black': '#1C1C1C',
        'beige': '#FEF6E0',
        'pink': '#F5B8CC',
        'lilac': '#C5C3E3',
        'orange': '#F06120',
        'green': '#025548',
        'white': '#FFF',
        'black': '#1C1C1C',
        'sky': '#D5E6FB',
        'yellow': '#F6E140',
        // 'orange2': '#EF611F',
      },
    },
  },
  plugins: [],
}
