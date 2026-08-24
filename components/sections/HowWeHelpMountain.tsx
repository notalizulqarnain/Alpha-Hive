"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mountain, Check, Sparkles, Compass, Shield, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface Milestone {
  id: string;
  name: string;
  category: "Security" | "Growth" | "Milestone" | "Peak";
  description: string;
  deliverables: string[];
}

export default function HowWeHelpMountain() {
  const milestones: Milestone[] = [
    {
      id: "budgeting",
      name: "Personal Budgeting",
      category: "Security",
      description:
        "Cash-flow forecasting, discretionary spending alignment, and liquidity reserves to build an unshakeable foundation.",
      deliverables: ["Annual Cash-Flow Model", "Emergency Liquidity Strategy", "Tax-Optimised Income Structure"],
    },
    {
      id: "education",
      name: "Education & Family",
      category: "Security",
      description:
        "Comprehensive school and university funding plans combined with critical family health and income protection.",
      deliverables: ["School Fee Trust Structures", "Income Protection & Critical Illness", "Junior ISAs & Gifting Plans"],
    },
    {
      id: "property",
      name: "Property Finance",
      category: "Growth",
      description:
        "Bespoke mortgage advisory and property investment structuring through St. James's Place specialist lenders.",
      deliverables: ["Prime Residential Mortgages", "Buy-to-Let Portfolio Structuring", "Commercial Lending Referrals"],
    },
    {
      id: "wealth",
      name: "Wealth Management",
      category: "Growth",
      description:
        "Discretionary asset allocation with St. James's Place institutional fund managers, balancing global diversification with disciplined risk controls.",
      deliverables: ["Risk Tolerance Calibration", "Tax-Efficient Wrappers (ISA/GIA)", "Active Fund Management"],
    },
    {
      id: "business",
      name: "Business Planning",
      category: "Milestone",
      description:
        "Corporate financial strategy for business owners: shareholder protection, key person insurance, and tax-efficient profit extraction.",
      deliverables: ["Relevant Life Policies", "Director Pension Contributions", "Pre-Exit Wealth Realisation"],
    },
    {
      id: "retirement",
      name: "Retirement Planning",
      category: "Milestone",
      description:
        "Defined contribution pension optimisation, SIPP/SSAS management, and sustainable decumulation modelling.",
      deliverables: ["Lifetime Cashflow Projections", "Pension Consolidations", "IHT Mitigation On Pensions"],
    },
  ];

  const [activeMilestone, setActiveMilestone] = useState<Milestone>(milestones[3]);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Planning Journey"
          title="How We Help"
          subtitle="Financial freedom is not a single decision — it is an ascending journey. We guide every step from your financial foundations to the summit of lasting peace of mind."
        />

        {/* Mountain Infographic Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: The Ascending Visual Tiers */}
          <div className="lg:col-span-6 space-y-4">
            {/* Summit Tier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/40 shadow-subtle flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3eb5e5] text-[#082133] flex items-center justify-center font-bold shadow-md shadow-[#3eb5e5]/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-white">Peace of mind</h4>
                  <p className="text-xs text-slate-300 font-normal">The ultimate financial summit</p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3eb5e5] bg-[#3eb5e5]/10 px-3 py-1 rounded-full border border-[#3eb5e5]/30">
                Peak
              </span>
            </motion.div>

            {/* Level 3: Goal Setting & Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center text-xs font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">Goal setting & tracking</h4>
                  <p className="text-xs text-slate-400 font-normal">Real-time progress clarity</p>
                </div>
              </div>
            </motion.div>

            {/* Level 2: Time Efficiency & Clarity */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center text-xs font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">Time efficiency & Clarity</h4>
                  <p className="text-xs text-slate-400 font-normal">We handle the complexity</p>
                </div>
              </div>
            </motion.div>

            {/* Level 1: Financial Security (Base) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center text-xs font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">Financial Security</h4>
                  <p className="text-xs text-slate-400 font-normal">Protected against uncertainty</p>
                </div>
              </div>
            </motion.div>

            {/* Interactive Milestone Tabs Selector */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                Explore Core Advisory Disciplines:
              </p>
              <div className="flex flex-wrap gap-2">
                {milestones.map((m) => {
                  const isSelected = activeMilestone.id === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveMilestone(m)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#3eb5e5] text-[#082133] shadow-md shadow-[#3eb5e5]/20 font-bold"
                          : "bg-white/5 text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {m.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Active Discipline Detailed Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 shadow-card space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] text-xs font-semibold uppercase tracking-[0.18em] border border-[#3eb5e5]/30">
                    {activeMilestone.category} Milestone
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                    {activeMilestone.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 font-normal mt-3 leading-relaxed">
                    {activeMilestone.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Key Strategic Outputs
                  </h4>
                  {activeMilestone.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                      <div className="w-4 h-4 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] border border-[#3eb5e5]/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
