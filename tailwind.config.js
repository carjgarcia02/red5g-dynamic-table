/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      openSans: "Open Sans",
      lato: "Lato",
    },
    extend: {
      boxShadow: {
        customShadow: "0 0 16px #00000029",
        tableHeaderShadow: "0px 3px 16px #D1E8FF74",
        navShadow: "0px 3px 16px #AAAAAA4D",
      },
    },
  },
  plugins: [],
};
