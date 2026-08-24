"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, TrendingUp, Landmark, Check, ArrowRight, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { teamMembers } from "@/data/teamData";

interface PlanBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanBuilderModal({ isOpen, onClose }: PlanBuilderModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [wealthStage, setWealthStage] = useState<"accumulating" | "accumulated" | null>(null);
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adviser: "any",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const focusOptions = [
    "Retirement & Decumulation",
    "Tax Minimisation & Wrappers",
    "Mortgages & Specialist Finance",
    "Inheritance Tax (IHT) Planning",
    "Family Health & Protection",
    "Business Owner Wealth Structuring",
  ];

  const handleToggleFocus = (item: string) => {
    if (selectedFocus.includes(item)) {
      setSelectedFocus(selectedFocus.filter((f) => f !== item));
    } else {
      setSelectedFocus([...selectedFocus, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#c5a880", "#0284c7", "#061224", "#dfc8a5"],
      });
    }, 600);
  };

  const resetModal = () => {
    setStep(1);
    setWealthStage(null);
    setSelectedFocus([]);
    setFormData({ name: "", email: "", phone: "", adviser: "any", notes: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-3xl bg-[#111111] border border-white/10 shadow-2xl p-6 sm:p-10 z-10 overflow-hidden text-white"
          >
            {/* Top Close Button */}
            <button
              onClick={resetModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[#3eb5e5] text-xs font-semibold uppercase tracking-[0.18em] mb-2">
                <Sparkles className="w-4 h-4 text-[#3eb5e5]" />
                <span>Interactive Financial Planner</span>
              </div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                {step === 4 ? "Plan Request Received" : "Let's Build Your Plan"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mt-1">
                {step === 1 && "Tell us about your aspirations so we can tailor a bespoke strategy with you."}
                {step === 2 && "Select the core financial disciplines you want to prioritise."}
                {step === 3 && "Where should our Knightsbridge advisory team send your consultation details?"}
                {step === 4 && "Thank you. An adviser from our team will contact you shortly."}
              </p>

              {/* Step indicator bar */}
              {step < 4 && (
                <div className="flex items-center gap-2 mt-5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        s <= step ? "bg-[#3eb5e5]" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* STEP 1: Select Wealth Stage */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  1. Which best describes your current stage?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setWealthStage("accumulating");
                      setStep(2);
                    }}
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      wealthStage === "accumulating"
                        ? "border-[#3eb5e5] bg-[#3eb5e5]/10 text-white shadow-lg shadow-[#3eb5e5]/10"
                        : "border-white/10 bg-white/5 hover:border-[#3eb5e5]/40 hover:bg-white/[0.08]"
                    }`}
                  >
                    <TrendingUp className="w-6 h-6 text-[#3eb5e5] mb-3" />
                    <h4 className="font-sans font-bold text-base text-white">
                      Accumulating Wealth
                    </h4>
                    <p className="text-xs mt-2 leading-relaxed font-normal text-slate-400">
                      Senior executives and business owners in their prime — focused on scaling careers, raising families, tax efficiency, and rapid capital growth.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setWealthStage("accumulated");
                      setStep(2);
                    }}
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      wealthStage === "accumulated"
                        ? "border-[#3eb5e5] bg-[#3eb5e5]/10 text-white shadow-lg shadow-[#3eb5e5]/10"
                        : "border-white/10 bg-white/5 hover:border-[#3eb5e5]/40 hover:bg-white/[0.08]"
                    }`}
                  >
                    <Landmark className="w-6 h-6 text-[#3eb5e5] mb-3" />
                    <h4 className="font-sans font-bold text-base text-white">
                      Accumulated Wealth
                    </h4>
                    <p className="text-xs mt-2 leading-relaxed font-normal text-slate-400">
                      Individuals preparing for or in retirement, managing inter-generational assets, inheritance tax, and lasting legacy structures.
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Focus Disciplines */}
            {step === 2 && (
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  2. Select priority focus areas:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {focusOptions.map((opt) => {
                    const isChecked = selectedFocus.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleToggleFocus(opt)}
                        className={`p-3.5 rounded-2xl border text-left text-xs font-semibold flex items-center justify-between transition-all duration-200 cursor-pointer ${
                          isChecked
                            ? "bg-[#3eb5e5]/15 text-white border-[#3eb5e5]"
                            : "bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span>{opt}</span>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] ${
                            isChecked
                              ? "bg-[#3eb5e5] text-[#082133] border-[#3eb5e5] font-bold"
                              : "border-white/20"
                          }`}
                        >
                          {isChecked && "✓"}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={selectedFocus.length === 0}
                    className="px-6 py-3 rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-[#3eb5e5]/20 cursor-pointer"
                  >
                    <span>Next: Your Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Details & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 text-sm focus:outline-none focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alexander@example.com"
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 text-sm focus:outline-none focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7000 000000"
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 text-sm focus:outline-none focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Preferred Specialist
                    </label>
                    <select
                      value={formData.adviser}
                      onChange={(e) => setFormData({ ...formData, adviser: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 text-sm focus:outline-none focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] bg-white/5 text-white focus:bg-[#111111] transition-all [&>option]:bg-[#111111] [&>option]:text-white"
                    >
                      <option value="any">First Available Partner</option>
                      {teamMembers.map((m) => (
                        <option key={m.id} value={m.name}>
                          {m.name} ({m.role})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Specific Aspirations / Portfolio Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about any specific pensions, ISA portfolios, mortgages or goals..."
                    className="w-full px-4 py-3 rounded-2xl border border-white/10 text-sm focus:outline-none focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#3eb5e5]/20 hover:shadow-[#3eb5e5]/30 flex items-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Plan Request</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#082133]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Success State */}
            {step === 4 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] flex items-center justify-center mx-auto border border-[#3eb5e5]/30">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-sans font-bold text-2xl text-white">
                  We Look Forward to Meeting You
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto font-normal leading-relaxed">
                  Your strategy outline has been submitted to the Compound Wealth Planning team at Knightsbridge. We will review your requirements and reach out within one business day.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1">
                  <div className="text-slate-400">116 Brompton Road, Knightsbridge, SW3 1JJ</div>
                  <div className="text-white font-semibold">+44 20 7390 0837</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetModal}
                    className="px-8 py-3 rounded-full bg-[#3eb5e5] text-[#082133] text-xs font-bold uppercase tracking-wider hover:bg-[#3eb5e5]/90 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
