import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greybg: "#F9FAFB",
        "blue-primary": "#3672AB",
        // 'primary':'#616162',
        // 'secondary':'#D9D9D9',
        // 'userbg':'#F2F2F2',
      },
      boxShadow: {
        card: "0 0 3px 0 rgba(0, 0, 0, 0.3)",
        button: "0 0 4px 1px rgba(0, 0, 0, 0.25)",
        element: "0 0 4px 3px rgba(0, 0, 0, 0.25)",
        sidebar: "4px 4px 82px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
