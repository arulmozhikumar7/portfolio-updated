/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: ["lofi", "light", "dark", "black", "night", "luxury", "retro"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
