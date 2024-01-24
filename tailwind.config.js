/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        'primary': '#ffffff',
        'secondary':'#faf5f2',
        'light-bg': 'rgba(255, 255, 255, .5)',
        'light': 'rgba(255, 255, 255, .8)',
        'light-orange': 'rgba(247, 148, 137, 1)',
        'faint-orange': '#FADCD9',
        'faded':'#FEFCFB',
        'secondary-black':'#000000',
        'primary-black':'#4B4B4B',
      },
      screens: {
        'sb': '195px',
        'mb':'200px',
        'cb':'280px',
        'db':'320px',
        'eb':'377px',
        'fb':'420px',
        'gb':'440px',
        'hb':'500px',
        'jb':'550px',
        'kb':'580px',
        'nb':'620px',
        'qb':'642px',
        'rb':'700px',

      }
    },
  },
  plugins: [],
}
