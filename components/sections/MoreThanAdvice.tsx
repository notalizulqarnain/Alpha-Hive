"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Award, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function MoreThanAdvice() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionHeader
              badge="Our Philosophy"
              title="More than Financial Advice"
              align="left"
              className="mb-6 sm:mb-8"
            />

            <div className="space-y-4 text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              <p>
                At Compound Wealth Planning, we take responsibility for making your financial life simpler, clearer, and more aligned with your aspirations. We go beyond advice — working with you to proactively plan, provide technical expertise, and implement the strategies we agree on.
              </p>
              <p>
                Through personalised financial coaching and disciplined wealth management, we help ensure that every decision moves you closer to the life and legacy you want to build.
              </p>
            </div>

            {/* Founder Highlights Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/[0.08] shadow-subtle space-y-3">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-[0.15em]">
                <Award className="w-4 h-4 text-gold-400" />
                <span>Founded by Award-Winning Adviser Kanishk Swarup</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Highly Commended Financial Adviser of the Year at the <em>Financial Times Diversity Awards 2023</em> — with 10 years as a financial adviser and another decade as an Equity Derivatives trader at global investment banks including <strong>Credit Suisse, JP Morgan, and BNP Paribas</strong>.
              </p>
              <p className="text-xs text-slate-400 font-normal">
                We specialise in guiding high-net-worth, time-scarce individuals seeking financial planning and advice to protect and grow their family's wealth.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/why-work-with-us"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:text-gold-400 transition-colors group cursor-pointer"
              >
                <span>Read Kanishk's Founder Story</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Family Lifestyle Visual & Floating Stat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-white/[0.08] aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200"
                alt="Family enjoying financial freedom together in nature"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphic Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="absolute -bottom-6 -left-6 sm:-left-8 p-5 sm:p-6 rounded-3xl bg-[#111111] border border-white/[0.08] shadow-card max-w-xs sm:max-w-sm"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/[0.08] flex items-center justify-center text-white font-sans font-bold text-xl shrink-0">
                  20+
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Years Financial Expertise
                  </h4>
                  <p className="text-xs text-slate-400 font-normal mt-0.5 leading-snug">
                    Combining institutional investment banking with bespoke private advisory.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
