import { Product } from './products';

export interface UserProfile {
  clickedItems: Product[];
  traits: Record<string, number>;
  totalClicks: number;
}

export const adjectives = [
  "Chrome", "Neon", "Ghost", "Shadow", "Iron", "Toxic", "Omega", "Quantum",
  "Cyber", "Neural", "Digital", "Synthetic", "Void", "Dark", "Steel", "Binary"
];

export const nouns = [
  "Wraith", "Vulture", "Serpent", "Hacker", "Specter", "Nomad", "Phantom",
  "Drone", "Asset", "Vector", "Unit", "Subject", "Operative", "Entity"
];

export function generateCyberpunkAlias(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
}

export function generatePrice(): string {
  const value = Math.floor(Math.random() * 150000) + 50000;
  return `¥${value.toLocaleString()}`;
}

export function generateProfileDescription(profile: UserProfile): string {
  const traits = Object.keys(profile.traits);
  const totalClicks = profile.totalClicks;
  
  let description = "Subject exhibits ";
  
  if (traits.includes('stealth') || traits.includes('criminal')) {
    description += "high-risk covert operational tendencies. ";
  } else if (traits.includes('rebellious') || traits.includes('anti-authority')) {
    description += "anti-corporate sentiment and resistance potential. ";
  } else if (traits.includes('dangerous') || traits.includes('aggressive')) {
    description += "enhanced combat readiness and threat assessment. ";
  } else if (traits.includes('intellectual') || traits.includes('methodical')) {
    description += "analytical processing capabilities and strategic thinking. ";
  } else {
    description += "standard neural enhancement interest patterns. ";
  }
  
  if (totalClicks > 5) {
    description += "High engagement metrics suggest strong acquisition potential. ";
  } else if (totalClicks < 3) {
    description += "Selective browsing indicates discriminating preferences. ";
  } else {
    description += "Moderate interaction patterns detected. ";
  }
  
  const loyalty = Math.floor(Math.random() * 50) + 10;
  description += `Estimated corporate loyalty: ${loyalty}%. `;
  
  if (traits.includes('vulnerable') || traits.includes('trusting')) {
    description += "Psychological profile indicates high manipulation susceptibility.";
  } else if (traits.includes('paranoid') || traits.includes('independent')) {
    description += "Enhanced security protocols recommended for handling.";
  } else {
    description += "Suitable for specialized operations requiring cognitive flexibility.";
  }
  
  return description;
}

export function getTopTraits(profile: UserProfile, count: number = 6): [string, number][] {
  return Object.entries(profile.traits)
    .sort(([,a], [,b]) => b - a)
    .slice(0, count);
}
