import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "dev-vba",
    role: "Développeur VBA",
    company: "Entreprise X",
    location: "Île-de-France, France",
    startDate: "Juin 2025",
    endDate: "Août 2025",
    description:
      "Développement d'outils d'automatisation en VBA pour optimiser les processus internes de l'entreprise. Création de macros avancées pour le traitement de données et la génération de rapports automatisés.",
    missions: [
      "Analyse des besoins métier et des processus existants",
      "Conception et développement de macros VBA pour Excel",
      "Automatisation de la génération de rapports",
      "Optimisation des traitements de données",
      "Documentation technique des outils développés",
      "Formation des utilisateurs finaux",
    ],
    technologies: ["VBA", "Excel", "Access", "SQL"],
    results: [
      "Réduction de 60% du temps de traitement des rapports",
      "Automatisation de 5 processus manuels récurrents",
      "Amélioration de la fiabilité des données traitées",
    ],
    type: "stage",
  },
  {
    id: "projet-universitaire",
    role: "Développeur Full Stack",
    company: "Projet universitaire — IUT",
    location: "Champs-sur-Marne, France",
    startDate: "Janvier 2025",
    endDate: "Avril 2025",
    description:
      "Développement d'une application web complète dans le cadre d'un projet académique en équipe. Mise en pratique des méthodes agiles et des technologies web modernes.",
    missions: [
      "Conception de l'architecture de l'application",
      "Développement du frontend en React",
      "Création de l'API REST en Node.js",
      "Modélisation et gestion de la base de données PostgreSQL",
      "Tests unitaires et d'intégration",
      "Présentation du projet devant un jury",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "Git",
    ],
    results: [
      "Application fonctionnelle livrée dans les délais",
      "Note de 16/20 au projet",
      "Maîtrise du workflow Git en équipe",
      "Expérience concrète de la méthode Scrum",
    ],
    type: "projet",
  },
  {
    id: "freelance-web",
    role: "Développeur Web Freelance",
    company: "Auto-entrepreneur",
    location: "Île-de-France, France",
    startDate: "Septembre 2024",
    endDate: "Décembre 2024",
    description:
      "Réalisation de sites web vitrine pour des petites entreprises et associations locales. Gestion complète du cycle de vie des projets, de la conception à la mise en ligne.",
    missions: [
      "Écoute et analyse des besoins clients",
      "Maquettage et prototypage des interfaces",
      "Développement responsive avec HTML, CSS, JavaScript",
      "Intégration de CMS si nécessaire",
      "Déploiement et mise en ligne",
      "Support et maintenance",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Git", "Figma"],
    results: [
      "3 sites livrés et mis en production",
      "Clients satisfaits avec retours positifs",
      "Développement de compétences en gestion de projet autonome",
    ],
    type: "freelance",
  },
];
