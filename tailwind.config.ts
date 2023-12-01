import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#09100e',
        'background': '#eff6f4',
        'primary': '#97c4b6',
        'secondary': '#c8e0d8',
        'accent': '#4f8c79',
       },
     },
  },
  plugins: [],
}
export default config
