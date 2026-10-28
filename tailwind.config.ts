import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        char: "#151515",
        ember: { DEFAULT: "#D96B36", deep: "#B04A1B" },
        cream: "#F4EFE6",
        sand: "#D9C9B5",
        ash: "#A5A5A5",
        bronze: "#8C6A4A",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Manrope Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.02) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.08) translate3d(-1.2%,0,0)" },
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(4%,-3%,0)" },
        },
        scrollline: {
          "0%": { transform: "translateY(-100%)" },
          "60%,100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        kenburns: "kenburns 28s ease-in-out infinite alternate",
        drift: "drift 26s ease-in-out infinite",
        scrollline: "scrollline 2.4s cubic-bezier(.7,0,.3,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
