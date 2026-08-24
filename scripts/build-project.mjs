import fs from "fs";
import path from "path";

function write(relPath, content) {
  const fullPath = path.resolve(relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
  console.log("Created:", relPath);
}

// 1. styles/globals.css
write("styles/globals.css", `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

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
write("data/teamData.ts", `export interface TeamMember {
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
      "Having gained significant market knowledge and experience in the financial markets working as an Equity Derivatives Trader at global investment banks like JP Morgan, Credit Suisse, and BNP Paribas, he started Compound Wealth Planning with a simple mission: to make financial planning easy to understand and to help clients make smart and well-thought-out decisions on any money-related matters - so they can enjoy today and feel confident about tomorrow.",
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

// 3. data/testimonialsData.ts
write("data/testimonialsData.ts", `export interface Testimonial {
  id: string;
  author: string;
  role: string;
  adviser: string;
  category: "Investment" | "Mortgage" | "Retirement" | "Tax & Planning" | "General";
  rating: number;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Private Client",
    role: "Tech Executive",
    adviser: "Kanishk Swarup",
    category: "General",
    rating: 5,
    content: "Kanishk took the time to understand my full financial picture and long-term goals. His advice has been clear, practical and easy to act on. He has been proactive in suggesting ways to improve my position rather than just responding to questions. His combination of deep market experience and personal approach to financial planning has been invaluable."
  },
  {
    id: "2",
    author: "Private Client",
    role: "Managing Director",
    adviser: "Elliot Clayton Le Sueur",
    category: "Investment",
    rating: 5,
    content: "Elliot has been fantastic. While it's early to say whether the advice and actions we've taken have or will pay off financially, I can say that I've really appreciated his approach and openness and his commitment to treating our conversations as a long term rather than transactional partnership. He's been incredibly proactive and responsive - no matter what I've asked or when."
  },
  {
    id: "3",
    author: "Property Investor",
    role: "Homeowner & Investor",
    adviser: "Matthew Lay",
    category: "Mortgage",
    rating: 5,
    content: "Matt has helped us get organised to successfully purchase not one, but two properties over the past 7 years. The first time, he supported us in understanding the process and choosing / applying for the best mortgage for us. This held us in excellent stead for years. He has also helped us understand various ways to structure our options on the purchase of a second property, and been a trusted advisor on the topic since we first met him. He's proactive, excellent at what he does and I'd recommend him to anyone exploring a property purchase."
  },
  {
    id: "4",
    author: "Family Office Client",
    role: "Business Founder",
    adviser: "Kanishk Swarup",
    category: "Tax & Planning",
    rating: 5,
    content: "Kanishk performed a thorough check of my financial situation as it stands today. He then proactively suggested the possible routes my wife and I could take. One thing that stood out was his ability to understand my family dynamics - this was key in laying out a path that would truly make a difference to our future."
  },
  {
    id: "5",
    author: "Private Client",
    role: "Senior Partner",
    adviser: "Elliot Clayton Le Sueur",
    category: "Investment",
    rating: 5,
    content: "Elliot has worked with me to plan around my life, helping me map life moments and budget and invest accordingly. Helping me carefully understand different investment vehicles and risk exposure and how that aligns with my aspiration. He takes the complexity out of things and explains them simply for me to make an informed decision."
  },
  {
    id: "6",
    author: "Private Client",
    role: "Entrepreneur",
    adviser: "Kanishk Swarup",
    category: "Tax & Planning",
    rating: 5,
    content: "Kanishk Swarup has been instrumental in helping me navigate my financial goals with clarity and confidence. His tailored advice, deep understanding of financial markets, and proactive approach have provided me with a clear path to secure and grow myself and my husband's wealth and explains every step along the way, including investments and will writing."
  },
  {
    id: "7",
    author: "London Resident",
    role: "Homebuyer",
    adviser: "Matthew Lay",
    category: "Mortgage",
    rating: 5,
    content: "Matt was superb from start to finish. Helped us with a complex mortgage arrangement, got us a great deal and was always available to discuss anything that came up."
  },
  {
    id: "8",
    author: "Private Client",
    role: "Corporate Executive",
    adviser: "Kanishk Swarup",
    category: "General",
    rating: 5,
    content: "Kanishk helped me work through all my different pots of finances in various places, how to consolidate them and think about them holistically. Most importantly, being disciplined about letting money work for me rather than it sitting dormant."
  },
  {
    id: "9",
    author: "Private Client",
    role: "Consultant",
    adviser: "Elliot Clayton Le Sueur",
    category: "Retirement",
    rating: 5,
    content: "Elliot has been brilliant. He's provided excellent advice on my pension investments and has gone above and beyond by offering helpful guidance outside his immediate scope of work, without any financial gain or expectations. He is always incredibly accessible."
  },
  {
    id: "10",
    author: "First-time Buyer",
    role: "Client",
    adviser: "Matthew Lay",
    category: "Mortgage",
    rating: 5,
    content: "Matt, from the onset has been very helpful in preemptively telling the stages and timelines. Even when we got nervous during the process for any delays, he would promptly chase everyone in the loop and ensured that he does all he can to move things forward. Also, he is very experienced and has an in depth knowledge of industry which immensely helped. He was always available to answer any questions."
  }
];
`);

// 4. data/newsData.ts
write("data/newsData.ts", `export interface NewsItem {
  id: string;
  title: string;
  category: "Podcast" | "Article" | "Award" | "Media";
  publication: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  link: string;
  featured?: boolean;
}

export const newsArticles: NewsItem[] = [
  {
    id: "financial-planner-life-podcast",
    title: "From the Trading Floor To Financial Planner with £70M AUM",
    category: "Podcast",
    publication: "Financial Planner Life (Hosted by Sam Oakes)",
    date: "November 2023",
    readTime: "45 min listen",
    summary: "In this episode of the Financial Planner Life podcast, Kanishk Swarup shares his incredible journey from high-stakes equity derivatives trading at JP Morgan and Credit Suisse to launching his own financial planning practice through the St. James's Place Partnership.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    link: "https://financialplannerlife.com",
    featured: true
  },
  {
    id: "gifting-grey-area-iht",
    title: "The gifting grey area at the frontline of IHT advice",
    category: "Article",
    publication: "FT Adviser",
    date: "June 2024",
    readTime: "6 min read",
    summary: "For the modern wealth manager, the normal expenditure out of income exemption is considered somewhat a holy grail of inheritance tax planning. Governed by section 21 of the Inheritance Tax Act 1984, it is the only relief that allows immediate tax efficiency without complex 7-year rules.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    link: "https://ftadviser.com",
    featured: true
  },
  {
    id: "moneyage-awards-2024",
    title: "Compound Wealth Planning Named Micro Wealth Management Firm of the Year",
    category: "Award",
    publication: "MoneyAge Awards",
    date: "2024",
    readTime: "3 min read",
    summary: "Recognised for our bespoke high-touch client advisory model and proactive financial planning methodology for growing families across London and the UK.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];
`);

console.log("Data files generated successfully!");
write("scripts/completed-data.flag", "ok");
