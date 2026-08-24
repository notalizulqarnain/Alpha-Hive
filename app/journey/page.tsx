import React from "react";
import FourStepProcess from "@/components/sections/FourStepProcess";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function JourneyPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28 bg-[#0a0a0a]">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] text-xs font-semibold uppercase tracking-[0.18em] border border-[#3eb5e5]/30 mb-6 shadow-subtle">
          <span>Our Core Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-bold text-white leading-tight mb-8">
          Taking Responsibility For Your Financial Freedom
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-normal leading-relaxed">
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
