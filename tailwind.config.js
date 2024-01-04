/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
