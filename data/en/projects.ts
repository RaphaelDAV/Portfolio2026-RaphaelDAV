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
      "Centralized school management platform (web & mobile) for students and teachers.",
    fullDescription:
      "Eiffel Time (INGRID) is a school management application designed to centralize academic information within an institution. Accessible on both web and mobile, it allows students, teachers, and administrative staff to view schedules, manage absences, enter and consult grades, and communicate via an integrated messaging system. The goal is to simplify educational management and improve communication through a modern, high-performance, and intuitive solution.",
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
      "Setting up a monorepo architecture with shared code",
      "Simultaneous development of web and mobile applications",
      "Building a secure REST API with Django",
      "Managing JWT authentication and permissions",
      "Structuring a scalable fullstack project"
    ],
    difficulties: [
      "Migrating to a complex monorepo architecture",
      "Synchronizing development between web and mobile",
      "Managing dependencies and compatibility (Expo, NativeWind)",
      "Refactoring code for cross-platform sharing",
      "Setting up a scalable and maintainable architecture"
    ],
  },
  {
    id: "portfolio-next",
    slug: "portfolio-next",
    title: "My Portfolio",
    shortDescription:
      "Personal portfolio built with Next.js, TypeScript, and advanced UI animations.",
    fullDescription:
      "This portfolio is a modern web application designed to present my profile, skills, and projects in an immersive way. Built with Next.js and TypeScript, it emphasizes performance, accessibility, and user experience. The interface combines a custom artistic direction, smooth transitions with Framer Motion, a reusable component system, and a structured data architecture to facilitate future updates.",
    year: 2026,
    category: "Website",
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
      "Structuring a Next.js application into reusable components",
      "Building modern interfaces with Tailwind CSS",
      "Animating interactions with Framer Motion",
      "Organizing content through a TypeScript data layer",
    ],
    difficulties: [
      "Finding a balance between visual identity and readability",
      "Designing smooth animations without degrading performance",
      "Maintaining a scalable architecture for new projects",
    ],
  },
  {
    id: "snchess",
    slug: "snchess",
    title: "SCN'Hess",
    shortDescription:
      "TGV train ticket booking platform developed as a team project.",
    fullDescription:
      "The SCN'Hess project represents an innovative solution for booking train tickets in the context of the opening of the railway market to competition. Our goal was to create an intuitive and high-performance platform allowing users to easily book TGV trips. \n One of the main challenges encountered was the complex management of the booking system, including seat availability, personalized options, and variable pricing schedules. Setting up a robust architecture based on a relational database was crucial to ensure system reliability. \n Managing custom options (quiet seat, power outlet, extra luggage) and implementing the dynamic pricing system also represented significant technical challenges. \n The user interface was designed to provide a smooth and intuitive experience, with a focus on clear shopping cart visualization and a simple payment process. \n Despite these technical challenges, a methodical, user-centered approach allowed us to develop a complete application meeting the requirements specified by the Product Owner, offering a competitive alternative to existing platforms.",
    year: 2024,
    category: "Web Application",
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
      "Designing a full stack web application",
      "Managing booking business logic",
      "Structuring a relational database",
      "Teamwork with Agile methodology",
    ],
    difficulties: [
      "Managing seat availability and booking options",
      "Implementing a variable pricing calendar",
      "Designing a clear interface for the user journey",
    ],
  },
  {
    id: "wikirace",
    slug: "wikirace",
    title: "Wikirace",
    shortDescription:
      "Multiplayer online web game based on Wikipedia with real-time communication.",
    fullDescription:
      "Our project involved developing a digital board game based on Wikipedia, called Wikirace. The concept is based on a simple yet stimulating mechanic: players start from a Wikipedia article and must reach a target page in as few clicks as possible, all within a time limit. The experience was designed to be both fun and educational, with a retro visual identity inspired by racing games to create an immersive and engaging universe. \n The development presented several technical challenges. We built the front-end in React TypeScript with a modern, modular interface, and implemented a MongoDB database to manage game sessions. WebSocket integration enabled real-time communication, including player chat and game data synchronization. Managing multiplayer, artifacts (bonuses/penalties), and live progression required a robust architecture and extensive testing to ensure fluidity and stability. \n The main goals were to offer a game accessible on web and mobile, to guarantee a smooth user experience in both solo and multiplayer modes, and to provide motivating features (leaderboards, artifact inventory, customization). This project helped us develop our fullstack development and collaborative project management skills, while tackling concrete challenges in synchronization, UI/UX design, and performance optimization.",
    year: 2025,
    category: "Web Application",
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
      "Interface development with React",
      "Real-time multiplayer management",
      "Data persistence with MongoDB",
      "Designing a collaborative web game",
    ],
    difficulties: [
      "Synchronizing data between players",
      "Managing real-time progression",
      "Stability and smoothness of the multiplayer experience",
    ],
  },
  {
    id: "bif",
    slug: "bif",
    title: "B.I.F",
    shortDescription:
      "Banking web portal and data warehouse for professional clients.",
    fullDescription:
      "As part of our training, we participated in an ambitious project aimed at developing a web portal and data warehouse for a bank. \n This project followed an Agile approach, with a role assigned to each member of the 5-person team, including Scrum Master, Technical Leader, and Developers/Testers. Our mission was to create a solution allowing professional clients (e-commerce, retailers, craftsmen) to easily access their payment data. The portal offers various features: real-time consultation, report generation in CSV/XLS format, PDF statement editing, and data extraction. \n We designed the application following an Agile methodology, with strong collaboration between roles. Each member contributed to specific deliverables, including the technical design document, development of core features, and software testing. The technical architecture integrates a relational database optimized for handling payment data, and an intuitive user interface for a smooth experience. Teamwork was reinforced through daily meetings and brainstorming sessions to efficiently resolve encountered issues.",
    year: 2024,
    category: "Web Application",
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
      "Developing a business-oriented web portal",
      "Teamwork with Agile methodology",
      "Designing an interface for data exploitation",
      "Managing technical deliverables and testing",
    ],
    difficulties: [
      "Understanding business requirements related to payment data",
      "Coordinating roles within the team",
      "Designing a clear interface for multiple reporting features",
    ],
  },
  {
    id: "travia",
    slug: "travia",
    title: "TRAVIA",
    shortDescription:
      "Web booking platform for interplanetary travel set in the Star Wars universe.",
    fullDescription:
      "The TRAVIA project proposes an innovative platform for booking intergalactic trips, set in the Star Wars universe. This web application targets fictional galactic travelers and offers an immersive experience in a rich universe full of planets, factions, and imperial restrictions. The goal is to model an efficient galactic transport system while respecting the constraints of this universe. This project tests students' skills in full-stack web development and user experience design (UX/UI), through complex features such as optimal route search and interactive map integration. \n The application provides an ergonomic and responsive interface where users can search, visualize, and book their trips between planets. Features include connection management, cost visualization, and Empire-related constraints. Particular attention is paid to data security and GDPR compliance, enhancing the project's credibility and professionalism. \n TRAVIA also reflects a creative and collaborative approach, with an Agile methodology promoting task distribution and continuous iteration. Each team member contributed to specific features, such as designing the search engine, booking pages, and management of past and future trips.",
    year: 2024,
    category: "Web Application",
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
      "Full stack development of a booking platform",
      "UX/UI design within a strong thematic universe",
      "Collaborative work with Agile iterations",
      "Managing complex business features",
    ],
    difficulties: [
      "Modeling trips and connections",
      "Integrating a cohesive immersive experience",
      "Handling business constraints and ergonomics",
    ],
  },
  {
    id: "codex-naturalis",
    slug: "codex-naturalis",
    title: "Codex Naturalis",
    shortDescription:
      "Digital adaptation of the Codex Naturalis board game in Java.",
    fullDescription:
      "The Codex Naturalis project represents a technical achievement in the field of board game application development. Our goal was to faithfully translate the mechanics of the Codex Naturalis game into an immersive digital experience for 1 to 4 players, while adopting a distinctive visual style. \n One of the main challenges we faced was the complex management of the game board and player interactions. Creating a data structure based on a HashMap to associate cards with positions was crucial to solving this difficulty. \n Additionally, managing different players and preserving card confidentiality in multiplayer represented significant challenges. \n Due to our aesthetic choices, such as integrating visual elements, we also had to adapt our code to harmoniously integrate these elements while preserving game performance and ergonomics. \n Despite these challenges, methodical organization and effective collaboration allowed us to overcome these technical obstacles, resulting in a successful application offering a smooth and immersive gaming experience for players.",
    year: 2024,
    category: "Desktop Application",
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
      "Object-oriented programming in Java",
      "Managing a multiplayer game with board logic",
      "Handling appropriate data structures",
      "Organizing an application project as a team",
    ],
    difficulties: [
      "Managing interactions between players",
      "Representing the board and cards",
      "Preserving information confidentiality in multiplayer",
    ],
  },
  {
    id: "qix",
    slug: "qix",
    title: "QIX",
    shortDescription:
      "Recreation of the QIX video game in Python using a university graphics library.",
    fullDescription:
      "QIX is a line-drawing puzzle game that made its mark in 1981, and our challenge was to revive this experience by programming a video game using the Python language. \n This project, carried out with a library exclusive to our university, offers an authentic glimpse into the work of developers from the 80s, who were limited to a rudimentary graphical interface. \n The absence of sophisticated tools pushes us to leverage our creativity and sharpen our problem-solving skills to overcome technical constraints. The process of recreating QIX thus becomes a stimulating adventure, confronting us with challenges similar to those faced by the pioneers of video game development. In parallel, this project serves as a captivating gateway to the Python language, offering us a practical and concrete immersion into its mechanics. \n Ultimately, it represents much more than a simple programming exercise — it is a retro-creative exploration that enriches our understanding of the history of game development and sharpens our problem-solving skills.",
    year: 2024,
    category: "Video Game",
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
      "Programming game logic in Python",
      "Managing a simple graphical interface",
      "Problem-solving under technical constraints",
      "Algorithmic approach to retro gameplay",
    ],
    difficulties: [
      "Development with a limited graphics library",
      "Faithful reproduction of game mechanics",
      "Managing ergonomics despite simple tools",
    ],
  },
  {
    id: "exploration-algorithmique",
    slug: "exploration-algorithmique",
    title: "Algorithmic Exploration",
    shortDescription:
      "Python implementation of automata theory algorithms.",
    fullDescription:
      "This Algorithmic Exploration project represents an in-depth application of fundamental concepts and algorithms from automata theory. The main objective was to implement in Python a complete set of functions for manipulating and transforming finite automata. \n The major challenge of this project was the efficient modeling of automata and the rigorous implementation of the associated transformation algorithms. We represented automata as Python dictionaries, with specific structures for alphabets, states, transitions, initial states, and terminal states. \n Among the developed features, determinization, complementation, and minimization of automata represented particularly stimulating technical challenges. Managing product automata to compute the intersection and difference of languages also required a methodical approach and a thorough mastery of theoretical concepts. \n An essential aspect of our work was the attention paid to algorithmic efficiency and the modular design of the code. Each function was carefully commented and tested to ensure compliance with the project specifications. \n This project allowed us to apply advanced theoretical concepts in a concrete application context, while developing essential skills in algorithms and Python programming.",
    year: 2024,
    category: "Algorithms",
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
      "Applying automata theory in practice",
      "Implementing algorithms in Python",
      "Modular and well-commented design",
      "Working on algorithmic efficiency",
    ],
    difficulties: [
      "Correct modeling of automata",
      "Rigorous implementation of transformations",
      "Managing the complexity of language operations",
    ],
  },
  {
    id: "projet-unesco",
    slug: "projet-unesco",
    title: "UNESCO Project",
    shortDescription:
      "Responsive cultural mediation website about Memphis and its necropolis.",
    fullDescription:
      "During my web development training, I gained in-depth knowledge of HTML and CSS, which are the foundations of website creation. \n The objective was to create a responsive website aimed at showcasing the city of Memphis and its necropolis. The goal is to provide a free and simple solution so that every user, regardless of their profile, can use the website at their convenience to learn about the city and its history, buildings to visit, places to eat, etc. The website should inspire users to travel and offer everything necessary (practical information, transportation, accommodation, etc.) to organize a trip.",
    year: 2024,
    category: "Website",
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
      "Building a responsive website",
      "Structuring cultural and tourism content",
      "Web development with HTML, CSS, PHP, and MySQL",
      "Designing an accessible and informative interface",
    ],
    difficulties: [
      "Organizing a large amount of content",
      "Making the interface clear for different user profiles",
      "Creating a consistent responsive experience",
    ],
  },
];