import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",       // ✅ App Router
    "./components/**/*.{ts,tsx}", 
    "./pages/**/*.{ts,tsx}",     // ✅ Just in case we use pages dir later
  ],
  darkMode: "class",            // ✅ Enables manual dark mode (we’re using dark only)
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
