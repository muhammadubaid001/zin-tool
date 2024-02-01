import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#4865E2',
        'text-dark': '#000',
        'text-default': '#4b4b4b'
      },
      fontFamily: {
        HarmonyL: ["Harmony-Light"],
        Harmony: ["Harmony-Regular"],
        HarmonyB: ["Harmony-Bold"],
        HarmonyBl: ["Harmony-Black"],
        HarmonyM: ["Harmony-Medium"],
      },
    },
  },
  plugins: [],
};
export default config;
