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
        primary: '#E91E8C',
        'primary-dark': '#C41878',
        'primary-light': '#F472B6',
        blush: '#FFF0F7',
        'dark-text': '#1A1A2E',
        'body-text': '#4A4A6A',
        teal: '#00B4A6',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        dmsans: ['var(--font-dmsans)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['52px', { lineHeight: '1.15', fontWeight: '700' }],
        'section': ['36px', { lineHeight: '1.25', fontWeight: '700' }],
        'card-title': ['22px', { lineHeight: '1.35', fontWeight: '600' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
export default config
