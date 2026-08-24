export interface TeamMember {
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
