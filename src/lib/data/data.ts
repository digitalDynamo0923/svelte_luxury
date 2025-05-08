interface ReasonData {
  number: number;
  title: string;
  description: string;
  imageUrl: string | string[];
  isReversed: boolean;
}

export const reasonsData: ReasonData[] = [
  {
    number: 1,
    title: "Luxury Sheets Are Being Hit With Tariffs. Ours Aren't.",
    description: "Many luxury bedding brands source their materials from overseas, increasing their cost. It's a political game that's ultimately designed to drive luxury cooling sheets out of Americans' reach. We get the same high-end quality, for less—without the government tax-grab.",
    imageUrl: ["/images/tariff.webp"],
    isReversed: false
  },
  {
    number: 2,
    title: "Space-Age Innovation Without Space-Age Prices",
    description: "Our temperature-regulating sheets were inspired by the same materials NASA uses to keep astronauts cool. And thanks to our unique approach to sourcing and manufacturing, you won’t see those savings eaten up by hidden costs or extra duties. Just smarter comfort, built for Earth.",
    imageUrl: ["/images/space_age_1.webp", "/images/space_age_2.webp"],
    isReversed: true
  },
  {
    number: 3,
    title: "Silver-Infused Freshness Technology",
    description: "Our sheets contain a trace amount of silver that naturally kills 99.9% of bacteria. This keeps your sheets fresher longer and helps eliminate odors—without harsh chemicals.",
    imageUrl: ["/images/laundry.webp"],
    isReversed: false
  },
  {
    number: 4,
    title: "Why Pay 2–3x More For Sheets That Do Less?",
    description: 'Most "luxury" brands aren’t antibacterial. They don’t regulate temperature. And they certainly don’t offer real savings. Our premium Sheets deliver softness, cleanliness, and cooling in one high-tech package—without tariff bloat.',
    imageUrl: ["/images/pay2_3x.webp"],
    isReversed: true
  },
  {
    number: 5,
    title: "The Hidden Cost of Dirty Sheets? Your Skin.",
    description: "Regular sheets trap bacteria that irritate skin and clog pores. Our silver-infused our premium Sheets help reduce up to 99.7% of bacteria growth, making them a game-changer for anyone who wants clearer skin and fewer breakouts.",
    imageUrl: ["/images/softskin_1.webp", "/images/softskin_2.webp"],
    isReversed: false
  },
  {
    number: 6,
    title: "Try Them. Love Them. Or Get Your Money Back.",
    description: "No fine print. No hassle. No tariffs. If you don’t love our premium fabric sheets after 30 nights of better sleep, we’ll refund every cent. We’re confident you'll never look at regular sheets the same way again.",
    imageUrl: "/images/money_back.webp",
    isReversed: true
  }
]; 

