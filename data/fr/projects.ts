import { Project } from "@/types/project";

/** Ordered list with sizes — determines display order and card size */
export const projectOrder: { id: string; size: "large" | "small" }[] = [
  { id: "eiffel-time", size: "large" },
  { id: "portfolio-next", size: "small" },
  { id: "travia", size: "small" },
  { id: "wikirace", size: "large" },
  { id: "codex-naturalis", size: "large" },
  { id: "qix", size: "small" },
  { id: "snchess", size: "small" },
  { id: "bif", size: "small" },
  { id: "exploration-algorithmique", size: "small" },
  { id: "projet-unesco", size: "small" },
];

export const projects: Project[] = [
  {
    id: "eiffel-time",
    slug: "eiffel-time",
    title: "Eiffel Time",
    shortDescription:
      "Plateforme de gestion scolaire centralisée (web & mobile) pour étudiants et enseignants.",
    fullDescription:
      "Eiffel Time (INGRID) est une application de gestion scolaire conçue pour centraliser les informations académiques au sein d’un établissement. Accessible sur web et mobile, elle permet aux étudiants, enseignants et personnels administratifs de consulter les emplois du temps, gérer les absences, saisir et consulter les notes, ainsi que communiquer via une messagerie intégrée. L’objectif est de simplifier la gestion pédagogique et d’améliorer la communication grâce à une solution moderne, performante et intuitive.",
    year: 2026,
    category: "Web & Mobile App",
    technologies: [
      "React",
      "Vite",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "NativeWind",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Turborepo",
      "pnpm"
    ],
    liveUrl: "https://eiffel-time.jawedessahli.com",
    coverImage: "/assets/projects/eiffel-time/background.png",
    icon: "/assets/projects/eiffel-time/logo.png",
    gallery: [
      "/assets/projects/eiffel-time/screen1.png",
      "/assets/projects/eiffel-time/screen2.png",
      "/assets/projects/eiffel-time/screen3.png",
      "/assets/projects/eiffel-time/screen4.png",
      "/assets/projects/eiffel-time/screen5.png",
    ],
    learnings: [
      "Mise en place d'une architecture monorepo avec partage de code",
      "Développement simultané d'applications web et mobile",
      "Création d'une API REST sécurisée avec Django",
      "Gestion de l'authentification JWT et des permissions",
      "Structuration d'un projet fullstack scalable"
    ],
    difficulties: [
      "Migration vers une architecture monorepo complexe",
      "Synchronisation du développement entre web et mobile",
      "Gestion des dépendances et compatibilités (Expo, NativeWind)",
      "Refactorisation du code pour le partage entre plateformes",
      "Mise en place d'une architecture évolutive et maintenable"
    ],
  },
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://raphaeldaviot.tech/",
    coverImage: "/assets/projects/portfolio/background.png",
    icon: "/assets/projects/portfolio/logo.png",
    gallery: [
      "/assets/projects/portfolio/screen1.png",
      "/assets/projects/portfolio/screen2.png",
      "/assets/projects/portfolio/screen3.png",
      "/assets/projects/portfolio/screen4.png",
      "/assets/projects/portfolio/screen5.png",
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
      "Le projet SCN'Hess représente une solution innovante pour la réservation de billets de train dans le contexte de l'ouverture à la concurrence du marché ferroviaire. Notre objectif était de créer une plateforme intuitive et performante permettant aux utilisateurs de réserver facilement des trajets en TGV. \n L'un des principaux défis rencontrés était la gestion complexe du système de réservation, incluant la disponibilité des places, les options personnalisées et le calendrier des prix variables. La mise en place d'une architecture robuste basée sur une base de données relationnelle a été cruciale pour assurer la fiabilité du système. \n La gestion des options personnalisées (place tranquille, prise électrique, bagages supplémentaires) et l'implémentation du système de tarification dynamique ont également représenté des défis techniques importants. \n L'interface utilisateur a été conçue pour offrir une expérience fluide et intuitive, en mettant l'accent sur la visualisation claire du panier d'achat et la simplicité du processus de paiement. \n Malgré ces défis techniques, une approche méthodique et centrée sur l'utilisateur nous a permis de développer une application complète répondant aux exigences spécifiées par le Product Owner, offrant ainsi une alternative compétitive aux plateformes existantes.",
    year: 2024,
    category: "Application Web",
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
      "Notre projet consistait à développer un jeu de société numérique basé sur Wikipédia, appelé Wikirace. Le principe repose sur une mécanique simple mais stimulante : les joueurs partent d’un article de Wikipédia et doivent atteindre une page cible en un minimum de clics, le tout dans un temps limité. L’expérience a été pensée à la fois comme ludique et éducative, avec une identité visuelle rétro inspirée des jeux de course, afin de rendre l’univers immersif et attractif. \n Le développement a représenté plusieurs défis techniques. Nous avons conçu le front-end en React TypeScript, avec une interface moderne et modulaire, et implémenté une base de données MongoDB pour gérer les parties. L’intégration de WebSocket a permis la mise en place d’une communication en temps réel, notamment pour le chat entre joueurs et la synchronisation des données de partie. La gestion du multijoueur, des artefacts (bonus/malus) et de la progression en direct a nécessité une architecture robuste et des tests poussés pour assurer fluidité et stabilité. \n Les objectifs principaux étaient de proposer un jeu accessible sur le web et en version mobile, de garantir une expérience utilisateur fluide en solo comme en multijoueur, et d’offrir des fonctionnalités motivantes (classements, inventaire d’artefacts, personnalisation). Ce projet nous a permis de développer nos compétences en développement fullstack et en gestion de projet collaboratif, tout en relevant des problématiques concrètes de synchronisation, de conception UI/UX et d’optimisation des performances.",
    year: 2025,
    category: "Application Web",
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
      "Dans le cadre de notre formation, nous avons participé à un projet ambitieux visant à développer un portail Web et un entrepôt de données pour une banque. \n Ce projet s’inscrit dans une approche Agile, avec un rôle attribué à chaque membre de l’équipe de 5 personnes, incluant Scrum Master, Technical Leader et Développeurs/Testeurs. Notre mission consistait à créer une solution permettant aux clients professionnels (e-commerce, commerçants, artisans) d’accéder facilement à leurs données monétiques. Le portail offre des fonctionnalités variées : consultation en temps réel, génération de rapports au format CSV/XLS, édition d’états en PDF et extraction de données. \n Nous avons conçu l’application en suivant une méthodologie Agile, avec une forte collaboration entre les rôles. Chaque membre a contribué à des livrables spécifiques, notamment le dossier de conception technique, le développement des fonctionnalités principales, et les tests logiciels. L’architecture technique intègre une base de données relationnelle optimisée pour la manipulation des informations monétiques, et une interface utilisateur intuitive pour une expérience fluide. Le travail en équipe a été renforcé par des réunions quotidiennes (daily meetings) et des sessions de brainstorming pour résoudre efficacement les problèmes rencontrés.",
    year: 2024,
    category: "Application Web",
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
      "Le projet TRAVIA propose une plateforme innovante pour réserver des trajets intergalactiques, s'inscrivant dans l'univers de Star Wars . Cette application web s’adresse à des voyageurs galactiques fictifs et offre une expérience immersive dans un univers riche en planètes, factions et restrictions impériales. L'objectif est de modéliser un système de transport galactique efficace tout en respectant les contraintes de cet univers. Ce projet met à l'épreuve les compétences des étudiants en développement web full-stack et en conception d’expériences utilisateur (UX/UI), à travers des fonctionnalités complexes comme la recherche d'itinéraires optimaux et l'intégration de cartes interactives. \n L'application propose une interface ergonomique et responsive, où les utilisateurs peuvent rechercher, visualiser et réserver leurs trajets entre les planètes. Les fonctionnalités incluent la gestion des correspondances, la visualisation des coûts et des contraintes liées à l’Empire. Une attention particulière est portée à la sécurité des données et à la conformité RGPD, renforçant la crédibilité et la professionnalité du projet. \n TRAVIA reflète également une approche créative et collaborative, avec une méthodologie Agile favorisant la répartition des tâches et l'itération continue. Chaque membre de l’équipe a contribué à des fonctionnalités spécifiques, comme la conception du moteur de recherche, des pages de commande, et de gestion des trajets passés et futurs.",
    year: 2024,
    category: "Application Web",
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
      "Le projet Codex Naturalis représente une prouesse technique dans le domaine du développement d'applications informatiques de jeux de société. Notre objectif était de traduire fidèlement les mécanismes du jeu Codex Naturalis dans une expérience numérique immersive pour 1 à 4 joueurs, tout en adoptant un style visuel distinctif . \n L'un des principaux défis auxquels nous avons été confrontés était la gestion complexe du board de jeu et des interactions entre les joueurs. La création d'une structure de données basée sur une HashMap pour associer les cartes à une position a été cruciale pour résoudre cette difficulté. \n De plus, la gestion des différents joueurs et la préservation de la confidentialité des cartes en multijoueur ont représenté des défis significatifs. \n En raison de nos choix esthétiques, comme l'intégration d'éléments visuels, nous avons également dû adapter notre code pour une intégration harmonieuse de ces éléments tout en préservant les performances et l'ergonomie du jeu. \ Malgré ces défis, une organisation méthodique et une collaboration efficace ont permis de surmonter ces obstacles techniques, aboutissant à la création d'une application réussie offrant une expérience de jeu fluide et immersive pour les joueurs.",
    year: 2024,
    category: "Application Bureau",
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
      "QIX est un jeu de puzzle de traçage de lignes qui a marqué l'année 1981, et notre défi consiste à ressusciter cette expérience à travers la programmation d'un jeu vidéo en utilisant le langage Python. \n Ce projet, réalisé avec une bibliothèque exclusive à notre université, offre un aperçu authentique du travail des développeurs des années 80, qui étaient limités à une interface graphique rudimentaire. \n L'absence d'outils sophistiqués nous pousse à exploiter notre créativité et à affiner nos compétences de résolution de problèmes pour surmonter les contraintes techniques. Le processus de recréation de QIX devient ainsi une aventure stimulante, nous confrontant à des défis similaires à ceux des pionniers du développement de jeux vidéo. En parallèle, ce projet sert de passerelle captivante vers le langage Python, nous offrant une immersion pratique et concrète dans ses mécanismes. \n En fin de compte, il représente bien plus qu'un simple exercice de programmation – c'est une exploration rétro-créative qui enrichit notre compréhension de l'histoire du développement de jeux et affine nos compétences en résolution de problèmes.",
    year: 2024,
    category: "Jeu vidéo",
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
      "Ce projet d'Exploration Algorithmique représente une application approfondie des concepts et algorithmes fondamentaux de la théorie des automates. L'objectif principal était d'implémenter en Python un ensemble complet de fonctions permettant de manipuler et transformer des automates finis. \n Le défi majeur de ce projet était la modélisation efficace des automates et l'implémentation rigoureuse des algorithmes de transformation associés. Nous avons représenté les automates sous forme de dictionnaires Python, avec des structures spécifiques pour les alphabets, états, transitions, états initiaux et terminaux. \n Parmi les fonctionnalités développées, la déterminisation, la complémentation et la minimisation des automates ont constitué des défis techniques particulièrement stimulants. La gestion des automates produits pour calculer l'intersection et la différence de langages a également nécessité une approche méthodique et une maîtrise approfondie des concepts théoriques. \n Un aspect essentiel de notre travail a été l'attention portée à l'efficacité algorithmique et à la conception modulaire du code. Chaque fonction a été soigneusement commentée et testée pour garantir sa conformité avec les spécifications du projet. \n Ce projet a permis de mettre en pratique des concepts théoriques avancés dans un contexte d'application concrète, tout en développant des compétences essentielles en algorithmique et en programmation Python.",
    year: 2024,
    category: "Algorithmique",
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
      "Au cours de ma formation en développement web. J'ai acquis des connaissances approfondies dans les langages HTML et CSS, qui sont les fondements de la création de sites web. \n L’objectif est la création d’un site internet dit « responsive » qui aura pour but de mettre en avant la ville de Memphis et sa nécropole. Le but est de proposer une solution gratuite et simple pour que chaque utilisateur, quel que soit son profil, puisse utiliser à sa convenance le site internet pour se renseigner sur la ville et son histoire, les bâtiments à visiter, les endroits où manger, etc. Le site internet devra donner envie aux utilisateurs de voyager et devra pouvoir proposer tout le nécessaire (Infos pratiques, moyen de locomotion, location, etc.) afin d’y organiser un voyage.", year: 2024,
    category: "Site Web",
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