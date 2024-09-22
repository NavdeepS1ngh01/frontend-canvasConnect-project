/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include the app directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include the pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include the components directory
    // Add other directories if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
