// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/path/to/noise.jpg')",
      }
    },
  },
  plugins: [],
}
