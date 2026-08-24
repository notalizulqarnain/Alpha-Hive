import fs from "fs";
import path from "path";

// 1. Update tailwind.config.mjs
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
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
          950: "#061224", // Deepest midnight obsidian navy
          900: "#0a1b36", // Primary rich navy surface
          850: "#0f2342", // Elevated dark card surface
          800: "#16315c", // Secondary navy
          700: "#1e427b",
          600: "#2a59a1",
        },
        gold: {
          50: "#fbf8f3",
          100: "#f6efe4",
          200: "#ebdcc9",
          300: "#dbc2a4",
          400: "#c5a880", // Primary refined champagne gold
          500: "#b39266", // Rich warm gold
          600: "#96774d", // Deep burnished gold
          700: "#785c36",
          800: "#5c4427",
        },
        compound: {
          blue: "#0284c7",
          cyan: "#0ea5e9",
          light: "#f0f9ff",
          dark: "#0369a1",
        },
        slate: {
          850: "#172033",
        },
        alabaster: "#fcfbf9",
        cream: "#f8f6f0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "luxury": "0 20px 40px -15px rgba(6, 18, 36, 0.07), 0 0 1px 1px rgba(197, 168, 128, 0.15)",
        "luxury-dark": "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(197, 168, 128, 0.2)",
        "gold-glow": "0 0 30px -5px rgba(197, 168, 128, 0.35)",
        "blue-glow": "0 0 30px -5px rgba(2, 132, 199, 0.3)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
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
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
`;

fs.writeFileSync("tailwind.config.mjs", tailwindConfig, "utf8");

// 2. Update styles/globals.css
const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary-navy: #061224;
    --accent-gold: #c5a880;
    --accent-cyan: #0284c7;
    --bg-alabaster: #fcfbf9;
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #fbfaf8;
    color: #1e293b;
    font-family: var(--font-sans), 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading), 'Plus Jakarta Sans', sans-serif;
    text-wrap: balance;
    letter-spacing: -0.025em;
  }

  p {
    text-wrap: pretty;
  }

  ::selection {
    background-color: rgba(197, 168, 128, 0.25);
    color: #061224;
  }
}

/* Luxury Glassmorphism & Surface Utilities */
.glass-panel {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.glass-panel-dark {
  background: rgba(6, 18, 36, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-panel-gold {
  background: rgba(251, 248, 243, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(197, 168, 128, 0.25);
}

/* Subtle Gradient Text Effects */
.gold-gradient-text {
  background: linear-gradient(135deg, #dfc8a5 0%, #c5a880 50%, #96774d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navy-gradient-text {
  background: linear-gradient(135deg, #061224 0%, #1e427b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Custom Luxury Scrollbar */
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #f8fafc;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
`;

fs.writeFileSync("styles/globals.css", globalsCss, "utf8");

// 3. Update app/layout.tsx
const layoutTsx = `import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WealthCanvas from "@/components/3d/WealthCanvas";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Compound Wealth Planning | Senior Partner Practice of St. James's Place",
  description:
    "Clear Financial Planning for a Confident Tomorrow. Senior Partner Practice of St. James's Place Wealth Management based in Knightsbridge, London.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={\`\${plusJakarta.variable} \${outfit.variable} scroll-smooth antialiased\`}
    >
      <body className="min-h-screen flex flex-col relative text-slate-800 font-sans selection:bg-gold-200 selection:text-navy-950 bg-[#fbfaf8]">
        {/* Ambient 3D Three.js Interactive Canvas */}
        <WealthCanvas />

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow z-10 relative pt-20 sm:pt-24">{children}</main>

        {/* Regulatory Footer */}
        <Footer />
      </body>
    </html>
  );
}
`;

fs.writeFileSync("app/layout.tsx", layoutTsx, "utf8");

// 4. Clean all occurrences of font-serif in all tsx files
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".next") {
        processDirectory(fullPath);
      }
    } else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))) {
      let content = fs.readFileSync(fullPath, "utf8");
      if (content.includes("font-serif")) {
        content = content.replace(/font-serif/g, "font-sans");
        fs.writeFileSync(fullPath, content, "utf8");
        console.log("Updated font classes in:", fullPath);
      }
    }
  }
}

processDirectory("components");
processDirectory("app");

console.log("All fonts updated to modern clean sans-serif typography successfully!");
