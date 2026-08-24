"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Dumbbell, Target, Clock, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { teamMembers } from "@/data/teamData";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhyWorkWithUsPage() {
  const values = [
    {
      title: "Long-Term Vision, Not Just Quick Wins",
      description:
        "You can hit the gym and chase quick gains, but real fitness comes from consistency and a balanced plan. Same with your money. We're here to build lasting financial health, not just short-term results.",
      icon: Target,
    },
    {
      title: "Two Decades Of Real Experience",
      description:
        "Think of us like seasoned trainers - we've been at this for over 20 years. We've seen trends come and go, and we know what actually delivers over time. That's the kind of insight we bring to your financial plan.",
      icon: Clock,
    },
    {
      title: "Proactive, Personalised Planning",
      description:
        "No one wants to walk into a gym and guess what to do. We offer clear, personalised advice, paired with smart tools, so you're never left figuring things out alone.",
      icon: Dumbbell,
    },
    {
      title: "We Walk The Talk",
      description:
        "We only suggest strategies we believe in, and use ourselves. If it's not good enough for us, it's not good enough for you.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-8 sm:py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 md:space-y-32">
        {/* Philosophy Section */}
        <section>
          <SectionHeader
            badge="Our Distinct Philosophy"
            title="Why work with us"
            subtitle="You know that friend who doesn't just recommend a gym because it looks good, but because they've trained there, seen results, and know it works? That's how we approach financial planning."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#3eb5e5]/40 hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3eb5e5]/10 border border-[#3eb5e5]/30 text-[#3eb5e5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400 font-normal leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-sm"
          >
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed italic">
              "Like physical fitness, the gap between knowing and doing is where most people struggle. We don't just offer advice and step back - we stay proactive, help you follow through, and keep progress moving toward your goals."
            </p>
          </motion.div>
        </section>

        {/* Founder Story Section */}
        <section className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-10 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-52 h-64 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
                <img
                  src={teamMembers[0].image}
                  alt="Kanishk Swarup"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              </div>

              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">Kanishk Swarup</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-[0.15em] mt-0.5">
                  Founder & Principal Adviser
                </p>
              </div>

              <Link
                href={`/team/${teamMembers[0].slug}`}
                className="px-6 py-2.5 rounded-full bg-[#3eb5e5] hover:bg-[#3eb5e5]/90 text-[#082133] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#3eb5e5]/20 cursor-pointer"
              >
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3eb5e5]/10 text-[#3eb5e5] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] border border-[#3eb5e5]/30">
                <Award className="w-3.5 h-3.5" />
                <span>Founder Story</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white">
                The Power of Compounding & A Personal Mission
              </h2>

              <div className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Compound Wealth began with a personal mission. It grew out of my own journey - from a small town in India to being responsible for looking after the finances of about 200 families. Along that path, I came to understand the true value of money: not just as a means to an end, but as a tool for freedom, security, and choice.
                </p>
                <p>
                  Albert Einstein famously called compound interest the eighth wonder of the world - and that idea has influenced me both personally and professionally. It is also why I chose to name the firm <strong className="text-white">Compound Wealth Planning</strong>.
                </p>
                <p>
                  By the age of 32, I realised that I was well on my way to be financially free having started with zero, not through shortcuts or luck, but through years of consistent planning and the quiet, powerful force of compounding. That experience changed everything. I left a successful career in banking to follow my true passion - helping others take charge of their financial lives.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <SectionHeader
            badge="Our Dedicated Team"
            title="Our Team"
            subtitle="Meet the advisers, mortgage specialists, and client servicing experts dedicated to your financial wellbeing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-white/20 hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#3eb5e5] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-normal mt-0.5">{member.role}</p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4 bg-[#111111]">
                  <p className="text-xs text-slate-400 font-normal line-clamp-3 leading-relaxed">
                    {member.bio[0]}
                  </p>

                  <Link
                    href={`/team/${member.slug}`}
                    className="w-full py-2.5 sm:py-3 rounded-full bg-white/5 hover:bg-[#3eb5e5]/10 text-white hover:text-[#3eb5e5] text-xs font-semibold uppercase tracking-wider text-center transition-all duration-300 block border border-white/10 hover:border-[#3eb5e5]/40 cursor-pointer"
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
