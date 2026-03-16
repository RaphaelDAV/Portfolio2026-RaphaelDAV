import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "coach-volley",
    role: "Competitive Volleyball Coach",
    company: "LBVB",
    location: "Limeil-Brevannes, France",
    startDate: "Sep. 2023",
    endDate: "Present",
    description:
      "Coaching and supervising a competitive volleyball team. Development of players' technical and tactical skills while fostering team cohesion and individual progress.",
    image: "/assets/experiences/volley.png",
    missions: [
      "Advise players and design exercises adapted to all levels",
      "Encourage team cohesion",
      "Support each player's progress",
      "Manage matches and competitions",
      "Develop team spirit and communication",
    ],
    technologies: ["Management", "Public speaking", "Patience", "Teaching"],
    results: [
      "Improved team performance",
      "Development of management skills",
      "Stronger team cohesion",
    ],
    type: "sport",
  },
  {
    id: "stage-safran-vba",
    role: "Internship - VBA Management Tool Development",
    company: "SAFRAN",
    location: "Reau, France",
    startDate: "Apr. 2025",
    endDate: "Jul. 2025",
    description:
      "Development of a VBA/Excel workload and forecast management tool for a team of around 50 people. Centralization, automation, and improved budget and technical monitoring (workload, gaps, expenses).",
    image: "/assets/experiences/safran.png",
    missions: [
      "Analyze team needs",
      "Design and develop a VBA/Excel tool",
      "Centralize management data",
      "Automate budget tracking",
      "Improve technical tracking of workload and variances",
      "Train users on the tool",
    ],
    technologies: ["VBA", "Excel", "Project management"],
    results: [
      "Tool used by 50 people",
      "Effective data centralization",
      "Improved budget and technical tracking",
    ],
    type: "stage",
  },
  {
    id: "stage-observation-3eme",
    role: "Observation Internship - IT",
    company: "UGAP",
    location: "Champs-sur-Marne, France",
    startDate: "2019",
    endDate: "2019",
    description:
      "Middle-school observation internship in IT. Discovery of IT jobs and how a company in the sector operates.",
    image: "/assets/experiences/ugap.png",
    missions: [
      "Observe IT professions",
      "Discover the professional environment",
      "Understand how a company operates",
      "Explore different facets of IT",
    ],
    technologies: ["IT"],
    results: [
      "First professional experience",
      "Confirmed interest in IT",
    ],
    type: "stage",
  },
];
