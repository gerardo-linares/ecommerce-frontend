/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFCDF",
        secondary: "#CFDC9459",
        color_button: "#ee13cf",
        hover_button: "#B6D8F4",
        focus_button: "#D587AF36",
      },
      fontFamily: {
        body: ["'Josefin Sans', sans-serif;"],
        poppins: ["'Poppins', sans-serif;"],
      },
      boxShadow: {
        "3xl": "0 35px 50px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
