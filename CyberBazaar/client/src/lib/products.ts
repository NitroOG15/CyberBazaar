export interface Product {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  image: string;
  traits: string[];
  isSpecial?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Synthetic Emotion Synthesizer",
    price: "¥45,000",
    priceValue: 45000,
    description: "Artificially generate any emotional state. Warning: prolonged use may cause existential crisis.",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["emotional", "experimental", "risky"]
  },
  {
    id: 2,
    name: "Stolen Childhood Memories",
    price: "¥23,500",
    priceValue: 23500,
    description: "Pre-owned innocence from the upper districts. Memories of a time before the corporations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["nostalgic", "morally-ambiguous", "sentimental"]
  },
  {
    id: 3,
    name: "Neural Cortex Overclockers",
    price: "¥78,900",
    priceValue: 78900,
    description: "Boost processing speed by 400%. Side effects include spontaneous combustion of organic tissue.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["performance", "dangerous", "tech-savvy"]
  },
  {
    id: 4,
    name: "Optic Cloak Implants",
    price: "¥156,000",
    priceValue: 156000,
    description: "Military-grade invisibility enhancement. Perfect for corporate espionage and midnight heists.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["stealth", "criminal", "tactical"]
  },
  {
    id: 5,
    name: "Quantum Reflex Enhancer",
    price: "¥89,750",
    priceValue: 89750,
    description: "React before your enemies even think. Temporal displacement module included for premium users.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["speed", "competitive", "aggressive"]
  },
  {
    id: 6,
    name: "Memory Palace Constructor",
    price: "¥67,200",
    priceValue: 67200,
    description: "Build infinite storage for your consciousness. Some assembly required. Warranty void if tampered.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["intellectual", "organized", "methodical"]
  },
  {
    id: 7,
    name: "Pain Nullification Matrix",
    price: "¥34,800",
    priceValue: 34800,
    description: "Never feel suffering again. Popular among corporate wage slaves and resistance fighters alike.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["resilient", "survivor", "detached"]
  },
  {
    id: 8,
    name: "Corporate Loyalty Suppressor",
    price: "¥199,999",
    priceValue: 199999,
    description: "Break free from neural conditioning. Most expensive item due to corporate interference in manufacturing.",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["rebellious", "independent", "anti-authority"]
  },
  {
    id: 9,
    name: "Dream Sequence Recorder",
    price: "¥42,100",
    priceValue: 42100,
    description: "Capture and replay your subconscious. Warning: may reveal information you'd rather forget.",
    image: "https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["creative", "introspective", "curious"]
  },
  {
    id: 10,
    name: "Identity Scrambler Module",
    price: "¥112,000",
    priceValue: 112000,
    description: "Become anyone, anytime. Facial recognition systems hate this one simple trick.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["deceptive", "adaptive", "paranoid"]
  },
  {
    id: 11,
    name: "Social Credit Manipulator",
    price: "¥87,300",
    priceValue: 87300,
    description: "Artificially boost your citizen score. Side effects include increased surveillance and moral flexibility.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["opportunistic", "social", "manipulative"]
  },
  {
    id: 12,
    name: "Sentient AI Companion Chip",
    price: "¥999,999",
    priceValue: 999999,
    description: "The ultimate neural companion. Learns, adapts, and grows with you. Never be alone again.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    traits: ["lonely", "trusting", "vulnerable"],
    isSpecial: true
  }
];
