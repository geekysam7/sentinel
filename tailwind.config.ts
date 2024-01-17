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
        success: "#2d6f41",
        danger: "#9C2B41",
        // main bg
        mainBg: "#090a10",
        // card
        bgCardPrimary: "#131721",
        bgCardSecondary: "#0E111B",
        bgCardTertiary: "#221E27",
        bgCardSidebar: "#161723",
        bgCardSidebarItem: "#11131c",
        // list
        bgListPrimary: "#10121B",
        // theme
        primary: "#7D99E1",
        secondary: "#4371EB",
        tertiary: "#1E5FFF",
        // text
        textPrimary: "#FFFFFF",
        textSecondary: "#737478",
        textTertiary: "#7D99E1",
      },
    },
  },
  plugins: [],
};
export default config;
