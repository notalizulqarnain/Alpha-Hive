import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, ShieldCheck, Calendar, ArrowRight, Quote, Sparkles } from "lucide-react";
import { teamMembers } from "@/data/teamData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({ params }: PageProps) {
  const resolvedParams = await params;
  const member = teamMembers.find((m) => m.slug === resolvedParams.slug);

  if (!member) {
    notFound();
  }

  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug);

  return (
    <div className="py-12 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3eb5e5] block mb-1">
                {member.role}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white">
                {member.name}
              </h1>
              {member.credentials && (
                <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-[0.18em]">
                  {member.credentials}
                </p>
              )}
            </div>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {member.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {(member.id === "matthew-lay" || member.id === "elliot-clayton-le-sueur") && (
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200 font-medium">
                Your home may be repossessed if you do not keep up repayments on your mortgage.
              </div>
            )}

            {member.specialisms && member.specialisms.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Key Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialisms.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10 shadow-subtle"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 shadow-card space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Get in touch with {member.name.split(" ")[0]}:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${member.contact.email}`}
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#3eb5e5]/10 text-white hover:text-[#3eb5e5] border border-white/10 hover:border-[#3eb5e5]/40 transition-all flex items-center gap-3 text-xs font-semibold cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#3eb5e5]" />
                  <span>Email</span>
                </a>

                <a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#3eb5e5]/10 text-white hover:text-[#3eb5e5] border border-white/10 hover:border-[#3eb5e5]/40 transition-all flex items-center gap-3 text-xs font-semibold cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-[#3eb5e5]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {member.contact.vouchedfor && (
                  <a
                    href={member.contact.vouchedfor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#3eb5e5]/10 text-white hover:text-[#3eb5e5] border border-white/10 hover:border-[#3eb5e5]/40 transition-all flex items-center gap-3 text-xs font-semibold cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#3eb5e5]" />
                    <span>VouchedFor</span>
                  </a>
                )}

                {member.contact.calendly && (
                  <a
                    href={member.contact.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white/5 hover:bg-[#3eb5e5]/10 text-white hover:text-[#3eb5e5] border border-white/10 hover:border-[#3eb5e5]/40 transition-all flex items-center gap-3 text-xs font-semibold cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#3eb5e5]" />
                    <span>Calendly</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900 relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[450px] sm:h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] text-white border border-white/10 relative overflow-hidden">
              <Quote className="w-10 h-10 text-[#3eb5e5]/20 absolute top-6 right-6" />
              <p className="font-sans italic text-base sm:text-lg text-slate-200 leading-relaxed relative z-10 font-normal">
                "{member.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3eb5e5]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3eb5e5]">
                  {member.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-sans font-bold text-white">Our Team</h3>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mt-1">
              Explore other specialist advisers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {otherMembers.map((m) => (
              <div
                key={m.id}
                className="rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-white/20 hover:-translate-y-1 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-slate-900">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-sans font-bold text-base text-white group-hover:text-[#3eb5e5] transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1 font-normal">{m.role}</p>
                  <Link
                    href={`/team/${m.slug}`}
                    className="w-full py-2 rounded-full bg-white/5 hover:bg-[#3eb5e5]/10 text-white hover:text-[#3eb5e5] text-[10px] font-semibold uppercase tracking-wider text-center transition-all block mt-2 border border-white/10 hover:border-[#3eb5e5]/40 cursor-pointer"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
