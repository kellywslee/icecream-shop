/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        banner: `url('./public/images/banner-2.png')`,
      },
    },
  },
  plugins: [],
};
