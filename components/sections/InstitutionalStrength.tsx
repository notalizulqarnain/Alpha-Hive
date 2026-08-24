"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Star } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";

export default function InstitutionalStrength() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent text-white border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative Description */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="The St. James's Place Partnership"
              title="Personal advice. Institutional strength."
              align="left"
              dark={true}
              className="mb-6"
            />

            <div className="space-y-4 text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              <p>
                Experience the best of both worlds. At Compound Wealth Planning, you will always deal with specialists who know you, understand your specific goals, and genuinely care about your family's future.
              </p>
              <p>
                Behind every recommendation is the expertise, institutional research, and specialist support of the UK's leading wealth management firm. It is the personal relationship you value, backed by the strength and confidence you deserve.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/[0.08] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold tracking-[0.15em] text-gold-400 block">
                    Senior Partner Practice
                  </span>
                  <span className="font-sans font-bold text-sm text-white tracking-wide">
                    St. James's Place Wealth Management
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: SJP in numbers live counters */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/5 border border-white/[0.08] shadow-card-dark space-y-6 sm:space-y-8">
              <div className="border-b border-white/[0.08] pb-4">
                <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white">
                  St. James's Place in numbers
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
                {/* Stat 1 */}
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 block">
                    The UK's
                  </span>
                  <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3eb5e5]">
                    #<AnimatedCounter to={1} />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-snug">
                    wealth management company by funds under management
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 block">
                    Looking After
                  </span>
                  <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                    £<AnimatedCounter to={220} />
                    <span className="text-xl sm:text-2xl text-[#3eb5e5]">bn</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-snug">
                    worth of client assets under stewardship
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 block">
                    With a Rating of
                  </span>
                  <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#3eb5e5] flex items-baseline gap-1">
                    <AnimatedCounter to={4.9} decimals={2} />
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#3eb5e5] text-[#3eb5e5]" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-snug">
                    out of 5 on VouchedFor across more than 42,000 reviews
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-[11px] sm:text-xs text-slate-400 font-normal">
                Information correct as at December 2023. St. James's Place plc is a FTSE-listed wealth management company.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
