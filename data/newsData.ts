export interface NewsItem {
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
