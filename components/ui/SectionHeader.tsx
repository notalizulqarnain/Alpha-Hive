"use client";

import React from "react";
import { motion } from "motion/react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean; // Kept for backwards compatibility if used elsewhere, but everything defaults dark
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-12 md:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.15em] mb-3 sm:mb-4 border transition-colors shadow-subtle bg-white/5 border-white/10 text-[#3eb5e5]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3eb5e5]" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
