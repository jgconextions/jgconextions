import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#0a1a2e", // Azul oscuro del branding
          primary: "#1e3a5f", // Azul medio
          light: "#4a9eff", // Azul claro
          accent: "#60a5fa", // Azul claro brillante
        },
      },
    },
  },
  plugins: [],
};
export default config;

