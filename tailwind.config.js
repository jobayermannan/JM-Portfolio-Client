/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#38BDF8',
        text: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    screens: {
   

   

      lg: {max: '2023px'},
      

      
   

      sm: {max: '1000px'},
      
    }
  },
  plugins: [],
}
