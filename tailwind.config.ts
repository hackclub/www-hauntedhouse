import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: { default: "#EB6424", darker: "#CC5600" },
        beige: "#FEFAE0",
        blackish: "#1E1E1E",
        strongblue: "#248BEB",
        stickies: {
          // 0: "#e57373",
          // 1: "#9575cd",
          // 2: "#4fc3f7",
          // 3: "#81c784",
          // 4: "#fff176",
          // 5: "#ff8a65",
          // 6: "#f06292",
          // 7: "#7986cb",
          0: "#FFF3A3",
          1: "#FFF3A3",
          2: "#FFF3A3",
          3: "#FFF3A3",
          4: "#fff176",
          5: "#ff8a65",
          6: "#f06292",
          7: "#7986cb",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require("tailwindcss-fluid-type"),
  ],
};
export default config;
