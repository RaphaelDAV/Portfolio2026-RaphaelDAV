export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  missions: string[];
  technologies: string[];
  results: string[];
  type: "stage" | "alternance" | "freelance" | "projet" | "emploi" | "sport";
  image?: string;
}
