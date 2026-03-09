import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  // Frontend
  {
    id: "html",
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "Maîtrise du HTML5 sémantique, de l'accessibilité et des bonnes pratiques de structuration de contenu web.",
    tools: ["Emmet", "VS Code"],
    examples: ["Portfolio", "Sites vitrine", "Applications web"],
  },
  {
    id: "css",
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "CSS3 avancé avec Flexbox, Grid, animations et responsive design. Utilisation de frameworks CSS modernes.",
    tools: ["Tailwind CSS", "SASS", "PostCSS"],
    examples: ["Interfaces responsive", "Animations CSS", "Design systems"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "JavaScript ES6+ pour le développement frontend et backend. DOM, async/await, fetch API, modules.",
    tools: ["Node.js", "npm", "Webpack"],
    examples: ["Applications interactives", "API REST", "Scripts d'automatisation"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "frontend",
    level: "intermediaire",
    description:
      "Typage statique pour JavaScript, interfaces, generics, et intégration avec React et Node.js.",
    tools: ["VS Code", "ts-node", "ESLint"],
    examples: ["Portfolio Next.js", "APIs typées", "Composants React"],
  },
  {
    id: "react",
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "frontend",
    level: "intermediaire",
    description:
      "Développement d'interfaces utilisateur avec React. Hooks, state management, composants réutilisables.",
    tools: ["Next.js", "Vite", "React DevTools"],
    examples: ["Portfolio", "Applications web", "Dashboards"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    category: "frontend",
    level: "intermediaire",
    description:
      "Framework React pour la production. App Router, SSR, SSG, API routes, optimisation des performances.",
    tools: ["Vercel", "TypeScript", "Tailwind CSS"],
    examples: ["Portfolio personnel", "Sites web performants"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "Framework CSS utility-first pour un développement rapide et cohérent d'interfaces modernes.",
    tools: ["PostCSS", "VS Code IntelliSense"],
    examples: ["Portfolio", "Composants UI", "Design responsive"],
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Environnement d'exécution JavaScript côté serveur. Création d'APIs REST, gestion de fichiers, middlewares.",
    tools: ["Express.js", "npm", "Nodemon"],
    examples: ["APIs REST", "Serveurs web", "Scripts backend"],
  },
  {
    id: "java",
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Programmation orientée objet avec Java. Design patterns, collections, gestion d'exceptions, JavaFX.",
    tools: ["IntelliJ IDEA", "Maven", "JUnit"],
    examples: ["Applications desktop", "Projets universitaires", "API"],
  },
  {
    id: "php",
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Développement web côté serveur avec PHP. MVC, sessions, formulaires, intégration MySQL.",
    tools: ["XAMPP", "Composer", "Laravel"],
    examples: ["Sites dynamiques", "CMS", "Formulaires"],
  },
  {
    id: "python",
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Langage polyvalent pour scripts, automatisation, data et développement web.",
    tools: ["pip", "Flask", "Jupyter"],
    examples: ["Scripts d'automatisation", "Analyse de données", "API"],
  },

  // Database
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    category: "database",
    level: "intermediaire",
    description:
      "SGBD relationnel avancé. Requêtes complexes, fonctions, triggers, optimisation.",
    tools: ["pgAdmin", "DBeaver", "psql"],
    examples: ["Bases de données projet", "Requêtes analytiques"],
  },
  {
    id: "mysql",
    name: "MySQL / MariaDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "database",
    level: "intermediaire",
    description:
      "Modélisation relationnelle, requêtes SQL, procédures stockées et administration de bases de données.",
    tools: ["phpMyAdmin", "MySQL Workbench"],
    examples: ["Sites web dynamiques", "Projets PHP"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    category: "database",
    level: "debutant",
    description:
      "Base de données NoSQL orientée documents. Schémas flexibles, aggregation pipeline.",
    tools: ["MongoDB Compass", "Mongoose"],
    examples: ["Projets Node.js", "APIs REST"],
  },

  // DevOps
  {
    id: "docker",
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    category: "devops",
    level: "intermediaire",
    description:
      "Conteneurisation d'applications. Dockerfile, Docker Compose, environnements reproductibles.",
    tools: ["Docker Desktop", "Docker Compose", "Docker Hub"],
    examples: ["Environnements de développement", "Déploiement"],
  },
  {
    id: "linux",
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    category: "devops",
    level: "intermediaire",
    description:
      "Administration système Linux. Ligne de commande, scripts bash, gestion de services.",
    tools: ["Ubuntu", "Debian", "Bash"],
    examples: ["Serveurs", "Scripts système", "VM"],
  },
  {
    id: "git",
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "devops",
    level: "avance",
    description:
      "Gestion de versions avec Git. Branches, merges, rebases, résolution de conflits, workflow collaboratif.",
    tools: ["GitHub", "GitLab", "VS Code Git"],
    examples: ["Projets collaboratifs", "CI/CD", "Open source"],
  },
  {
    id: "github",
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    category: "devops",
    level: "avance",
    description:
      "Plateforme de collaboration. Pull requests, issues, GitHub Actions, GitHub Pages.",
    tools: ["GitHub Actions", "GitHub Pages", "GitHub CLI"],
    examples: ["Projets open source", "Portfolio", "CI/CD"],
  },
  {
    id: "cicd",
    name: "CI/CD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    category: "devops",
    level: "debutant",
    description:
      "Notions d'intégration continue et de déploiement continu. Pipelines automatisés.",
    tools: ["GitHub Actions", "Vercel", "Docker"],
    examples: ["Déploiement automatique", "Tests automatisés"],
  },

  // Other
  {
    id: "vba",
    name: "VBA",
    logo: "/assets/skills/vba.png",
    category: "other",
    level: "avance",
    description:
      "Automatisation avancée dans l'écosystème Microsoft Office. Macros, formulaires, interaction avec bases de données.",
    tools: ["Excel", "Access", "Word"],
    examples: ["Automatisation de rapports", "Outils métier", "Formulaires"],
  },
  {
    id: "c",
    name: "C",
    logo: "/assets/skills/c.png",
    category: "other",
    level: "intermediaire",
    description:
      "Programmation système en C. Pointeurs, gestion mémoire, structures de données.",
    tools: ["GCC", "Make", "VS Code"],
    examples: ["Algorithmes", "Projets système", "Exercices universitaires"],
  },
  {
    id: "api-rest",
    name: "API REST",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    category: "other",
    level: "intermediaire",
    description:
      "Conception et consommation d'APIs RESTful. Routes, méthodes HTTP, JSON, authentification.",
    tools: ["Postman", "Insomnia", "Swagger"],
    examples: ["Backend Node.js", "Intégrations tierces", "Projets full stack"],
  },
];
