"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import PlanBuilderModal from "@/components/ui/PlanBuilderModal";

export default function WhoWeHelp() {
  const [modalOpen, setModalOpen] = useState(false);

  const stageOneItems = [
    "Budgeting & Cash-flow management",
    "Family Protection & Specialist Insurance",
    "Mortgage & Property Finance",
    "Education Fee Planning",
    "Reducing tax burden",
    "Reducing Risk & increasing potential investment returns",
  ];

  const stageTwoItems = [
    "Generating income in retirement",
    "Investments & Risk Management",
    "Reducing Inheritance Tax (IHT)",
    "Later life planning",
    "Legacy and Inter-generational Wealth Planning",
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tailored Advisory"
          title="Who We Help"
          subtitle="Whether you are rapidly accelerating your wealth or safeguarding a multi-generational legacy, our strategies are meticulously structured around your life stage."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1: Accumulating Wealth (Light Surface) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 sm:p-8 md:p-10 bg-[#111111] border border-white/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/20 text-[#3eb5e5] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
                  Stage One
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                  Clients Accumulating Wealth
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal mt-2 leading-relaxed">
                  Senior executives and business owners in their prime — focused on scaling careers, raising families, tax efficiency, and rapid capital acceleration.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-2.5 sm:space-y-3">
                {stageOneItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 sm:gap-3 text-slate-300 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#3eb5e5] shrink-0 mt-0.5" />
                    <span className="font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 border-t border-white/[0.08]">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 px-4 sm:px-6 rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3eb5e5]/20 cursor-pointer"
              >
                <span>Plan Your Wealth Accumulation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Accumulated Wealth (Dark Obsidian Surface) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-6 sm:p-8 md:p-10 bg-[#161616] text-white border border-white/[0.08] shadow-card-dark hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#3eb5e5]/10 text-[#3eb5e5] border border-[#3eb5e5]/20 flex items-center justify-center">
                  <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
                  Stage Two
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                  Clients with Accumulated Wealth
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal mt-2 leading-relaxed">
                  Individuals preparing for retirement, managing multi-generational wealth, and planning a meaningful legacy with the capital they have built.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-2.5 sm:space-y-3">
                {stageTwoItems.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 sm:gap-3 text-slate-300 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#3eb5e5] shrink-0 mt-0.5" />
                    <span className="font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 border-t border-white/[0.08]">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 px-4 sm:px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
              >
                <span>Structure Your Legacy & Retirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <PlanBuilderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
