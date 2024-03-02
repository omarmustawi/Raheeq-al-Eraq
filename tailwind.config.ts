import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yel": "#CDA72A",
        "dark-blue": "#34445B",
        "black-sp": "#100F0D",
        //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        //   "gradient-conic":
        //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "11px 22px 8px 4px #2121218c ",
      },
      keyframes: {
        /* start animation animation-up-down */
        "hand-up-down-animate": {
          "0%": {
            transform: "translateY(-30px)",
          },
          "100%": {
            transform: "translateY(30px)",
          },
        },
        "hand-down-up-animate": {
          "0%": {
            transform: "translateY(30px)",
          },
          "100%": {
            transform: "translateY(-30px)",
          },
        },
        /* end animation animation-up-down */
        "moveIcon-animate": {
          "0%": {
            left: "-108rem",
            // transform: "translateX(-33%)",
          },
          "100%": {
            // transform: "translateX(100%)",
            left: "100%",
          },
        },
      },
      animation: {
        "up-down": "hand-up-down-animate 4s ease-in-out infinite alternate",
        "down-up": "hand-down-up-animate 4s ease-in-out infinite alternate",
        "move-icon-bar": "moveIcon-animate 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
