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
      "Strong command of semantic HTML5, accessibility, and web content structuring best practices.",
    tools: ["Emmet", "VS Code"],
    examples: ["Portfolio", "Showcase websites", "Web applications"],
  },
  {
    id: "css",
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "Advanced CSS3 with Flexbox, Grid, animations, and responsive design. Use of modern CSS frameworks.",
    tools: ["Tailwind CSS", "SASS", "PostCSS"],
    examples: ["Responsive interfaces", "CSS animations", "Design systems"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "JavaScript ES6+ for frontend and backend development. DOM, async/await, fetch API, modules.",
    tools: ["Node.js", "npm", "Webpack"],
    examples: ["Interactive apps", "REST APIs", "Automation scripts"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "frontend",
    level: "intermediaire",
    description:
      "Static typing for JavaScript, interfaces, generics, and integration with React and Node.js.",
    tools: ["VS Code", "ts-node", "ESLint"],
    examples: ["Next.js portfolio", "Typed APIs", "React components"],
  },
  {
    id: "react",
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "frontend",
    level: "intermediaire",
    description:
      "Building user interfaces with React. Hooks, state management, and reusable components.",
    tools: ["Next.js", "Vite", "React DevTools"],
    examples: ["Portfolio", "Web applications", "Dashboards"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    category: "frontend",
    level: "intermediaire",
    description:
      "Production-ready React framework. App Router, SSR, SSG, API routes, and performance optimization.",
    tools: ["Vercel", "TypeScript", "Tailwind CSS"],
    examples: ["Personal portfolio", "High-performance websites"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "frontend",
    level: "avance",
    description:
      "Utility-first CSS framework for fast and consistent modern interface development.",
    tools: ["PostCSS", "VS Code IntelliSense"],
    examples: ["Portfolio", "UI components", "Responsive design"],
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Server-side JavaScript runtime. Building REST APIs, file handling, and middleware.",
    tools: ["Express.js", "npm", "Nodemon"],
    examples: ["REST APIs", "Web servers", "Backend scripts"],
  },
  {
    id: "java",
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Object-oriented programming with Java. Design patterns, collections, exception handling, JavaFX.",
    tools: ["IntelliJ IDEA", "Maven", "JUnit"],
    examples: ["Desktop apps", "Academic projects", "APIs"],
  },
  {
    id: "php",
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Server-side web development with PHP. MVC, sessions, forms, and MySQL integration.",
    tools: ["XAMPP", "Composer", "Laravel"],
    examples: ["Dynamic websites", "CMS", "Forms"],
  },
  {
    id: "python",
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "backend",
    level: "intermediaire",
    description:
      "Versatile language for scripting, automation, data, and web development.",
    tools: ["pip", "Flask", "Jupyter"],
    examples: ["Automation scripts", "Data analysis", "APIs"],
  },

  // Database
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    category: "database",
    level: "intermediaire",
    description:
      "Advanced relational DBMS. Complex queries, functions, triggers, and optimization.",
    tools: ["pgAdmin", "DBeaver", "psql"],
    examples: ["Project databases", "Analytical queries"],
  },
  {
    id: "mysql",
    name: "MySQL / MariaDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "database",
    level: "intermediaire",
    description:
      "Relational modeling, SQL queries, stored procedures, and database administration.",
    tools: ["phpMyAdmin", "MySQL Workbench"],
    examples: ["Dynamic websites", "PHP projects"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    category: "database",
    level: "debutant",
    description:
      "Document-oriented NoSQL database. Flexible schemas and aggregation pipeline.",
    tools: ["MongoDB Compass", "Mongoose"],
    examples: ["Node.js projects", "REST APIs"],
  },

  // DevOps
  {
    id: "docker",
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    category: "devops",
    level: "intermediaire",
    description:
      "Application containerization. Dockerfile, Docker Compose, reproducible environments.",
    tools: ["Docker Desktop", "Docker Compose", "Docker Hub"],
    examples: ["Development environments", "Deployment"],
  },
  {
    id: "linux",
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    category: "devops",
    level: "intermediaire",
    description:
      "Linux system administration. Command line, bash scripts, service management.",
    tools: ["Ubuntu", "Debian", "Bash"],
    examples: ["Servers", "System scripts", "VMs"],
  },
  {
    id: "git",
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "devops",
    level: "avance",
    description:
      "Version control with Git. Branches, merges, rebases, conflict resolution, collaborative workflows.",
    tools: ["GitHub", "GitLab", "VS Code Git"],
    examples: ["Collaborative projects", "CI/CD", "Open source"],
  },
  {
    id: "github",
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    category: "devops",
    level: "avance",
    description:
      "Collaboration platform. Pull requests, issues, GitHub Actions, GitHub Pages.",
    tools: ["GitHub Actions", "GitHub Pages", "GitHub CLI"],
    examples: ["Open-source projects", "Portfolio", "CI/CD"],
  },
  {
    id: "cicd",
    name: "CI/CD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    category: "devops",
    level: "debutant",
    description:
      "Fundamentals of continuous integration and continuous deployment. Automated pipelines.",
    tools: ["GitHub Actions", "Vercel", "Docker"],
    examples: ["Automatic deployment", "Automated tests"],
  },

  // Other
  {
    id: "vba",
    name: "VBA",
    logo: "/assets/skills/vba.png",
    category: "other",
    level: "avance",
    description:
      "Advanced automation in the Microsoft Office ecosystem. Macros, forms, and database interactions.",
    tools: ["Excel", "Access", "Word"],
    examples: ["Report automation", "Business tools", "Forms"],
  },
  {
    id: "c",
    name: "C",
    logo: "/assets/skills/c.png",
    category: "other",
    level: "intermediaire",
    description:
      "Systems programming in C. Pointers, memory management, and data structures.",
    tools: ["GCC", "Make", "VS Code"],
    examples: ["Algorithms", "Systems projects", "Academic exercises"],
  },
  {
    id: "api-rest",
    name: "API REST",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    category: "other",
    level: "intermediaire",
    description:
      "Design and consumption of RESTful APIs. Routes, HTTP methods, JSON, and authentication.",
    tools: ["Postman", "Insomnia", "Swagger"],
    examples: ["Node.js backend", "Third-party integrations", "Full-stack projects"],
  },
];
