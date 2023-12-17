import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orangered: '#ff5722',
        accent: {
          '50': 'hsl(13, 100%, 97%)',
          '100': 'hsl(11, 100%, 94%)',
          '200': 'hsl(11, 100%, 88%)',
          '300': 'hsl(11, 100%, 80%)',
          '400': 'hsl(11, 100%, 69%)',
          '500': 'hsl(11, 100%, 60%)',
          '600': 'hsl(11, 89%, 48%)',
          '700': 'hsl(12, 91%, 42%)',
          '800': 'hsl(11, 86%, 35%)',
          '900': 'hsl(12, 77%, 31%)',
          '950': 'hsl(12, 92%, 15%)',
        },
      },
      fontFamily: {
        poppins: 'Poppins',
        inter: 'Inter',
        montserrat: 'Montserrat',
      },
    },
  },
  plugins: [],
}
export default config
