import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(90.27deg, #FF5722 3.11%, #FFC107 98%)",
      },
      colors: {
        primaryOrange: "#ff5722",
        secondaryYellow: "#FFC107",
        primaryOrangeLight: "#FFEFE9",
        grey: "#B5B5B5",
        darkslategray: "#333",
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
