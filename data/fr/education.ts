import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "ecole-ingenieur",
    diploma: "École d'Ingénieur",
    school: "À définir",
    image: "/assets/education/esiee.png",
    location: "France",
    startDate: "Septembre 2026",
    endDate: "2029",
    description:
      "Poursuite d'études en école d'ingénieur après l'obtention du BUT Informatique, afin d'approfondir les compétences techniques et managériales.",
    skills: [],
    subjects: [],
  },
  {
    id: "but-informatique",
    diploma: "BUT Informatique",
    school: "Université Gustave Eiffel",
    image: "/assets/education/iut.png",
    location: "Champs-sur-Marne, France",
    startDate: "Septembre 2023",
    endDate: "Juin 2026",
    description:
      "Formation universitaire de 3 ans couvrant l'ensemble des fondamentaux de l'informatique : développement web, programmation orientée objet, bases de données, réseaux, gestion de projet et systèmes d'information. Parcours axé sur la réalisation d'applications et la maîtrise des outils modernes du développement.",
    skills: [
      "Développement web (HTML, CSS, JS, PHP)",
      "Programmation orientée objet (Java, Python)",
      "Bases de données (SQL, PostgreSQL)",
      "Réseaux et systèmes",
      "Gestion de projet Agile",
      "Conception UML",
    ],
    subjects: [
      "Développement web",
      "Programmation Java",
      "Base de données avancées",
      "Réseaux",
      "Mathématiques pour l'informatique",
      "Communication professionnelle",
      "Gestion de projet",
      "Anglais technique",
    ],
    context:
      "Formation en alternance/initial à l'IUT de Marne-la-Vallée, au sein d'un environnement stimulant avec de nombreux projets pratiques.",
  },
  {
    id: "bac-general",
    diploma: "Baccalauréat Général",
    school: "Lycée",
    image: "/assets/education/lycee.png",
    location: "Île-de-France, France",
    startDate: "Septembre 2020",
    endDate: "Juin 2023",
    description:
      "Baccalauréat général avec spécialités Mathématiques et Numérique & Sciences Informatiques (NSI). Première approche de la programmation avec Python et découverte des concepts fondamentaux de l'informatique.",
    skills: [
      "Algorithmique et programmation Python",
      "Mathématiques avancées",
      "Logique et raisonnement",
      "Travail en équipe",
    ],
    subjects: [
      "Mathématiques",
      "Numérique et Sciences Informatiques",
      "Physique-Chimie",
      "Anglais",
    ],
    context:
      "Spécialités scientifiques orientées vers l'informatique, avec un projet de fin d'année en NSI.",
  },
];
