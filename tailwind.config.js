/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        kanit: ["Kanit"],
        acme: ["Acme"],
        open: ["Open Sans"],
        pacifico: ["Pacifico"],
        indie: ["Indie Flower"],
      },
      colors: {
        red: "#B70404",
      },
      backgroundImage: {
        hero: "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
