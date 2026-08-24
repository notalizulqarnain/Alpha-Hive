"use client";

import React from "react";
import { motion } from "motion/react";
import { Users, Search, Compass, Repeat } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FourStepProcess() {
  const steps = [
    {
      number: "01",
      title: "First Meeting",
      subtitle: "Let's explore what matters most to you",
      description:
        "We begin with a thorough, obligation-free conversation about where you are today and where you want to be tomorrow. We learn about your lifestyle, aspirations, and family values.",
      icon: Users,
    },
    {
      number: "02",
      title: "Financial Review",
      subtitle: "Understanding your current position",
      description:
        "We conduct a granular analysis of your existing pensions, investments, mortgages, protection policies, and tax liabilities to identify opportunities and inefficiencies.",
      icon: Search,
    },
    {
      number: "03",
      title: "Personalised Strategy",
      subtitle: "Clear recommendations for your goals",
      description:
        "We present a bespoke financial roadmap tailored specifically to your timeline, balancing discretionary St. James's Place asset management with tax-efficient wrappers.",
      icon: Compass,
    },
    {
      number: "04",
      title: "Ongoing Partnership",
      subtitle: "Adapting your plan as life changes",
      description:
        "Wealth planning is dynamic. We meet regularly for disciplined reviews, tax-year end optimisations, and continuous adjustments as your life and legislation evolve.",
      icon: Repeat,
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Structured Roadmap"
          title="Your 4-Step Journey With Us"
          subtitle="From our very first conversation to long-term stewardship, our advisory process is clear, transparent, and structured around you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#3eb5e5]/40 hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-bold text-3xl text-[#3eb5e5]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/30 flex items-center justify-center text-[#3eb5e5]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-xl text-white group-hover:text-[#3eb5e5] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#3eb5e5] uppercase tracking-[0.12em] mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 font-normal leading-relaxed pt-2 border-t border-white/10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
