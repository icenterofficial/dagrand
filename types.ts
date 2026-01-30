
export type Language = 'en' | 'zh';

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  languages: string;
  bio: string[];
  education: string;
  image: string;
  contacts?: {
      phone?: string;
      email?: string;
  }
}

export interface ServiceDetail {
  title: string;
  content: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  subServices?: string[];
  serviceDetails?: ServiceDetail[];
  image?: string; 
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; 
  date: string;
  category: string;
  author: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    team: string;
    practices: string;
    updates: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: StatItem[];
  whyUs: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  about: {
    title: string;
    content: string[];
  };
  team: {
    title: string;
    subtitle: string;
    intro: string[];
    members: Lawyer[];
  };
  practices: {
    title: string;
    subtitle: string;
    items: PracticeArea[];
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  ctaSection: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  updates: {
    title: string;
    subtitle: string;
    comingSoon: string;
    readMore: string;
    categories: {
        all: string;
        tax: string;
        corporate: string;
        labor: string;
        realEstate: string;
    }
  };
  contact: {
    title: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
    phoneLabel: string;
    emailLabel: string;
    khmerEngFr: string;
    chinese: string;
  };
  footer: {
    rights: string;
  };
}
