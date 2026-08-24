export interface Testimonial {
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
