import fs from "fs";
import path from "path";

function writeFile(filePath, content) {
  const fullPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
  console.log("Wrote:", filePath);
}

// 1. styles/globals.css
writeFile("styles/globals.css", `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-navy: #091a32;
  --accent-gold: #d4af37;
  --accent-cyan: #0ea5e9;
  --bg-alabaster: #fcfbf9;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fbfaf8;
  color: #1e293b;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .font-serif {
  font-family: 'Playfair Display', Georgia, serif;
}

::selection {
  background-color: rgba(14, 165, 233, 0.2);
  color: #050e1d;
}

/* Glassmorphism utilities */
.glass-panel {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-panel-dark {
  background: rgba(9, 26, 50, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-panel-gold {
  background: rgba(253, 248, 238, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 175, 55, 0.25);
}

/* Smooth custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
`);

// 2. data/teamData.ts
writeFile("data/teamData.ts", `export interface TeamMember {
  id: string;
  name: string;
  role: string;
  slug: string;
  image: string;
  bio: string[];
  accolades?: string[];
  quote: string;
  specialisms: string[];
  credentials?: string;
  contact: {
    email: string;
    linkedin: string;
    vouchedfor?: string;
    calendly?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "kanishk-swarup",
    slug: "kanishk-swarup",
    name: "Kanishk Swarup",
    role: "Founder & Principal Adviser",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    specialisms: [
      "Holistic Wealth Management",
      "High-Net-Worth Financial Planning",
      "Discretionary Wealth Strategy",
      "Inter-generational Legacy Structuring",
      "Tax & Pension Optimisation"
    ],
    credentials: "FT Diversity Awards Winner | MoneyAge Winner",
    bio: [
      "Kanishk Swarup is the Founder and Principal Adviser at Compound Wealth Planning. He believes in taking responsibility for his clients' finances and guiding them with a personal, proactive, and practical approach.",
      "Having gained significant market knowledge and experience in the financial markets working as an Equity Derivatives Trader at global investment banks like JP Morgan, Credit Suisse, and BNP Paribas, he started Compound Wealth Planning with a simple mission: to make financial planning easy to understand and to help clients make smart and well-thought-out decisions on any money-related matters — so they can enjoy today and feel confident about tomorrow.",
      "Kanishk is the winner of 'Best Personal Financial Planning Specialist 2023' at the Worldwide Finance Awards, and 'Micro Wealth Management Firm of the Year' at the MoneyAge Awards in both 2021 and 2024. He was also shortlisted for the FT Diversity in Finance Awards 2023, the Paul Etheridge Financial Planning Future Leader Award 2023, and the Personal Finance Awards 2023.",
      "Outside of wealth advisory, Kanishk enjoys travelling, spending time with his young family, and is a sports enthusiast who loves cricket. He also enjoys reading about the world of investing and personal finance."
    ],
    quote: "My mission is to take a holistic and objective approach to financial planning and work with clients who struggle to optimise their finances due to constraints of time, experience, or knowledge. I believe every individual can achieve financial freedom and other life goals with proactive guidance and a clear strategy.",
    contact: {
      email: "kanishk.swarup@sjpp.co.uk",
      linkedin: "https://www.linkedin.com/in/kanishk-swarup/",
      vouchedfor: "https://www.vouchedfor.co.uk/financial-advisor-wealth-manager/london/0000-kanishk-swarup",
      calendly: "https://calendly.com"
    }
  },
  {
    id: "elliot-clayton-le-sueur",
    slug: "elliot-clayton-le-sueur",
    name: "Elliot Clayton Le Sueur",
    role: "Financial Adviser",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    specialisms: [
      "Gen Z & Millennial Wealth Building",
      "Mortgage & Property Planning",
      "Investment Strategy",
      "School Fee Planning",
      "Tax Optimisation & Retirement Planning"
    ],
    credentials: "IMC, ACSI",
    bio: [
      "Elliot (IMC, ACSI) joined Compound Wealth Planning in March 2022, bringing over 4 years of expertise from St. James's Place Practices. He specialises in supporting Gen Z and Millennials in areas such as mortgage planning, investment planning, school fee planning, tax optimisation, retirement planning, and protection planning.",
      "His seamless transition into the role ensures immediate value addition for both the Practice and our valued clients.",
      "Elliot is committed to expanding his knowledge base to provide personalised financial solutions. He firmly believes in the power of ongoing advice and the importance of tailored strategies to help clients navigate their financial journey confidently."
    ],
    quote: "Financial advice isn't just about numbers; it's about building relationships and empowering clients on their financial journey.",
    contact: {
      email: "elliot.lesueur@sjpp.co.uk",
      linkedin: "https://www.linkedin.com/in/elliot-clayton-le-sueur/",
      vouchedfor: "https://www.vouchedfor.co.uk",
      calendly: "https://calendly.com"
    }
  },
  {
    id: "matthew-lay",
    slug: "matthew-lay",
    name: "Matthew Lay",
    role: "Mortgage & Protection Adviser",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    specialisms: [
      "First Charge Mortgages",
      "Complex Property Finance",
      "Family & Business Protection",
      "High-Value Property Structuring",
      "Lender Intermediary Solutions"
    ],
    credentials: "CeMAP",
    bio: [
      "Matthew Lay brings a decade of mortgage expertise to Compound Wealth Planning, prioritising long-term client relationships over transactions. With a focus on personalised service, he guides clients through complex mortgage needs in the UK, drawing from extensive experience across various sectors.",
      "Matthew's background, ranging from the Nationwide Building Society to specialised mortgage fields, underscores his versatility and commitment to client success. At Compound Wealth Planning, he offers comprehensive support to the families we serve, merging his expertise with our holistic approach.",
      "Matthew offers a comprehensive range of first charge mortgages from across the market, which lenders make available to mortgage intermediaries."
    ],
    quote: "I'm passionate about offering more than just mortgage advice. It's about forging enduring connections, comprehending unique aspirations, and guiding clients through the complexities of mortgages for a secure future.",
    contact: {
      email: "matthew.lay@sjpp.co.uk",
      linkedin: "https://www.linkedin.com",
      vouchedfor: "https://www.vouchedfor.co.uk",
      calendly: "https://calendly.com"
    }
  },
  {
    id: "sardar-akhtar",
    slug: "sardar-akhtar",
    name: "Sardar Akhtar",
    role: "Associate Financial Planner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    specialisms: [
      "HNW & UHNW Client Advisory",
      "Cash Flow Modelling",
      "Estate & Inheritance Planning",
      "Pensions & Tax-Efficient Drawdown",
      "Private Banking Advisory"
    ],
    credentials: "PCIAM, IAD, CeMAP",
    bio: [
      "Sardar Akhtar (PCIAM, IAD, CeMAP) joined Compound Wealth Planning having built his career across some of the UK's most respected wealth management environments, progressing from Wealth Associate and Trainee Financial Planner at Coutts to Associate Financial Adviser roles at Apollo Private Wealth and now CWP.",
      "His grounding at Coutts, one of the UK's most prestigious private banks, established both the technical depth and the high standard of client service he brings to every relationship. Sardar specialises in working with HNW and UHNW clients across investments, pensions, estate planning, and protection, with a particular focus on cash flow modelling and tax-efficient retirement planning.",
      "Outside of work, Sardar is a keen football and cricket fan, enjoys the gym, and shares his clients' appetite for travel and new experiences."
    ],
    quote: "The most important thing a client can feel is that their adviser truly understands them. I take time to listen before I ever make a recommendation, because the right plan has to start with the right conversation.",
    contact: {
      email: "sardar.akhtar@sjpp.co.uk",
      linkedin: "https://www.linkedin.com",
      vouchedfor: "https://www.vouchedfor.co.uk",
      calendly: "https://calendly.com"
    }
  },
  {
    id: "carys-roberts",
    slug: "carys-roberts",
    name: "Carys Roberts",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    specialisms: [
      "Client Experience & Servicing",
      "Practice Workflow Optimization",
      "Compliance & Quality Assurance",
      "Operational Discipline"
    ],
    bio: [
      "As Operations Manager at Compound Wealth Planning, Carys ensures every client experience runs seamlessly from initial engagement through to ongoing service. With a background spanning operations, client servicing and hospitality, she brings structure, discipline and a strong service mindset to the heart of the firm.",
      "Carys oversees processes, coordinates internal workflows and maintains clear communication across the team, ensuring that every detail is handled efficiently and thoughtfully. Known for her organised and solutions-focused approach, she is committed to delivering a consistent, high-standard experience that allows clients to feel confident and well supported at every stage."
    ],
    quote: "Great financial planning is about more than expert advice; it's about creating an experience that's organized, seamless and reassuring. My role is to ensure every client feels supported from their very first conversation.",
    contact: {
      email: "carys.roberts@sjpp.co.uk",
      linkedin: "https://www.linkedin.com"
    }
  },
  {
    id: "elisabeth-johnson",
    slug: "elisabeth-johnson",
    name: "Elisabeth Johnson",
    role: "Business Administrator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    specialisms: [
      "Client Interaction & Support",
      "Process Management",
      "Documentation & Verification",
      "Adviser Coordination"
    ],
    bio: [
      "Elisabeth Johnson arrived at Compound Wealth Planning with a Finance degree, early-career experience across financial services, and a clear sense of what good client support looks like. Her academic grounding in financial concepts, combined with internship experience working across different stakeholders and high-pressure environments, gave her a strong foundation in organization, communication, and attention to detail.",
      "At Compound Wealth Planning, Elisabeth works closely with both clients and advisers to keep processes running smoothly, supporting the team with a reliable, solutions-focused approach."
    ],
    quote: "The best client experience isn't just what happens in the room. It's everything done right before and after. That's where I show up, with care and integrity.",
    contact: {
      email: "elisabeth.johnson@sjpp.co.uk",
      linkedin: "https://www.linkedin.com"
    }
  }
];
`);

