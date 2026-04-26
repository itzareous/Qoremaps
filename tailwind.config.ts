import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7856ff',
        'primary-dark': '#6344e0',
        'primary-light': '#f0ecff',
      },
      fontFamily: {
        sans: ['"Anderson Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
