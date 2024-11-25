/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blue':"rgba(227, 245, 255, 1)",
        'light':"rgba(247, 249, 251, 1)",
        'purple':"rgba(229, 236, 246, 1)",
        primary:'rgba(var(--color-primary--blue), 1)',
        light:'rgba(var(--color-primary-light), 1)',
        purple:'rgba(var(--color-purple), 1)'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities={
        ".heading":{
          fontWeight:600,
          fontSize:'24px'
        },
        ".sub-heading":{
          fontWeight:600,
          fontSize:'14px'
        },
        ".content-body":{
          fontWeight:400,
          fontSize:'14px'
        },
        ".content":{
          fontWeight:400,
          fontSize:'12px'
        },
      };

      addUtilities(newUtilities, ["responsive","hover"])
    },
  ],
  darkMode:"selector",
}

