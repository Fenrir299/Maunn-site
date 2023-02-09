/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "maunn-prune": "#982a64",
      },
      backdropBlur: {
        blur: "blur(8px)",
      },
    },
  },
  plugins: [],
};
