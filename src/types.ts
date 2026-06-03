export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tag: string;
  imageUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photoUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceInterested: string;
  message: string;
}
