import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["12px", { lineHeight: "1.5" }],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
} satisfies Config;