// 3. components/layout/Footer.tsx
writeFile("components/layout/Footer.tsx", `"use client";

import React from "react";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative z-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-compound-blue to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.236.734-4.3 1.973-5.973" />
                  <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6" />
                  <path d="M12 10a2 2 0 0 1 2 2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white">
                  COMPOUND
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400 -mt-1">
                  Wealth Planning
                </span>
              </div>
            </Link>

            <div className="text-xs text-slate-400 leading-relaxed space-y-2.5 max-w-2xl font-light">
              <p>
                Compound Wealth Planning is an Appointed Representative of and represents only St. James's Place Wealth Management plc (which is authorised and regulated by the Financial Conduct Authority) for the purpose of advising solely on the Group's wealth management products and services, more details of which are set out on the Group's website{" "}
                <a
                  href="https://www.sjp.co.uk/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  www.sjp.co.uk/products
                </a>
                .
              </p>
              <p>
                The 'St. James's Place Partnership' and the titles 'Partner' and 'Partner Practice' are marketing terms used to describe St. James's Place representatives.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/compound-wealth-planning/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 hover:bg-compound-blue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                </svg>
              </a>
              <a
                href="mailto:contact@compoundwealth.co.uk"
                className="w-9 h-9 rounded-full bg-navy-900 hover:bg-compound-blue text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.vouchedfor.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 h-9 rounded-full bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 border border-white/10"
              >
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>VouchedFor</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/why-work-with-us" className="hover:text-white transition-colors">
                  Why Work With Us
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-white transition-colors">
                  Your Journey With Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  In The News & Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Site Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-start lg:items-end space-y-3">
            <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Senior Partner Practice
            </span>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
              <span className="font-serif text-lg font-bold tracking-tight text-white">
                St. James's
              </span>
              <span className="font-serif text-lg font-bold tracking-tight text-gold-400 -mt-1">
                Place
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 mt-1">
                Wealth Management
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 bg-navy-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Compound Wealth Planning. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </Link>
            <span className="text-slate-600">Knightsbridge, London SW3 1JJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
`);

