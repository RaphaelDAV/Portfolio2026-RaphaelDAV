export interface TimelineStep {
  title: string;
  description: string;
  date?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  year: number;
  category: string;
  featured: boolean;
  technologies: string[];
  coverImage: string;
  gallery: string[];
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  challenges: string[];
  learnings: string[];
  missions: string[];
  timeline: TimelineStep[];
  status: "completed" | "in-progress" | "planned";
  context?: string;
  objectives?: string[];
  features?: string[];
  difficulties?: string[];
  solutions?: string[];
}
