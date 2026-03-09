export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  year: number;
  category: string;
  /** "large" = double-width card, "small" = single-width card */
  size: "large" | "small";
  technologies: string[];
  coverImage: string;
  icon?: string;
  gallery: string[];
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  learnings: string[];
  difficulties?: string[];
}
