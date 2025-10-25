/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#f55c03", // Orange – represents energy/fire
        primaryText: "#3c4756", // Dark gray – main text color
        formField: "#f6f5f5", // Light background for form fields
        formText: "#d0d0d3", // Muted text for form placeholders
        secondaryText: "#b2b3b6", // Secondary text
        iconBg: "#f7f5f4", // Background for icons or cards
      },
    },
  },
  plugins: [],
};
