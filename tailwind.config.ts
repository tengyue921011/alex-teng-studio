import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#efede6",
        ash: "#d7d1c4",
        taupe: "#9d9183",
        clay: "#b27a63",
        sage: "#879083",
        charcoal: "#242320",
        soot: "#12110f"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"]
      },
      boxShadow: {
        soft: "0 34px 100px rgb(61 54 45 / 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
