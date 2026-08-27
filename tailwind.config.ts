import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oc: {
          bg: "rgb(var(--oc-bg) / <alpha-value>)",
          surface: "rgb(var(--oc-surface) / <alpha-value>)",
          header: "rgb(var(--oc-header) / <alpha-value>)",
          interactive: "rgb(var(--oc-interactive) / 0.08)",
          text: "rgb(var(--oc-text) / <alpha-value>)",
          muted: "rgb(var(--oc-muted) / <alpha-value>)",
          coral: "rgb(var(--oc-coral) / <alpha-value>)",
          border: "rgb(var(--oc-border) / 0.18)",
        },
      },
      maxWidth: {
        "oc-content": "1200px",
      },
      spacing: {
        header: "3.25rem",
        section: "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
