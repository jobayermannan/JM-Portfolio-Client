/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background and Text Colors
        "primary": "#09112C",       // Light gray-blue background
        "dark": "#FFFFFF",          // Dark gray for primary text
        "mint": " #98FF98",         // Light gray for secondary text
        "blue": "#ADD8E6",      // Dark gray for tertiary text

        // Button Colors
       // Soft blue for primary button background
        "button-primary": "#98FF98",   // White for primary button text
        "button-secondary-bg": "#BDBDBD",   // Slightly darker gray for secondary button background
        "button-secondary-text": "#333333", // Dark gray for secondary button text

        // Tab / Hover Colors
        "tab-active-bg": "#3498DB",    // Soft blue for active tab background
        "tab-hover-bg": "#CCCCCC",     // Light gray for tab hover background
      },
    },
    screens: {
   

   

      lg: {max: '2023px'},
      

      
   

      sm: {max: '1000px'},
      
    }
  },
  plugins: [],
}
