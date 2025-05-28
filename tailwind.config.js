import animate from 'tailwindcss-animate'
import nth from 'tailwindcss-nth-child'
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      animate,
      nth,
    ],
  }