export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

type DictionaryValue = string | Dictionary;
interface Dictionary {
  [key: string]: DictionaryValue;
}

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    navbar: {
      home: "ACCUEIL",
      about: "À PROPOS",
      projects: "MES PROJETS",
      contact: "CONTACT",
      menuAriaLabel: "Menu",
    },
    hero: {
      student: "Étudiant",
      but: "BUT Informatique",
      downloadCv: "Télécharger mon CV",
      lookingForPrefix: "Je suis à la recherche d'une ",
      lookingForRole: "alternance",
      lookingForMiddle: " à partir de ",
      lookingForDate: "Septembre 2026",
      scroll: "Défiler",
    },
    about: {
      title: "Qui suis-je ?",
      subtitle: "Un Étudiant En Constante Évolution.",
      description:
        "En construction vers un profil d'ingénieur logiciel et manager éclairé.",
      viewProjects: "Voir mes projets",
      contact: "Me Contacter",
      presentationPrefix: "Étudiant en 3ème année de ",
      presentationStrong1: "BUT Informatique",
      presentationMiddle1:
        ", je suis ambitieux, organisé, et persévérant. Mes compétences en programmation sont polyvalentes, et je cherche à intégrer une ",
      presentationStrong2: "école d'ingénieur",
      presentationMiddle2:
        " après mon BUT pour faciliter mon entrée dans le monde professionnel. Je suis actuellement à la recherche d'une ",
      presentationStrong3: "alternance en informatique",
      presentationSuffix: " pour la rentrée 2026.",
      educationCardTitle: "Mes Diplômes",
      educationCardFooter: "Cliquer pour voir tous mes diplômes",
      experiencesCardTitle: "Mes Expériences",
      experiencesCardFooter: "Cliquer pour voir toutes mes expériences",
    },
    characteristics: {
      title: "Mes Soft Skills",
      description:
        "Des compétences techniques et humaines construites au fil de mon parcours universitaire.",
    },
    butCompetencies: {
      badge: "BUT Informatique · 3ᵉ année",
      title: "Les 3 compétences que je mets le plus en avant",
      subtitle:
        "Une synthèse de mon parcours autour de la réalisation de solutions, de l'optimisation des performances et du travail en équipe.",
      cardLabel: "Compétence BUT",
      masteryLevel: "Niveau de maîtrise",
      learningsTitle: "Apprentissages",
      toolsTitle: "Outils et technologies",
      relatedProjectsTitle: "Projets reliés",
      viewProject: "Voir",
    },
    skills: {
      header: "Compétences Techniques",
      titleLine1: "Apprendre,",
      titleLine2: "Expérimenter &",
      titleLine3: "Consolider",
      description:
        "Des technologies acquises en BUT Informatique et appliquées à travers des projets réels, du développement au déploiement.",
      viewMore: "Voir mes compétences",
    },
    projects: {
      title: "Portfolio",
      subtitle: "Mes projets",
    },
    contact: {
      title: "Formulaire de contact",
      orbitTitle: "Travaillons ensemble !",
      orbitDescription:
        "Je suis à la recherche d'un stage pour mars 2026 et d'une alternance pour la rentrée de septembre 2026",
      viewNetworks: "Voir mes réseaux",
      formSubtitle:
        "Envie de collaborer ? N'hésitez pas à me contacter via ce formulaire.",
      nameLabel: "Votre nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Votre email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Votre message",
      messagePlaceholder: "Votre message...",
      successMessage: "Message envoyé avec succès !",
      errorAllFields: "Veuillez remplir tous les champs.",
      errorSending: "Erreur lors de l'envoi du message.",
      errorServer: "Erreur de connexion au serveur.",
      send: "Envoyer",
      socialsModalTitle: "Tous mes réseaux",
      socialsModalDescription:
        "Choisissez un canal pour me contacter ou suivre mon travail.",
    },
    modal: {
      closeAriaLabel: "Fermer",
      education: {
        title: "Parcours scolaire",
        levelBac: "BAC",
        levelBac3: "BAC+3",
        levelBac5: "BAC+5",
      },
      experiences: {
        title: "Mes Experiences",
        missions: "Missions",
        technologies: "Technologies",
        results: "Résultats",
        defaultType: "Expérience",
      },
      skills: {
        title: "Toutes mes compétences",
        tools: "Outils utilisés",
        relatedProjects: "Projets reliés",
        noProject: "Aucun projet utilisant cette compétence pour le moment",
        categoryFrontend: "Frontend",
        categoryBackend: "Backend",
        categoryDatabase: "Base de données",
        categoryDevops: "DevOps / Cloud",
        categoryOther: "Autres",
        levelExpert: "Expert",
        levelAdvanced: "Avancé",
        levelIntermediate: "Intermédiaire",
        levelBeginner: "Débutant",
      },
    },
    footer: {
      home: "Accueil",
      projects: "Projets",
      contact: "Contact",
      legal: "Mentions légales",
      bio:
        "Étudiant en BUT Informatique, passionné par le développement web et logiciel.",
      navigationHeading: "Navigation",
      networksHeading: "Réseaux",
      copyrightBefore: "©",
      copyrightAfter: "Raphael DAVIOT. Tous droits réservés.",
    },
    legal: {
      title: "Mentions légales",
      editorHeading: "Éditeur du site",
      editorDescription:
        "Ce site est édité par Raphael DAVIOT, étudiant en BUT Informatique.",
      emailLabel: "Email",
      hostingHeading: "Hébergement",
      hostingDescription:
        "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
      intellectualPropertyHeading: "Propriété intellectuelle",
      intellectualPropertyDescription:
        "L'ensemble des contenus présents sur ce site (textes, images, code source) sont la propriété de Raphael DAVIOT, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.",
      personalDataHeading: "Données personnelles",
      personalDataDescription:
        "Ce site ne collecte aucune donnée personnelle de manière automatique. Les informations transmises via le formulaire de contact sont uniquement utilisées pour répondre à votre message.",
      cookiesHeading: "Cookies",
      cookiesDescription:
        "Ce site n'utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.",
    },
    projectPage: {
      backToProjects: "Retour aux projets",
      sourceCode: "Code source",
      viewDemo: "Voir la démo",
      documentation: "Documentation",
      descriptionTitle: "Description",
      techStackTitle: "Stack technique",
      techStackDescription:
        "Vue d'ensemble de l'écosystème technique et des outils utilisés pour réaliser ce projet :",
      difficultiesTitle: "Difficultés rencontrées",
      learningsTitle: "Ce que j'ai appris",
      galleryTitle: "Galerie & UI",
      previousImageAria: "Image précédente",
      nextImageAria: "Image suivante",
      goToImageAriaPrefix: "Aller à l'image",
      previousProject: "Projet précédent",
      nextProject: "Projet suivant",
    },
    ui: {
      clickToReveal: "Cliquer pour voir plus",
      upcoming: "À venir",
      flipBack: "retourner",
      skillsTitle: "Compétences",
      subjectsTitle: "Matières",
    },
  },
  en: {
    navbar: {
      home: "HOME",
      about: "ABOUT",
      projects: "MY PROJECTS",
      contact: "CONTACT",
      menuAriaLabel: "Menu",
    },
    hero: {
      student: "Student",
      but: "Computer Science B.U.T",
      downloadCv: "Download my resume",
      lookingForPrefix: "I am looking for an ",
      lookingForRole: "apprenticeship",
      lookingForMiddle: " starting in ",
      lookingForDate: "September 2026",
      scroll: "Scroll",
    },
    about: {
      title: "Who am I?",
      subtitle: "A Student In Constant Evolution.",
      description:
        "Building myself toward a software engineer and thoughtful manager profile.",
      viewProjects: "View my projects",
      contact: "Contact me",
      presentationPrefix: "Third-year ",
      presentationStrong1: "Computer Science B.U.T",
      presentationMiddle1:
        " student, I am ambitious, organized, and persistent. My programming skills are versatile, and I aim to join an ",
      presentationStrong2: "engineering school",
      presentationMiddle2:
        " after my degree to ease my entry into the professional world. I am currently looking for a ",
      presentationStrong3: "work-study opportunity in IT",
      presentationSuffix: " for the 2026 academic year.",
      educationCardTitle: "My Degrees",
      educationCardFooter: "Click to view all my degrees",
      experiencesCardTitle: "My Experiences",
      experiencesCardFooter: "Click to view all my experiences",
    },
    characteristics: {
      title: "Soft Skills",
      description:
        "Technical and human skills built throughout my academic journey.",
    },
    butCompetencies: {
      badge: "Computer Science B.U.T · 3rd year",
      title: "The 3 competencies I highlight the most",
      subtitle:
        "A summary of my journey around building solutions, performance optimization, and teamwork.",
      cardLabel: "B.U.T Competency",
      masteryLevel: "Mastery level",
      learningsTitle: "Learnings",
      toolsTitle: "Tools and technologies",
      relatedProjectsTitle: "Related projects",
      viewProject: "View",
    },
    skills: {
      header: "Technical Skills",
      titleLine1: "Learn,",
      titleLine2: "Experiment &",
      titleLine3: "Consolidate",
      description:
        "Technologies learned during my Computer Science B.U.T and applied through real projects, from development to deployment.",
      viewMore: "View my skills",
    },
    projects: {
      title: "Portfolio",
      subtitle: "My projects",
    },
    contact: {
      title: "Contact form",
      orbitTitle: "Let's work together!",
      orbitDescription:
        "I am looking for an internship for March 2026 and a work-study opportunity starting in September 2026",
      viewNetworks: "View my networks",
      formSubtitle:
        "Want to collaborate? Feel free to contact me through this form.",
      nameLabel: "Your name",
      namePlaceholder: "Your name",
      emailLabel: "Your email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Your message",
      messagePlaceholder: "Your message...",
      successMessage: "Message sent successfully!",
      errorAllFields: "Please fill in all fields.",
      errorSending: "An error occurred while sending the message.",
      errorServer: "Server connection error.",
      send: "Send",
      socialsModalTitle: "All my networks",
      socialsModalDescription:
        "Choose a channel to contact me or follow my work.",
    },
    modal: {
      closeAriaLabel: "Close",
      education: {
        title: "Education Path",
        levelBac: "High School",
        levelBac3: "Bachelor's +3",
        levelBac5: "Master's +5",
      },
      experiences: {
        title: "My Experiences",
        missions: "Missions",
        technologies: "Technologies",
        results: "Results",
        defaultType: "Experience",
      },
      skills: {
        title: "All my skills",
        tools: "Tools used",
        relatedProjects: "Related projects",
        noProject: "No project uses this skill yet",
        categoryFrontend: "Frontend",
        categoryBackend: "Backend",
        categoryDatabase: "Database",
        categoryDevops: "DevOps / Cloud",
        categoryOther: "Other",
        levelExpert: "Expert",
        levelAdvanced: "Advanced",
        levelIntermediate: "Intermediate",
        levelBeginner: "Beginner",
      },
    },
    footer: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      legal: "Legal notice",
      bio:
        "Computer Science B.U.T student, passionate about web and software development.",
      navigationHeading: "Navigation",
      networksHeading: "Networks",
      copyrightBefore: "©",
      copyrightAfter: "Raphael DAVIOT. All rights reserved.",
    },
    legal: {
      title: "Legal notice",
      editorHeading: "Site editor",
      editorDescription:
        "This site is published by Raphael DAVIOT, Computer Science B.U.T student.",
      emailLabel: "Email",
      hostingHeading: "Hosting",
      hostingDescription:
        "This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
      intellectualPropertyHeading: "Intellectual property",
      intellectualPropertyDescription:
        "All content on this site (texts, images, source code) is the property of Raphael DAVIOT, unless stated otherwise. Any reproduction, even partial, requires prior authorization.",
      personalDataHeading: "Personal data",
      personalDataDescription:
        "This site does not automatically collect personal data. Information sent through the contact form is only used to reply to your message.",
      cookiesHeading: "Cookies",
      cookiesDescription:
        "This site does not use tracking or advertising cookies. Only technical cookies strictly necessary for proper operation may be used.",
    },
    projectPage: {
      backToProjects: "Back to projects",
      sourceCode: "Source code",
      viewDemo: "View demo",
      documentation: "Documentation",
      descriptionTitle: "Description",
      techStackTitle: "Tech stack",
      techStackDescription:
        "Overview of the technical ecosystem and tools used to build this project:",
      difficultiesTitle: "Challenges faced",
      learningsTitle: "What I learned",
      galleryTitle: "Gallery & UI",
      previousImageAria: "Previous image",
      nextImageAria: "Next image",
      goToImageAriaPrefix: "Go to image",
      previousProject: "Previous project",
      nextProject: "Next project",
    },
    ui: {
      clickToReveal: "Click to reveal more",
      upcoming: "Upcoming",
      flipBack: "flip back",
      skillsTitle: "Skills",
      subjectsTitle: "Subjects",
    },
  },
};

export function translate(locale: Locale, key: string): string {
  const parts = key.split(".");
  let current: DictionaryValue = dictionaries[locale];

  for (const part of parts) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return key;
    }
    current = current[part];
  }

  return typeof current === "string" ? current : key;
}
