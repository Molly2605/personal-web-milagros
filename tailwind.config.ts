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
        primary: { // Rojo vino a rosa
          50: '#f9e6eb',
          100: '#f3c2cf',
          200: '#ea97b4',
          300: '#e06f96',
          400: 'rgb(216, 71, 125)',
          500: '#c93067',
          600: '#ac2554',
          700: '#8e1f45',
          800: '#711837',
          900: '#550f27',
        },
        secondary: { // Chocolate oscuro
          50: '#f4e8e1',
          100: '#e7cbb8',
          200: '#d9ab8e',
          300: '#c88c63',
          400: '#b36f43',
          500: '#9d5530',
          600: '#813e24',
          700: '#652e1b',
          800: '#4b1f12',
          900: '#311109',
        },
        accent: { // Rosa claro / melocotón
          50: '#fff1f2',
          100: '#ffd9da',
          200: '#ffbaba',
          300: '#ff9b9c',
          400: '#ff7e80',
          500: '#ff6165',
          600: '#e64d50',
          700: '#b8363c',
          800: '#892a2b',
          900: '#5d1b1d',
        },
        background: {
          DEFAULT: '#f8f1eb',
          light: '#fff2ed',
        },
        text: {
          DEFAULT: '#1b1a17',
          muted: '#4a453f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
