/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['"Dosis"', '"sans-serif"']
      },
      colors: {
        "bg-web": "#312E2B",
        "bg-sidebar": "#272522",
        "bg-sidebar-hover": "#22201F",
        "green-button": "#7fa650",
        "green-button-hover": "#95BB4A",
        "black-button": "#3d3b39",
        "black-button-hover": "#4A4846",
        "gray-text": "#c8c8c7",
      },
      fontSize: {
        sidebar_icon: ['24px', '36px'],
        sidebar_font: ['18px', '24px'],
      },
      height: {
        img_bigsize: '496px',
      },
      width: {
        img_bigsize: '496px',
      }
    },
  },
  plugins: [],
};
