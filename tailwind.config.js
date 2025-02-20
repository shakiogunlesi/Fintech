/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sbg: "url('src/components/images/signupimage.jpg')",
      },
      colors: {
        purple: "#805DB3",
        slade: "#F4F4F3",
      },
    },
    fontFamily: {
      font1: ["inter", "sans-serif"],
      libre: ["Libre Baskerville ", "serif"],
      nanum: ["Nanum Gothic", "sans-serif"],
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
