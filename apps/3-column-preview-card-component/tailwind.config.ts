import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "lexend-deca": ["var(--font-lexend-deca)"],
      "big-shoulders": ["var(--font-big-shoulders)"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
