"use client";

import React from "react";
import { motion } from "motion/react";
import { Radio, Newspaper, ExternalLink, Play } from "lucide-react";
import { newsArticles } from "@/data/newsData";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NewsPage() {
  return (
    <div className="py-8 sm:py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <SectionHeader
          badge="Press & Insights"
          title="In The News & Media"
          subtitle="Explore podcast episodes, market commentary, and regulatory analyses published by our advisers across leading financial publications."
        />

        {/* Featured Podcast Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden bg-[#111111] text-white border border-white/10 shadow-card p-6 sm:p-10 lg:p-16 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.18em] border border-[#3eb5e5]/30">
                <Radio className="w-3.5 h-3.5" />
                <span>Featured Podcast</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight text-white">
                From the Trading Floor To Financial Planner with £70M AUM
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                In this episode of the <em>Financial Planner Life</em> podcast, Kanishk Swarup shares his journey from equity derivatives trading at JP Morgan and Credit Suisse to building an award-winning wealth practice with St. James's Place.
              </p>
              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://financialplannerlife.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3eb5e5]/20 cursor-pointer w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-[#082133]" />
                  <span>Listen on Podcast Platforms</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center p-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800"
                  alt="Financial Planner Life Podcast"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#3eb5e5] font-semibold">
                    Host: Sam Oakes
                  </span>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                    Financial Planner Life
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-white/20 hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#0a0a0a]/80 text-[#3eb5e5] backdrop-blur-md border border-white/10 shadow-subtle">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <span className="text-[11px] sm:text-xs text-slate-400 font-normal">
                    {article.publication} • {article.date}
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white leading-snug group-hover:text-[#3eb5e5] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#3eb5e5] transition-colors cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
