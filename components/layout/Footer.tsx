"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Shield, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/[0.06] pt-12 sm:pt-20 pb-8 sm:pb-12 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Col 1: Brand & Regulatory Status */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <Link href="/" className="flex items-center gap-3">
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

            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Compound Wealth Planning is an Appointed Representative of and represents only St. James's Place Wealth Management plc (which is authorised and regulated by the Financial Conduct Authority) for the purpose of advising solely on the Group's wealth management products and services, more details of which are set out on the Group's website{" "}
              <a
                href="https://www.sjp.co.uk/products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3eb5e5] hover:underline"
              >
                www.sjp.co.uk/products
              </a>
              .
            </p>

            <p className="text-xs text-slate-500 font-normal">
              The 'St. James's Place Partnership' and the titles 'Partner' and 'Partner Practice' are marketing terms used to describe St. James's Place representatives.
            </p>

            {/* Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/compound-wealth-planning/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#3eb5e5]/40 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="mailto:contact@compoundwealth.co.uk"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#3eb5e5]/40 transition-all cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://www.vouchedfor.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#3eb5e5]/40 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-[#3eb5e5]" />
                <span>VouchedFor</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.15em] text-[#3eb5e5]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <Link href="/why-work-with-us" className="hover:text-[#3eb5e5] transition-colors">
                  Why Work With Us
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-[#3eb5e5] transition-colors">
                  Your Journey With Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#3eb5e5] transition-colors">
                  In The News & Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#3eb5e5] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#3eb5e5] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#3eb5e5] transition-colors">
                  Site Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Badge & Office */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 shadow-card-dark space-y-4">
              <span className="text-xs uppercase font-semibold tracking-[0.15em] text-[#3eb5e5] block">
                Senior Partner Practice
              </span>
              <div className="font-sans font-bold text-lg sm:text-xl text-white">
                St. James's Place
                <span className="block text-xs font-sans font-normal text-slate-400 tracking-wider mt-0.5">
                  Wealth Management
                </span>
              </div>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                116 Brompton Road, Knightsbridge, London, SW3 1JJ
              </p>
              <p className="text-xs text-[#3eb5e5] font-semibold">
                +44 20 7390 0837
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-normal gap-3 text-center sm:text-left">
          <p>© {currentYear} Compound Wealth Planning. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </Link>
            <span>Knightsbridge, London SW3 1JJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
