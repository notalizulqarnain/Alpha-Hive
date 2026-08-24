"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Award } from "lucide-react";
import { teamMembers } from "@/data/teamData";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TeamPreview() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <SectionHeader
            badge="Multi-Disciplinary Team"
            title="Expertise, working together."
            subtitle="Financial planning is rarely about just one decision. That's why our team works together to bring the right expertise to every stage of your journey."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Link
            href="/why-work-with-us"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all shadow-subtle hover:shadow-card cursor-pointer shrink-0 w-full sm:w-auto"
          >
            <span>About Us & Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.slice(0, 3).map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden bg-[#111111] border border-white/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {member.accolades && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400 text-black text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider shadow-subtle group-hover:bg-gold-400 transition-colors">
                      <Award className="w-3 h-3 shrink-0" />
                      <span className="truncate">{member.accolades[0]}</span>
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal mt-0.5">{member.role}</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                <p className="text-xs text-slate-400 font-normal line-clamp-3 leading-relaxed">
                  {member.bio[0]}
                </p>

                <Link
                  href={`/team/${member.slug}`}
                  className="w-full py-3 rounded-full bg-transparent hover:bg-gold-400 text-white hover:text-black text-xs font-semibold uppercase tracking-wider text-center transition-all duration-300 block border border-white/[0.15] hover:border-gold-400 shadow-subtle cursor-pointer"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
