/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./files/js//.js",
    "./files/svg/**/.html",
    "./class//*.{html,js,php}",
    "./include//*.{html,js,php}",
    "./index.html",
  ],
  theme: {
    screens: {
      's': '320px',
      'ss': '360px',
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '1920px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        PrimRed: '#FF6A49',
        Primblue: {
          300: "#DDEFFF",
          500: "#2B99FF",
          800: "#141E4F",
        },
        OddyNeutral: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#E5E5E5",
          400: "#D4D4D4",
          500: "#A3A3A3",
          600: "#737373",
          700: "#525252",
          800: "#404040",
          900: "#262626",
          1000: "#171717",
        }
      },
    },
  },
  plugins: [],
}