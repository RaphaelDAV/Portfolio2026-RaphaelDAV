import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "snchess",
    slug: "snchess",
    title: "SNChesS",
    shortDescription:
      "Jeu d'échecs complet développé en C.",
    fullDescription:
      "SNChesS est un jeu d'échecs entièrement développé en C. Il inclut une interface en ligne de commande, la vérification de tous les déplacements légaux, la gestion des parties et un système de sauvegarde. Il permet de jouer à deux en local et gère les règles complexes comme le petit coup, le grand coup, etc.",
    year: 2024,
    category: "Application Bureau",
    featured: true,
    technologies: ["C", "Make"],
    coverImage: "/assets/projects/snchess/background.png",
    icon: "/assets/projects/snchess/logo6.png",
    gallery: [
      "/assets/projects/snchess/screen1.png",
      "/assets/projects/snchess/screen2.png",
      "/assets/projects/snchess/screen3.png",
      "/assets/projects/snchess/screen4.png",
      "/assets/projects/snchess/screen5.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/snchess",
    liveUrl: "https://move2cloud.example.com",
    challenges: [
      "Concevoir une architecture scalable pour gérer de grandes quantités de données",
      "Implémenter un système de suivi en temps réel",
      "Assurer la sécurité des données sensibles de migration",
    ],
    learnings: [
      "Architecture microservices avec Docker",
      "Gestion d'état complexe côté client",
      "Bonnes pratiques de sécurité pour les applications cloud",
      "Travail en équipe avec méthode Agile",
    ],
    missions: [
      "Analyse des besoins et rédaction du cahier des charges",
      "Conception de l'architecture technique",
      "Développement du frontend React",
      "Mise en place de l'API REST",
      "Intégration de la base de données PostgreSQL",
      "Déploiement avec Docker",
    ],
    timeline: [
      {
        title: "Analyse & Conception",
        description: "Étude des besoins, maquettage, choix techniques",
        date: "Janvier 2025",
      },
      {
        title: "Développement Backend",
        description: "API REST, modèles de données, authentification",
        date: "Février 2025",
      },
      {
        title: "Développement Frontend",
        description: "Interface utilisateur, intégration API, tests",
        date: "Mars 2025",
      },
      {
        title: "Déploiement & Tests",
        description: "Conteneurisation, CI/CD, tests de charge",
        date: "Avril 2025",
      },
    ],
    status: "completed",
    context:
      "Projet réalisé dans le cadre du BUT Informatique, en réponse à un besoin réel d'accompagnement des PME dans leur transition vers le cloud.",
    objectives: [
      "Faciliter la planification de migration cloud",
      "Offrir un tableau de bord de suivi en temps réel",
      "Permettre la collaboration entre équipes",
    ],
    features: [
      "Dashboard interactif de suivi de migration",
      "Cartographie de l'infrastructure existante",
      "Planification par étapes avec timeline",
      "Gestion des rôles et permissions",
      "Export de rapports PDF",
    ],
    difficulties: [
      "Modélisation complexe des dépendances entre services",
      "Performance des requêtes sur de grands volumes de données",
    ],
    solutions: [
      "Utilisation de graphes pour modéliser les dépendances",
      "Indexation et pagination côté serveur",
    ],
  },
  {
    id: "portfolio-nextjs",
    slug: "portfolio-nextjs",
    title: "Portfolio Next.js",
    shortDescription:
      "Portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS.",
    fullDescription:
      "Mon portfolio personnel, conçu comme une vitrine de mes compétences et projets. Développé avec les technologies les plus modernes du web : Next.js avec App Router, TypeScript pour la robustesse, Tailwind CSS pour le design, et Framer Motion pour les animations fluides. Le design sombre et futuriste reflète ma passion pour les technologies de pointe.",
    year: 2026,
    category: "Site Web",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React",
    ],
    coverImage: "/assets/projects/bif/background.png",
    icon: "/assets/projects/bif/logo.png",
    gallery: [
      "/assets/projects/bif/screen1.png",
      "/assets/projects/bif/screen2.png",
      "/assets/projects/bif/screen3.png",
      "/assets/projects/bif/screen4.png",
      "/assets/projects/bif/screen5.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/portfolio",
    liveUrl: "https://raphael-daviot.dev",
    challenges: [
      "Créer un design original et mémorable",
      "Optimiser les performances et le SEO",
      "Rendre le site parfaitement responsive",
    ],
    learnings: [
      "Maîtrise de Next.js App Router",
      "Animations avancées avec Framer Motion",
      "Design system cohérent avec Tailwind CSS",
      "Bonnes pratiques d'accessibilité web",
    ],
    missions: [
      "Conception du design et de l'UX",
      "Développement de l'architecture de composants",
      "Intégration des animations",
      "Optimisation SEO et performances",
      "Déploiement sur Vercel",
    ],
    timeline: [
      {
        title: "Design & Architecture",
        description: "Maquettes, choix techniques, structure du projet",
        date: "Février 2026",
      },
      {
        title: "Développement",
        description: "Composants, pages, animations, responsive",
        date: "Mars 2026",
      },
      {
        title: "Mise en ligne",
        description: "Déploiement, tests finaux, optimisation",
        date: "Mars 2026",
      },
    ],
    status: "in-progress",
    context:
      "Projet personnel pour présenter mon profil et mes réalisations aux recruteurs et collaborateurs potentiels.",
    objectives: [
      "Présenter mes compétences de manière visuelle et interactive",
      "Démontrer ma maîtrise des technologies modernes",
      "Créer une expérience utilisateur mémorable",
    ],
    features: [
      "Design sombre et futuriste",
      "Animations fluides au scroll",
      "Pages projets dynamiques",
      "Formulaire de contact",
      "Responsive design",
    ],
  },
  {
    id: "wikirace",
    slug: "wikirace",
    title: "Wikirace",
    shortDescription:
      "Jeu multijoueur de course sur Wikipedia avec classement en temps réel.",
    fullDescription:
      "Wikirace est un jeu en ligne multijoueur où les participants doivent naviguer d'une page Wikipedia à une autre en utilisant uniquement les liens internes. Le premier joueur à atteindre la page cible remporte la partie. L'application inclut un système de matchmaking, un classement global, et des statistiques détaillées par joueur.",
    year: 2025,
    category: "Application Web",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "TypeScript"],
    coverImage: "/assets/projects/wikirace/background.png",
    icon: "/assets/projects/wikirace/logo.png",
    gallery: [
      "/assets/projects/wikirace/screen1.png",
      "/assets/projects/wikirace/screen2.png",
      "/assets/projects/wikirace/screen3.png",
      "/assets/projects/wikirace/screen4.png",
      "/assets/projects/wikirace/screen5.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/wikirace",
    challenges: [
      "Implémenter le temps réel avec WebSocket",
      "Parser et afficher les pages Wikipedia de manière propre",
      "Gérer la concurrence entre joueurs",
    ],
    learnings: [
      "Communication temps réel avec Socket.io",
      "Scraping et parsing de contenu web",
      "Gestion d'état partagé entre clients",
    ],
    missions: [
      "Conception du gameplay et des règles",
      "Développement du serveur WebSocket",
      "Intégration de l'API Wikipedia",
      "Interface de jeu interactive",
      "Système de classement",
    ],
    timeline: [
      {
        title: "Prototype",
        description: "Mécanique de jeu de base, preuve de concept",
        date: "Septembre 2025",
      },
      {
        title: "Développement",
        description: "Multijoueur, classement, interface",
        date: "Octobre 2025",
      },
      {
        title: "Tests & Polish",
        description: "Tests utilisateurs, corrections, améliorations",
        date: "Novembre 2025",
      },
    ],
    status: "completed",
    context:
      "Projet personnel inspiré par le concept populaire de speedrun Wikipedia, transformé en expérience multijoueur compétitive.",
    objectives: [
      "Créer une expérience de jeu fluide en temps réel",
      "Implémenter un système de matchmaking équitable",
      "Offrir des statistiques détaillées aux joueurs",
    ],
    features: [
      "Matchmaking automatique",
      "Navigation Wikipedia intégrée",
      "Classement global",
      "Historique des parties",
      "Statistiques par joueur",
    ],
  },
  {
    id: "projet-api",
    slug: "projet-api",
    title: "Projet API REST",
    shortDescription:
      "API RESTful complète avec authentification JWT et documentation Swagger.",
    fullDescription:
      "Conception et développement d'une API REST complète en Node.js avec Express. L'API inclut un système d'authentification JWT, une documentation Swagger interactive, des tests automatisés, et un système de gestion de rôles. Elle sert de backend pour une application de gestion de tâches collaborative.",
    year: 2025,
    category: "Backend",
    featured: false,
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    coverImage: "/assets/projects/codex/background.png",
    icon: "/assets/projects/codex/logo.png",
    gallery: [
      "/assets/projects/codex/screen1.png",
      "/assets/projects/codex/screen2.png",
      "/assets/projects/codex/screen3.png",
      "/assets/projects/codex/screen4.png",
      "/assets/projects/codex/screen5.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/api-rest",
    docUrl: "https://api.example.com/docs",
    challenges: [
      "Concevoir une architecture REST propre et évolutive",
      "Implémenter une authentification sécurisée",
      "Écrire une documentation complète",
    ],
    learnings: [
      "Architecture API RESTful",
      "Sécurité : JWT, bcrypt, rate limiting",
      "Documentation avec Swagger/OpenAPI",
      "Tests d'intégration avec Jest",
    ],
    missions: [
      "Modélisation des données",
      "Développement des endpoints CRUD",
      "Système d'authentification JWT",
      "Documentation Swagger",
      "Tests automatisés",
    ],
    timeline: [
      {
        title: "Conception",
        description: "Modélisation, architecture, choix techniques",
        date: "Mars 2025",
      },
      {
        title: "Développement",
        description: "Endpoints, authentification, middleware",
        date: "Avril 2025",
      },
      {
        title: "Documentation & Tests",
        description: "Swagger, tests Jest, déploiement",
        date: "Mai 2025",
      },
    ],
    status: "completed",
    context:
      "Projet académique visant à maîtriser la conception d'APIs professionnelles.",
  },
  {
    id: "application-java",
    slug: "application-java",
    title: "Application Java",
    shortDescription:
      "Application desktop en Java avec interface graphique JavaFX.",
    fullDescription:
      "Application de gestion développée en Java avec une interface graphique moderne en JavaFX. L'application permet la gestion complète d'un inventaire avec fonctionnalités CRUD, recherche avancée, export de données et génération de rapports. Architecture MVC respectée avec une couche d'accès aux données propre.",
    year: 2024,
    category: "Application Desktop",
    featured: false,
    technologies: ["Java", "JavaFX", "MySQL", "Maven", "JUnit"],
    coverImage: "/assets/projects/qix/background.png",
    icon: "/assets/projects/qix/logo.png",
    gallery: [
      "/assets/projects/qix/screen1.png",
      "/assets/projects/qix/screen2.png",
      "/assets/projects/qix/screen3.png",
      "/assets/projects/qix/screen4.png",
      "/assets/projects/qix/screen5.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/app-java",
    challenges: [
      "Concevoir une interface utilisateur intuitive avec JavaFX",
      "Implémenter le pattern MVC de manière rigoureuse",
      "Gérer les connexions base de données de manière efficace",
    ],
    learnings: [
      "Architecture MVC en Java",
      "Développement d'interfaces graphiques avec JavaFX",
      "Design patterns (Singleton, Observer, Factory)",
      "Tests unitaires avec JUnit",
    ],
    missions: [
      "Analyse des besoins et conception UML",
      "Développement de la couche modèle",
      "Création de l'interface JavaFX",
      "Intégration MySQL",
      "Tests et documentation",
    ],
    timeline: [
      {
        title: "Analyse & Conception",
        description: "Diagrammes UML, maquettes, architecture",
        date: "Octobre 2024",
      },
      {
        title: "Développement",
        description: "Modèle, vue, contrôleur, base de données",
        date: "Novembre 2024",
      },
      {
        title: "Finalisation",
        description: "Tests, documentation, soutenance",
        date: "Décembre 2024",
      },
    ],
    status: "completed",
    context:
      "Projet réalisé en binôme dans le cadre du module de programmation orientée objet du BUT Informatique.",
  },
  {
    id: "outil-vba",
    slug: "outil-vba",
    title: "Outil VBA",
    shortDescription:
      "Outil d'automatisation Excel avancé pour le traitement de données.",
    fullDescription:
      "Développement d'un outil d'automatisation complet en VBA pour Excel, permettant le traitement automatisé de données issues de multiples sources. L'outil génère des rapports formatés, crée des graphiques dynamiques et envoie des notifications par email. Interface utilisateur personnalisée avec formulaires VBA.",
    year: 2025,
    category: "Automatisation",
    featured: false,
    technologies: ["VBA", "Excel", "Access", "SQL"],
    coverImage: "/assets/projects/travia/background.png",
    icon: "/assets/projects/travia/logo.png",
    gallery: [
      "/assets/projects/travia/screen1.png",
      "/assets/projects/travia/screen2.png",
      "/assets/projects/travia/screen3.png",
      "/assets/projects/travia/screen4.png",
      "/assets/projects/travia/screen5.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/outil-vba",
    challenges: [
      "Gérer des volumes importants de données dans Excel",
      "Créer une interface utilisateur intuitive en VBA",
      "Assurer la robustesse face aux erreurs de données",
    ],
    learnings: [
      "VBA avancé : classes, événements, API Windows",
      "Optimisation des performances Excel",
      "Gestion d'erreurs robuste",
      "Communication avec des bases Access",
    ],
    missions: [
      "Audit des processus existants",
      "Conception de l'architecture VBA",
      "Développement des macros de traitement",
      "Création des formulaires utilisateur",
      "Documentation et formation",
    ],
    timeline: [
      {
        title: "Audit & Conception",
        description: "Analyse des processus, spécifications",
        date: "Juin 2025",
      },
      {
        title: "Développement",
        description: "Macros, formulaires, traitements",
        date: "Juillet 2025",
      },
      {
        title: "Livraison",
        description: "Tests, documentation, formation utilisateurs",
        date: "Août 2025",
      },
    ],
    status: "completed",
    context:
      "Outil développé lors d'un stage pour répondre aux besoins d'automatisation du service comptabilité.",
  },
  {
    id: "projet-bdd",
    slug: "projet-bdd",
    title: "Projet Base de Données",
    shortDescription:
      "Conception et administration d'une base de données relationnelle complexe.",
    fullDescription:
      "Projet de conception complète d'une base de données relationnelle pour un système de gestion de bibliothèque. De la modélisation conceptuelle (MCD) à l'implémentation physique, en passant par la normalisation, les triggers, les procédures stockées et l'optimisation des requêtes.",
    year: 2024,
    category: "Base de données",
    featured: false,
    technologies: ["PostgreSQL", "SQL", "PL/pgSQL", "pgAdmin"],
    coverImage: "/assets/projects/unesco/background.png",
    icon: "/assets/projects/unesco/logo.png",
    gallery: [
      "/assets/projects/unesco/screen1.png",
      "/assets/projects/unesco/screen2.png",
      "/assets/projects/unesco/screen3.png",
      "/assets/projects/unesco/screen4.png",
    ],
    githubUrl: "https://github.com/raphael-daviot/projet-bdd",
    challenges: [
      "Normaliser correctement le schéma jusqu'en 3NF",
      "Écrire des procédures stockées performantes",
      "Optimiser les requêtes sur de grands jeux de données",
    ],
    learnings: [
      "Modélisation conceptuelle et logique",
      "Normalisation de bases de données",
      "PL/pgSQL : triggers et procédures stockées",
      "Optimisation de requêtes SQL",
    ],
    missions: [
      "Modélisation conceptuelle (MCD/MLD)",
      "Création du schéma physique",
      "Écriture des requêtes complexes",
      "Développement de triggers et procédures",
      "Documentation du schéma",
    ],
    timeline: [
      {
        title: "Modélisation",
        description: "MCD, MLD, normalisation",
        date: "Novembre 2024",
      },
      {
        title: "Implémentation",
        description: "Schéma, données, requêtes",
        date: "Décembre 2024",
      },
    ],
    status: "completed",
    context:
      "Projet académique du module bases de données avancées du BUT Informatique.",
  },
];
