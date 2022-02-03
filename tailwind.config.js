module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green': '#40ff00',
      'black': '#000000'
    },
    extend: {
      backgroundImage: {
        'player' : "url(/public/player.png)"
      }
    },
  },
  plugins: [],
}
