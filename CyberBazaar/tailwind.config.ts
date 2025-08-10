import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        "cyber-cyan": "#00ffff",
        "cyber-pink": "#ff0080",
        "cyber-purple": "#8000ff",
        "cyber-yellow": "#ffff00",
        "cyber-red": "#ff0040",
        "cyber-dark": "#0a0a0a",
        "cyber-darker": "#050505",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        orbitron: ["Orbitron", "monospace"],
        tech: ["Share Tech Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-2px, 2px)" },
          "20%": { transform: "translate(-2px, -2px)" },
          "30%": { transform: "translate(2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "50%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-2px, 2px)" },
          "70%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(-2px, -2px)" },
          "90%": { transform: "translate(2px, 2px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "pulse-neon": {
          "0%, 100%": { 
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor"
          },
          "50%": { 
            boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor"
          },
        },
        "slide-glitch": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glitch: "glitch 2s infinite linear alternate-reverse",
        flicker: "flicker 1.5s infinite linear",
        "pulse-neon": "pulse-neon 2s infinite",
        "slide-glitch": "slide-glitch 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
