import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, Geist } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
      className={cn("scroll-smooth", "antialiased", outfit.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col relative text-slate-300 font-sans selection:bg-[#3eb5e5] selection:text-black bg-[#0a0a0a] overflow-x-hidden">
        {/* Global Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow z-10 relative pt-16 sm:pt-20 lg:pt-24 overflow-x-hidden">{children}</main>

        {/* Regulatory Footer */}
        <Footer />
      </body>
    </html>
  );
}
