"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";
import SectionHeader from "../ui/SectionHeader";

export default function TestimonialsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Investment", "Mortgage", "Tax & Planning", "Retirement"];

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Feedback"
          title="What Our Clients Say"
          subtitle="We believe in creating an environment of transparency and authenticity. That's why we are sharing what our clients have said about us on VouchedFor, an independent platform that collects genuine client feedback without any moderation from us."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center">
          <a
            href="https://www.vouchedfor.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-[#3eb5e5]/40 transition-all shadow-subtle group cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#3eb5e5]" />
            <span>View all client reviews directly on VouchedFor</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#3eb5e5] text-[#082133] shadow-md shadow-[#3eb5e5]/20 font-bold"
                  : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredTestimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#3eb5e5] fill-[#3eb5e5]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm leading-relaxed font-normal italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-400 font-normal mt-0.5">
                      Advised by <span className="text-[#3eb5e5] font-semibold">{t.adviser}</span>
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] border border-[#3eb5e5]/30 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12 text-xs text-slate-500 italic max-w-2xl mx-auto font-normal">
          The reviews shown above have been gathered and displayed directly through VouchedFor and have not been verified by SJP.
        </div>
      </div>
    </section>
  );
}
