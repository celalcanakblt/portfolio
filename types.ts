export interface ExperienceItem {
  id: string;
  company: string;
  logo?: string;
  role: string;
  period?: string;
  description?: string;
  details: string[];
  projects?: {
    name: string;
    role: string;
    description?: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: string; // e.g., "Expert"
}

export interface EducationItem {
  school: string;
  department: string;
  period: string;
  location?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  speaking: string;
  writing: string;
}