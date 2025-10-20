/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Deep navy
        accent: '#0066FF',  // Electric blue
        success: '#10B981', // Emerald
        warning: '#F59E0B', // Amber
        error: '#EF4444',   // Red
      },
    },
  },
  plugins: [],
}
