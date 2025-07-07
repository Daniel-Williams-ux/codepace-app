/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      colors: {
        "brand-primary": "#1D4ED8", // blue-700
        "brand-primary-hover": "#1E40AF", // blue-800
        "brand-accent": "#06B6D4", // cyan-500
        "brand-accent-hover": "#0891B2", // cyan-600
        "brand-cta": "#F59E0B", // amber-500
        "brand-cta-hover": "#D97706", // amber-600
        "brand-bg": "#F9FAFB",
        "brand-text": "#0F172A",
      },
    },
  },
  plugins: [],
};
export default config;