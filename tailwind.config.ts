import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background': "hsla(225,100%,99%,1)",
      'white': "hsla(0,0%,100%,1)",
      'black': "hsla(0,0%,0%,1)",
      'black-outline': "hsla(0,0%,0%,0.7)",
      'navbar': "hsla(158,20%,81%,0.2)",
      'primary': "hsla(183,87%,24%,1)",
      'primary-outline': "hsla(183,87%,24%,0.3)",
      'secondary-background': "hsla(22,89%,40%,1)",
      'secondary-outline': "hsla(22,89%,40%,0.3)",
      'tertiary': "hsla(158,20%,81%,1)",
      'tertiary-hovered': "hsla(158,20%,81%,0.6)",
      'text': "hsla(0,0%,21%,1)",
      'text-hint': "hsla(0, 0%, 21%, 0.8)",
      'fern-green': "hsla(103,36%,37%,1)",
      'fern-green-underline': "hsla(103,36%,37%,0.6)",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
