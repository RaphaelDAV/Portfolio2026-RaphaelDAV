import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "coach-volley",
    role: "Coach de Volley en compétition",
    company: "LBVB",
    location: "Limeil-Brévannes, France",
    startDate: "Sep. 2023",
    endDate: "Aujourd'hui",
    description:
      "Encadrement et coaching d'une équipe de volley-ball en compétition. Développement des compétences techniques et tactiques des joueurs, favorisant la cohésion d'équipe et la progression individuelle.",
    image: "/assets/experiences/volley.png",
    missions: [
      "Conseiller et créer des exercices adaptés à tous les niveaux",
      "Favoriser la cohésion d'équipe",
      "Accompagner la progression de chacun",
      "Gérer les matchs et compétitions",
      "Développer l'esprit d'équipe et la communication",
    ],
    technologies: ["Management", "Expression orale", "Patience", "Pédagogie"],
    results: [
      "Amélioration des performances de l'équipe",
      "Développement de compétences en management",
      "Renforcement de la cohésion d'équipe",
    ],
    type: "sport",
  },
  {
    id: "stage-safran-vba",
    role: "Stage - Création d'un outil de gestion VBA",
    company: "SAFRAN",
    location: "Réau, France",
    startDate: "Avr. 2025",
    endDate: "Juil. 2025",
    description:
      "Développement d'un outil de gestion des charges et prévisions en VBA/Excel pour une équipe d'environ 50 personnes. Centralisation, automatisation et amélioration du suivi budgétaire et technique (charges, écarts, dépenses).",
    image: "/assets/experiences/safran.png",
    missions: [
      "Analyse des besoins de l'équipe",
      "Conception et développement d'un outil VBA/Excel",
      "Centralisation des données de gestion",
      "Automatisation du suivi budgétaire",
      "Amélioration du suivi technique des charges et écarts",
      "Formation des utilisateurs à l'outil",
    ],
    technologies: ["VBA", "Excel", "Gestion de projet"],
    results: [
      "Outil utilisé par 50 personnes",
      "Centralisation efficace des données",
      "Amélioration du suivi budgétaire et technique",
    ],
    type: "stage",
  },
  {
    id: "stage-observation-3eme",
    role: "Stage d'observation - Informatique",
    company: "UGAP",
    location: "Champs-sur-Marne, France",
    startDate: "2019",
    endDate: "2019",
    description:
      "Stage d'observation de 3ème dans le domaine de l'informatique. Découverte des métiers de l'informatique et du fonctionnement d'une entreprise du secteur.",
    image: "/assets/experiences/ugap.png",
    missions: [
      "Observation des métiers de l'informatique",
      "Découverte de l'environnement professionnel",
      "Comprendre le fonctionnement d'une entreprise",
      "Explorer les différentes facettes de l'informatique",
    ],
    technologies: ["Informatique"],
    results: [
      "Première expérience professionnelle",
      "Confirmation de l'intérêt pour l'informatique",
    ],
    type: "stage",
  },
];
