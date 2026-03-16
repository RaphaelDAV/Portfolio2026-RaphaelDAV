import { Project } from "@/types/project";

/** Ordered list of project IDs — determines the display order in the grid */
export const projectOrder: string[] = [
  
  "wikirace",
  "travia",
  "portfolio-next",
  "codex-naturalis",
  "qix",
  "snchess",
  "bif",
  "exploration-algorithmique",
  "projet-unesco",
];

export const projects: Project[] = [
  {
    id: "portfolio-next",
    slug: "portfolio-next",
    title: "Mon Portfolio",
    shortDescription:
      "Portfolio personnel développé avec Next.js, TypeScript et animations UI avancées.",
    fullDescription:
      "Ce portfolio est une application web moderne conçue pour présenter mon profil, mes compétences et mes projets de manière immersive. Développé avec Next.js et TypeScript, il met l'accent sur les performances, l'accessibilité et l'expérience utilisateur. L'interface combine une direction artistique personnalisée, des transitions fluides avec Framer Motion, un système de composants réutilisables et une architecture de données structurée pour faciliter les évolutions futures.",
    year: 2026,
    category: "Site Web",
    size: "small",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    coverImage: "/assets/projects/ux.png",
    gallery: [
      "/assets/projects/ux.png",
    ],
    learnings: [
      "Structuration d'une application Next.js en composants réutilisables",
      "Création d'interfaces modernes avec Tailwind CSS",
      "Animation d'interactions avec Framer Motion",
      "Organisation des contenus via une couche de données TypeScript",
    ],
    difficulties: [
      "Trouver un équilibre entre identité visuelle et lisibilité",
      "Concevoir des animations fluides sans dégrader les performances",
      "Maintenir une architecture évolutive pour de nouveaux projets",
    ],
  },
  {
    id: "snchess",
    slug: "snchess",
    title: "SCN'Hess",
    shortDescription:
      "Plateforme de réservation de billets de train TGV développée en équipe.",
    fullDescription:
      "SCN'Hess est une plateforme de réservation de billets de train développée dans le contexte de l'ouverture à la concurrence du marché ferroviaire. Le projet visait à proposer une solution intuitive permettant aux utilisateurs de rechercher, personnaliser et réserver facilement leurs trajets en TGV. L'application intègre la gestion de la disponibilité des places, des options personnalisées comme la place tranquille ou la prise électrique, ainsi qu'un calendrier de prix variables. L'interface a été pensée pour offrir une expérience fluide, avec une navigation claire entre la sélection du trajet, les options et le paiement.",
    year: 2024,
    category: "Application Web",
    size: "small",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL / MariaDB"],
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
    learnings: [
      "Conception d'une application web full stack",
      "Gestion d'une logique métier de réservation",
      "Structuration d'une base de données relationnelle",
      "Travail en équipe avec méthodologie Agile",
    ],
    difficulties: [
      "Gestion des disponibilités et des options de réservation",
      "Implémentation d'un calendrier de prix variables",
      "Conception d'une interface claire pour le parcours utilisateur",
    ],
  },
  {
    id: "wikirace",
    slug: "wikirace",
    title: "Wikirace",
    shortDescription:
      "Jeu web en ligne multijoueur basé sur Wikipédia avec communication en temps réel.",
    fullDescription:
      "Wikirace est un jeu web inspiré du principe de navigation entre articles Wikipédia. Les joueurs doivent atteindre une page cible en un minimum de clics dans un temps limité. Le projet combine une interface React moderne, une logique multijoueur temps réel via WebSocket et une base MongoDB pour la gestion des parties. L'objectif était de proposer une expérience ludique, fluide et immersive, aussi bien en solo qu'en multijoueur.",
    year: 2025,
    category: "Application Web",
    size: "large",
    technologies: ["React", "TypeScript", "JavaScript", "MongoDB"],
    coverImage: "/assets/projects/wikirace/background.png",
    icon: "/assets/projects/wikirace/logo.png",
    gallery: [
      "/assets/projects/wikirace/screen1.png",
      "/assets/projects/wikirace/screen2.png",
      "/assets/projects/wikirace/screen3.png",
      "/assets/projects/wikirace/screen4.png",
      "/assets/projects/wikirace/screen5.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/SAE_WIKIPEDIA",
    learnings: [
      "Développement d'interface avec React",
      "Gestion du temps réel en multijoueur",
      "Persistance des données avec MongoDB",
      "Conception d'un jeu web collaboratif",
    ],
    difficulties: [
      "Synchronisation des données entre joueurs",
      "Gestion de la progression en temps réel",
      "Stabilité et fluidité de l'expérience multijoueur",
    ],
  },
  {
    id: "bif",
    slug: "bif",
    title: "B.I.F",
    shortDescription:
      "Portail web bancaire et entrepôt de données pour des clients professionnels.",
    fullDescription:
      "B.I.F est un projet de portail web développé dans le cadre d'une approche Agile pour une banque. L'objectif était de permettre à des clients professionnels d'accéder à leurs données monétiques, de générer des rapports CSV/XLS, d'éditer des états PDF et d'extraire des données. Le projet a été mené en équipe avec des rôles définis comme Scrum Master, Technical Leader et développeurs/testeurs, avec une forte collaboration autour de la conception, du développement et des tests.",
    year: 2024,
    category: "Application Web",
    size: "small",
    technologies: ["HTML", "CSS", "PHP", "MySQL / MariaDB"],
    coverImage: "/assets/projects/bif/background.png",
    icon: "/assets/projects/bif/logo.png",
    gallery: [
      "/assets/projects/bif/screen1.png",
      "/assets/projects/bif/screen2.png",
      "/assets/projects/bif/screen3.png",
      "/assets/projects/bif/screen4.png",
      "/assets/projects/bif/screen5.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/BIF",
    learnings: [
      "Développement d'un portail web orienté métier",
      "Travail en équipe avec méthodologie Agile",
      "Conception d'une interface pour l'exploitation de données",
      "Gestion de livrables techniques et de tests",
    ],
    difficulties: [
      "Compréhension des besoins métier liés aux données monétiques",
      "Coordination des rôles au sein de l'équipe",
      "Conception d'une interface claire pour plusieurs fonctionnalités de reporting",
    ],
  },
  {
    id: "travia",
    slug: "travia",
    title: "TRAVIA",
    shortDescription:
      "Plateforme web de réservation de trajets interplanétaires dans l'univers Star Wars.",
    fullDescription:
      "TRAVIA est une application web immersive de réservation de trajets intergalactiques, pensée dans l'univers de Star Wars. Le projet proposait une interface ergonomique et responsive permettant de rechercher, visualiser et réserver des trajets entre différentes planètes. Parmi les défis : la modélisation d'itinéraires, la gestion des contraintes de l'univers, la sécurité des données et la conception d'une expérience utilisateur cohérente.",
    year: 2024,
    category: "Application Web",
    size: "large",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL / MariaDB"],
    coverImage: "/assets/projects/travia/background.png",
    icon: "/assets/projects/travia/logo.png",
    gallery: [
      "/assets/projects/travia/screen1.png",
      "/assets/projects/travia/screen2.png",
      "/assets/projects/travia/screen3.png",
      "/assets/projects/travia/screen4.png",
      "/assets/projects/travia/screen5.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/Travia",
    learnings: [
      "Développement full stack d'une plateforme de réservation",
      "Conception UX/UI dans un univers thématique fort",
      "Travail collaboratif avec itérations Agile",
      "Gestion de fonctionnalités métier complexes",
    ],
    difficulties: [
      "Modélisation des trajets et correspondances",
      "Intégration d'une expérience immersive cohérente",
      "Gestion des contraintes métier et de l'ergonomie",
    ],
  },
  {
    id: "codex-naturalis",
    slug: "codex-naturalis",
    title: "Codex Naturalis",
    shortDescription:
      "Adaptation numérique du jeu de société Codex Naturalis en Java.",
    fullDescription:
      "Codex Naturalis est une adaptation numérique du jeu de société du même nom pour 1 à 4 joueurs. Le projet consistait à reproduire fidèlement les mécaniques du jeu tout en proposant une expérience fluide et immersive. Le développement s'est concentré sur la gestion du plateau, les interactions entre joueurs, la confidentialité des cartes et l'intégration harmonieuse des éléments visuels.",
    year: 2024,
    category: "Application Bureau",
    size: "large",
    technologies: ["Java"],
    coverImage: "/assets/projects/codex/background.png",
    icon: "/assets/projects/codex/logo.png",
    gallery: [
      "/assets/projects/codex/screen1.png",
      "/assets/projects/codex/screen2.png",
      "/assets/projects/codex/screen3.png",
      "/assets/projects/codex/screen4.png",
      "/assets/projects/codex/screen5.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/Codex-Naturalis",
    learnings: [
      "Programmation orientée objet en Java",
      "Gestion d'un jeu multijoueur avec logique de plateau",
      "Manipulation de structures de données adaptées",
      "Organisation d'un projet applicatif en équipe",
    ],
    difficulties: [
      "Gestion des interactions entre joueurs",
      "Représentation du plateau et des cartes",
      "Préservation de la confidentialité des informations en multijoueur",
    ],
  },
  {
    id: "qix",
    slug: "qix",
    title: "QIX",
    shortDescription:
      "Recréation du jeu vidéo QIX en Python avec une bibliothèque graphique universitaire.",
    fullDescription:
      "QIX est une recréation du jeu vidéo de 1981 développée en Python. Le projet s'appuie sur une bibliothèque graphique rudimentaire utilisée dans le cadre universitaire, ce qui impose des contraintes proches de celles des premiers développeurs de jeux vidéo. Il a permis d'explorer la logique de jeu, la résolution de problèmes et la programmation graphique dans un cadre volontairement limité.",
    year: 2024,
    category: "Jeu vidéo",
    size: "small",
    technologies: ["Python"],
    coverImage: "/assets/projects/qix/background.png",
    icon: "/assets/projects/qix/logo.png",
    gallery: [
      "/assets/projects/qix/screen1.png",
      "/assets/projects/qix/screen2.png",
      "/assets/projects/qix/screen3.png",
      "/assets/projects/qix/screen4.png",
      "/assets/projects/qix/screen5.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/QIX",
    learnings: [
      "Programmation de logique de jeu en Python",
      "Gestion d'une interface graphique simple",
      "Résolution de problèmes sous contraintes techniques",
      "Approche algorithmique d'un gameplay rétro",
    ],
    difficulties: [
      "Développement avec une bibliothèque graphique limitée",
      "Reproduction fidèle des mécaniques de jeu",
      "Gestion de l'ergonomie malgré des outils simples",
    ],
  },
  {
    id: "exploration-algorithmique",
    slug: "exploration-algorithmique",
    title: "Exploration Algorithmique",
    shortDescription:
      "Implémentation en Python d'algorithmes de théorie des automates.",
    fullDescription:
      "Ce projet consistait à implémenter en Python un ensemble de fonctions permettant de manipuler et transformer des automates finis. Les automates étaient représentés avec des structures de données dédiées, et plusieurs opérations ont été développées : déterminisation, complémentation, minimisation, intersection et différence de langages. Le projet mettait l'accent sur la rigueur algorithmique, la modularité du code et l'efficacité des traitements.",
    year: 2024,
    category: "Algorithmique",
    size: "small",
    technologies: ["Python"],
    coverImage: "/assets/projects/graphes/background.png",
    icon: "/assets/projects/graphes/logo.png",
    gallery: [
      "/assets/projects/graphes/screen1.png",
      "/assets/projects/graphes/screen2.png",
      "/assets/projects/graphes/screen3.png",
      "/assets/projects/graphes/screen4.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/Automates-SAE",
    learnings: [
      "Mise en pratique de la théorie des automates",
      "Implémentation d'algorithmes en Python",
      "Conception modulaire et commentée",
      "Travail sur l'efficacité algorithmique",
    ],
    difficulties: [
      "Modélisation correcte des automates",
      "Implémentation rigoureuse des transformations",
      "Gestion de la complexité des opérations sur les langages",
    ],
  },
  {
    id: "projet-unesco",
    slug: "projet-unesco",
    title: "Projet UNESCO",
    shortDescription:
      "Site web responsive de médiation culturelle autour de Memphis et de sa nécropole.",
    fullDescription:
      "Le projet UNESCO est un site web responsive de médiation culturelle consacré à la ville de Memphis et à sa nécropole. L'objectif était de proposer une solution simple, accessible et attractive pour informer les utilisateurs sur l'histoire du lieu, les bâtiments à visiter, les informations pratiques et l'organisation d'un voyage. Ce projet met en valeur les bases du développement web et la conception d'une expérience informative orientée utilisateur.",
    year: 2024,
    category: "Site Web",
    size: "small",
    technologies: ["HTML", "CSS", "PHP", "MySQL / MariaDB"],
    coverImage: "/assets/projects/unesco/background.png",
    icon: "/assets/projects/unesco/logo.png",
    gallery: [
      "/assets/projects/unesco/screen1.png",
      "/assets/projects/unesco/screen2.png",
      "/assets/projects/unesco/screen3.png",
      "/assets/projects/unesco/screen4.png",
      "/assets/projects/unesco/screen5.png",
    ],
    githubUrl: "https://github.com/RaphaelDAV/Unesco",
    liveUrl: "https://perso-etudiant.u-pem.fr/~julien.synaeve/memphis",
    learnings: [
      "Création d'un site web responsive",
      "Structuration de contenu culturel et touristique",
      "Développement web avec HTML, CSS, PHP et MySQL",
      "Conception d'une interface accessible et informative",
    ],
    difficulties: [
      "Organiser une grande quantité de contenu",
      "Rendre l'interface claire pour différents profils d'utilisateurs",
      "Créer une expérience responsive cohérente",
    ],
  },
];