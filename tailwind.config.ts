import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: 'linear-gradient(90.27deg, #FF5722 3.11%, #FFC107 98%)',
      },
      colors: {
        primaryOrange: "#ff5722",
        secondaryYellow: "#FFC107",
      },
      boxShadow: {
        boxGlow: '0px 6px 10px 5px #FF57221',
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        montserrat: "Montserrat",
      },
      fontSize: {
        heading: '48px',
      },
      fontWeight: {
        heading: '700', 
      },
      lineHeight: {
        heading: '72px',
      },
    },
  },
  plugins: [],
};
export default config;
