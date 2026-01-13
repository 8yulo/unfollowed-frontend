import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Semantic theme colors using CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-subtle": "var(--surface-subtle)",
        "surface-muted": "var(--surface-muted)",
        border: "var(--border)",
        "border-subtle": "var(--border-subtle)",
        "border-divider": "var(--border-divider)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "text-muted": "var(--text-muted)",
        "text-inverse": "var(--text-inverse)",
        "interactive-bg": "var(--interactive-bg)",
        "interactive-bg-hover": "var(--interactive-bg-hover)",
        "interactive-border": "var(--interactive-border)",
        "input-bg": "var(--input-bg)",
        "input-border": "var(--input-border)",
        "input-border-focus": "var(--input-border-focus)",
        "badge-bg": "var(--badge-bg)",
        "badge-text": "var(--badge-text)",
        "status-success": "var(--status-success)",
        "status-inactive": "var(--status-inactive)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
} satisfies Config;
