/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      utilities:{
      '.text-password':{
       fontFamily:'monospace',
       WebkitTextSecurity:'disc',
       MozTextSecurity:'disc',
       msTextSecurity:'disc',
       textSecurity:'disc',
      },
      },
    },
  },
  plugins: [],
}

