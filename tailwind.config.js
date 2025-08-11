/** @type {import('tailwindcss').Config} */
export default {
    content: ["./views/**/*.ejs", "./public/js/**/*.js"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
          heading: ["Cinzel", "serif"]
        },
        colors: {
          smv: {
            red: "#e64040",
            dark: "#0f0f10"
          }
        },
        boxShadow: {
          soft: "0 10px 30px rgba(0,0,0,0.12)"
        }
      }
    },
    plugins: []
  };
  