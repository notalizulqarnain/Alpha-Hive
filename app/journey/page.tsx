import React from "react";
import FourStepProcess from "@/components/sections/FourStepProcess";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function JourneyPage() {
  return (
    <div className="py-8 sm:py-16 md:py-20 space-y-16 sm:space-y-24 md:space-y-28 bg-[#0a0a0a]">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.18em] border border-[#3eb5e5]/30 mb-4 sm:mb-6 shadow-subtle">
          <span>Our Core Mission</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-sans font-bold text-white leading-tight mb-4 sm:mb-6">
          Taking Responsibility For Your Financial Freedom
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 font-normal leading-relaxed">
          We exist because Financial Planning is a critical pillar that every individual and family needs to focus on proactively and continuously. However, most of us struggle to find the time for it. We take this responsibility on behalf of our clients and help them make smarter financial decisions to build lasting independence.
        </p>
      </section>

      <FourStepProcess />
      <WhoWeHelp />
      <TestimonialsGrid />
      <ContactSection />
    </div>
  );
}
