/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
	      logo: "url('img/logo.png')",
	    },
      fontFamily: {
        san: ['Barlow', 'sans-serif']
      },
      colors: {
        primary: "#00040f",
        "primary-200": "#b4d3fe",
        "primary-400": "#5098fc",
        "primary-500": "#03449d",
        "primary-600": "#034caf",
        "primary-700": "#02367d",
        "primary-800": "#01214b",
        secondary: "#00f6ff",
        links: "#61dafb",
        white: "#fff",
        blacks: "rgb(0, 0, 0)",
        header: "rgba(9, 151, 124, 0.1)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        whiteRGB: "rgba(255, 255, 255, 0.9)",
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
