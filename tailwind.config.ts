import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: "1rem", //16
      base: "1.25rem", //20
      xl: "1.5rem", //24
      "2xl": "2rem", //32
      "3xl": "5rem",
    },

    extend: {
      gradientColorStops: {
        "orange-500": "#FF5722",
        "yellow-500": "#FFC107",
      },

      spacing: {
        "30": "120px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        xs: "475px",
      },
      colors: {
        orangered: {
          "100": "#ff5722",
          "200": "rgba(255, 87, 34, 0.8)",
          "300": "rgba(255, 87, 34, 0.1)",
        },
        grey: "#B5B5B5",
        lightyellow: "#FFC107",
        lightorange: "#FF5722",
        vermilion: {
          "500": "hsl(14, 100%, 57%)",
        },
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
