"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import PlanBuilderModal from "@/components/ui/PlanBuilderModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why Work With Us", href: "/why-work-with-us" },
    { name: "Your Journey With Us", href: "/journey" },
    { name: "In The News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-subtle"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center p-2 text-white">
              <svg viewBox="0 0 32 32" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
                <circle cx="16" cy="16" r="13" stroke="#ffffff" strokeDasharray="60 30" />
                <path d="M16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23C19.866 23 23 19.866 23 16" stroke="#3eb5e5" />
                <circle cx="16" cy="16" r="3.5" fill="#ffffff" />
              </svg>
            </div>

              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg tracking-tight text-white leading-none">
                  COMPOUND
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-slate-400 mt-1">
                  Wealth Planning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-subtle">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/[0.05]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Trigger */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ y: 0, scale: 0.98 }}
                className="relative px-5 py-2.5 rounded-full bg-gold-400 hover:brightness-110 text-black font-sans text-xs font-semibold tracking-wide transition-all duration-300 shadow-subtle hover:shadow-card flex items-center gap-2 group cursor-pointer"
              >
                <span>Let's Build Your Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

            {/* Mobile Menu & Quick CTA */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-gold-400 text-black text-xs font-semibold flex items-center gap-1.5 shadow-subtle cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Plan</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-2xl bg-white/5 border border-white/10 text-white cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.06] px-6 py-6 space-y-4 shadow-modal"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-gold-400 hover:brightness-110 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-subtle transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Let's Build Your Plan</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Plan Builder Questionnaire Modal */}
      <PlanBuilderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
