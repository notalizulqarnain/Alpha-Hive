"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Radio, Newspaper, ArrowRight, ExternalLink, Play } from "lucide-react";
import { newsArticles } from "@/data/newsData";
import SectionHeader from "@/components/ui/SectionHeader";

export default function InTheNewsSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="Thought Leadership & Media"
          title="In The News"
          subtitle="Insights, podcast interviews, and technical commentary from our advisers on market trends, tax regulations, and wealth management strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsArticles.slice(0, 2).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden bg-[#111111] border border-white/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] bg-white/10 text-gold-300 backdrop-blur-md border border-white/[0.1] shadow-subtle">
                    {item.category === "Podcast" ? "Podcast" : "Article"}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] sm:text-xs text-slate-400 font-normal">
                    {item.publication} {item.date ? ` • ${item.date}` : ""}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white leading-snug group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    <span>Read Full Feature</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {item.category === "Podcast" ? (
                    <div className="w-8 h-8 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/30 flex items-center justify-center shrink-0">
                      <Play className="w-3.5 h-3.5 fill-gold-400 ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center shrink-0">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-2 sm:pt-4">
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-subtle hover:shadow-card cursor-pointer w-full sm:w-auto"
          >
            <span>Browse All Articles & Media Appearances</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
