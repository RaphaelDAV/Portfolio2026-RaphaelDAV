export interface Skill {
  id: string;
  name: string;
  icon?: string; // Optional emoji/icon string
  logo?: string; // Path/URL to the skill logo image
  category: SkillCategory;
  level: SkillLevel;
  description: string;
  tools?: string[];
  examples?: string[];
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "other";

export type SkillLevel =
  | "debutant"
  | "intermediaire"
  | "avance"
  | "expert";

export const skillCategoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de données",
  devops: "DevOps / Cloud",
  other: "Autres",
};

export const skillLevelLabels: Record<SkillLevel, string> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
  expert: "Expert",
};
