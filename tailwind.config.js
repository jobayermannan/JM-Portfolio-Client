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
        "primary": "#e0e7ff",       // Light gray-blue background
        "dark": "#1e1b4b",          // Dark gray for primary text
        "light": "#4B5563",         // Light gray for secondary text
        "tertiary": "#292524",      // Dark gray for tertiary text

        // Button Colors
       // Soft blue for primary button background
        "button-primary-text": "#FFFFFF",   // White for primary button text
        "button-secondary-bg": "#BDBDBD",   // Slightly darker gray for secondary button background
        "button-secondary-text": "#333333", // Dark gray for secondary button text

        // Tab / Hover Colors
        "tab-active-bg": "#3498DB",    // Soft blue for active tab background
        "tab-hover-bg": "#CCCCCC",     // Light gray for tab hover background
      },
    },
  },
  plugins: [],
}
