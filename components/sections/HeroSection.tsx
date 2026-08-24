"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Shield, Award, CheckCircle } from "lucide-react";
import PlanBuilderModal from "@/components/ui/PlanBuilderModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center pt-8 pb-12 sm:pt-16 sm:pb-16 lg:py-0">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]">
        <div className="absolute inset-0 bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_20%,#0a0a0a_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8 max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3eb5e5] animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider sm:tracking-[0.18em] truncate sm:whitespace-normal">
              SENIOR PARTNER PRACTICE — ST. JAMES'S PLACE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl leading-[1.15] sm:leading-[1.1]"
          >
            Clear Financial Planning <br className="hidden sm:block" />
            for a <span className="text-[#3eb5e5]">Confident Tomorrow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-slate-400 font-normal mb-8 sm:mb-10 max-w-2xl leading-relaxed px-2 sm:px-0"
          >
            Expert wealth management and financial advice tailored to your unique goals. Build, protect, and preserve your wealth with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] font-semibold text-sm sm:text-base transition-all shadow-lg shadow-[#3eb5e5]/20 hover:shadow-[#3eb5e5]/30 cursor-pointer"
            >
              <span>Start Your Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/journey"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              Explore Journey
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Cards (Background visual elements for desktop) */}
      <div className="absolute top-1/2 left-4 md:left-10 -translate-y-1/2 hidden lg:block opacity-30 pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-64 h-80 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md p-6 -rotate-[6deg]"
        >
          <div className="w-full h-8 rounded-md bg-white/5 mb-4"></div>
          <div className="w-3/4 h-4 rounded-md bg-white/5 mb-2"></div>
          <div className="w-1/2 h-4 rounded-md bg-white/5 mb-8"></div>
          <div className="w-full h-32 rounded-lg bg-gradient-to-t from-[#3eb5e5]/20 to-transparent mt-auto"></div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 hidden lg:block opacity-30 pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="w-64 h-80 rounded-2xl bg-gradient-to-bl from-[#3eb5e5]/10 to-transparent border border-white/10 backdrop-blur-md p-6 rotate-[6deg]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#3eb5e5]/20"></div>
            <div className="flex-1">
              <div className="w-full h-3 rounded-md bg-white/10 mb-2"></div>
              <div className="w-2/3 h-3 rounded-md bg-white/10"></div>
            </div>
          </div>
          <div className="w-full h-40 rounded-lg border border-white/5 bg-white/5"></div>
        </motion.div>
      </div>

      {/* Trusted By / Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full z-10 mt-10 sm:mt-14 lg:mt-0 lg:absolute lg:bottom-8"
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-3">Trusted Excellence</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3eb5e5]" />
              <span className="text-[11px] sm:text-sm text-slate-300 font-medium">FCA Regulated</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3eb5e5]" />
              <span className="text-[11px] sm:text-sm text-slate-300 font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3eb5e5]" />
              <span className="text-[11px] sm:text-sm text-slate-300 font-medium">Award Winning Advice</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <PlanBuilderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