// 4. app/team/[slug]/page.tsx
writeFile("app/team/[slug]/page.tsx", `import React from "react";
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
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-compound-blue block mb-1">
                {member.role}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-navy-950">
                {member.name}
              </h1>
              {member.credentials && (
                <p className="text-xs font-semibold text-gold-600 mt-1 uppercase tracking-wider">
                  {member.credentials}
                </p>
              )}
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {member.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {(member.id === "matthew-lay" || member.id === "elliot-clayton-le-sueur") && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 font-medium">
                Your home may be repossessed if you do not keep up repayments on your mortgage.
              </div>
            )}

            {member.specialisms && member.specialisms.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialisms.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-navy-950">
                Get in touch with {member.name.split(" ")[0]}:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={\`mailto:\${member.contact.email}\`}
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-navy-900 text-slate-700 hover:text-white transition-colors flex items-center gap-3 text-xs font-semibold"
                >
                  <Mail className="w-4 h-4 text-compound-blue" />
                  <span>Email</span>
                </a>

                <a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-navy-900 text-slate-700 hover:text-white transition-colors flex items-center gap-3 text-xs font-semibold"
                >
                  <svg className="w-4 h-4 fill-current text-compound-blue" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.88-.72-1.6-1.6-1.6Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {member.contact.vouchedfor && (
                  <a
                    href={member.contact.vouchedfor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-navy-900 text-slate-700 hover:text-white transition-colors flex items-center gap-3 text-xs font-semibold"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>VouchedFor</span>
                  </a>
                )}

                {member.contact.calendly && (
                  <a
                    href={member.contact.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-navy-900 text-slate-700 hover:text-white transition-colors flex items-center gap-3 text-xs font-semibold"
                  >
                    <Calendar className="w-4 h-4 text-gold-600" />
                    <span>Calendly</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-slate-100 relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[450px] sm:h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-2xl relative overflow-hidden">
              <Quote className="w-10 h-10 text-gold-500/30 absolute top-6 right-6" />
              <p className="font-serif italic text-base sm:text-lg text-slate-200 leading-relaxed relative z-10 font-light">
                "{member.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  {member.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-16 border-t border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-medium text-navy-950">Our Team</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
              Explore other specialist advisers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {otherMembers.map((m) => (
              <div
                key={m.id}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-serif font-bold text-base text-navy-950 group-hover:text-compound-blue transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{m.role}</p>
                  <Link
                    href={\`/team/\${m.slug}\`}
                    className="w-full py-2 rounded-full bg-slate-100 hover:bg-navy-900 text-slate-800 hover:text-white text-[10px] font-bold uppercase tracking-wider text-center transition-all block mt-2"
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
`);

console.log("All files regenerated with clean UTF-8 encoding!");
