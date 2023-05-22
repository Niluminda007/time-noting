/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#222629",
        space_white: "#EEEEEE",
        grey: "#474B4F",
        light_blue: "#00a3e2",
      },
    },
  },
  plugins: [],
};
