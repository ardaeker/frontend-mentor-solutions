import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      fraunces: [
        "var(--font-fraunces)",
        {
          fontFeatureSettings: "'clig' off, 'liga' off",
        },
      ],
      montserrat: [
        "var(--font-montserrat)",
        {
          fontFeatureSettings: "'clig' off, 'liga' off",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
