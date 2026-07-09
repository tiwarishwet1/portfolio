export interface LearningJourneyItem {
  id: string;
  title: string;
  status: 'Active' | 'Advanced' | 'Scaling' | 'Research' | 'Completed';
  progress: number; // 0 - 100
  estimatedCompletion: string;
  currentFocus: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  researchUrl?: string;
  imageSymbol: string; // name of lucide-react icon
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  publication: string;
  conference: string;
  status: string;
  abstract: string;
  keywords: string[];
  pdfUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Active' | 'Completed' | 'In Progress';
  verificationUrl?: string;
  description: string;
}

export interface GithubRepo {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  repoUrl: string;
}

export interface WritingArticle {
  id: string;
  title: string;
  platform: 'Medium' | 'Hashnode' | 'Dev.to';
  date: string;
  readTime: string;
  link: string;
  excerpt: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}
