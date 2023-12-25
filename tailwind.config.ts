import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

      colors: {
        orangered: "#ff5722",
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
