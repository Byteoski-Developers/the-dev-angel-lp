import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'], // or 'media' or 'class'
  theme: {
    
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "30" : "7.5rem",
      },
      colors: {
        orangered: {
          "100": "#ff5722",
          "200": "rgba(255, 87, 34, 0.8)",
          "300": "rgba(255, 87, 34, 0.1)"
          },
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
export default config;
