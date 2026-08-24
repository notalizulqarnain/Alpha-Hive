/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#082133", 
          900: "#13405d", // Primary teal from footer image
          850: "#174a6b", 
          800: "#1b5275", 
          700: "#21648d",
          600: "#2a77a6",
        },
        gold: {
          50: "#e8fafe",
          100: "#cbf0fd",
          200: "#a1e5fa",
          300: "#60c5ef",
          400: "#3eb5e5", // Cyan arrow color from logo
          500: "#2da4d6",
          600: "#2186b5",
          700: "#1a6b94",
          800: "#155778",
        },
        compound: {
          blue: "#3eb5e5",
          cyan: "#3eb5e5",
          light: "#f0f9ff",
          dark: "#13405d",
        },
        slate: {
          850: "#172033",
        },
        alabaster: "#fcfbf9",
        cream: "#f8f6f0",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02)",
        "card": "0 4px 20px -2px rgba(6, 18, 36, 0.04), 0 2px 6px -1px rgba(6, 18, 36, 0.02)",
        "card-hover": "0 12px 32px -4px rgba(6, 18, 36, 0.08), 0 4px 12px -2px rgba(6, 18, 36, 0.03)",
        "card-dark": "0 8px 30px -4px rgba(0, 0, 0, 0.4)",
        "modal": "0 24px 48px -12px rgba(6, 18, 36, 0.18)",
        "gold-subtle": "0 4px 20px -2px rgba(197, 168, 128, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
