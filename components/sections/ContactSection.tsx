"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import SectionHeader from "../ui/SectionHeader";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0284c7", "#d4af37", "#091a32"],
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Start the Conversation"
          title="Contact us"
          subtitle="Speak with our Knightsbridge advisory team about your personal finances, wealth accumulation, or property goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-[#111111] border border-white/10 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/30 text-[#3eb5e5] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Contact Us
                  </span>
                  <a
                    href="tel:+442073900837"
                    className="text-base sm:text-lg md:text-xl font-sans font-bold text-white hover:text-[#3eb5e5] transition-colors block mt-0.5"
                  >
                    +44 20 7390 0837
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/30 text-[#3eb5e5] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Opening Hours
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Monday to Friday
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-normal">9:00am - 5:00pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/30 text-[#3eb5e5] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Location
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    116 Brompton Road, Knightsbridge
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-normal">London, SW3 1JJ</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-card relative h-48 sm:h-64 bg-slate-900">
              <iframe
                title="Knightsbridge Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=116%20Brompton%20Road,%20Knightsbridge,%20London,%20SW3%201JJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#0a0a0a]/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold text-white flex items-center gap-1.5 backdrop-blur-sm shadow-subtle">
                <MapPin className="w-3.5 h-3.5 text-[#3eb5e5]" />
                <span>Knightsbridge Office</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl p-6 sm:p-8 md:p-12 bg-[#111111] border border-white/10 shadow-card relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-white/10 focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] outline-none text-sm bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-white/10 focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] outline-none text-sm bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 20 7390 0837"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-white/10 focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] outline-none text-sm bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share what you are hoping to achieve with your financial planning..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-white/10 focus:border-[#3eb5e5] focus:ring-1 focus:ring-[#3eb5e5] outline-none text-sm bg-white/5 text-white placeholder:text-slate-500 focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#3eb5e5]/20 hover:shadow-[#3eb5e5]/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4 text-[#082133] transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed pt-2 font-normal">
                    Compound Wealth Planning together with St. James's Place Wealth Management plc are the data controllers of any personal data you provide to us.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 sm:py-12 space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3eb5e5]/10 text-[#3eb5e5] border border-[#3eb5e5]/30 rounded-full flex items-center justify-center mx-auto shadow-subtle">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-sans font-bold text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, {formData.name}. Our Knightsbridge team has received your enquiry and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
