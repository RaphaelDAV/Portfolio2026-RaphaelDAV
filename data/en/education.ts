import { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "ecole-ingenieur",
    diploma: "Engineering School",
    school: "To be defined",
    image: "/assets/education/esiee.png",
    location: "France",
    startDate: "September 2026",
    endDate: "2029",
    description:
      "Further studies in engineering school after obtaining my Computer Science B.U.T degree to deepen both technical and managerial skills.",
    skills: [],
    subjects: [],
  },
  {
    id: "but-informatique",
    diploma: "Computer Science B.U.T",
    school: "Gustave Eiffel University",
    image: "/assets/education/iut.png",
    location: "Champs-sur-Marne, France",
    startDate: "September 2023",
    endDate: "June 2026",
    description:
      "Three-year university program covering core computer science topics: web development, object-oriented programming, databases, networks, project management, and information systems. The curriculum is focused on building applications and mastering modern development tools.",
    skills: [
      "Web development (HTML, CSS, JS, PHP)",
      "Object-oriented programming (Java, Python)",
      "Databases (SQL, PostgreSQL)",
      "Networks and systems",
      "Agile project management",
      "UML design",
    ],
    subjects: [
      "Web development",
      "Java programming",
      "Advanced databases",
      "Networks",
      "Mathematics for computer science",
      "Professional communication",
      "Project management",
      "Technical English",
    ],
    context:
      "Program followed in initial/apprenticeship track at IUT Marne-la-Vallee in a stimulating environment with many practical projects.",
  },
  {
    id: "bac-general",
    diploma: "General Baccalaureate",
    school: "High School",
    image: "/assets/education/lycee.png",
    location: "Ile-de-France, France",
    startDate: "September 2020",
    endDate: "June 2023",
    description:
      "General baccalaureate  — With Honors (Bien) — 15.63/20 with specializations in Mathematics, Engineering Sciences (SI) and Advanced Mathematics. In-depth first experiences in programming and computer science concepts.",
    skills: [
      "Algorithms and Python programming",
      "Advanced mathematics",
      "Logic and reasoning",
      "Teamwork",
    ],
    subjects: [
      "Mathematics",
      "Engineering Sciences (SI)",
      "Advanced Mathematics",
      "Physics and Chemistry",
      "English",
    ],
    context:
      "Science-focused specializations oriented toward computing, with an end-of-year NSI project. Graduated with honors (Mention Bien) with an average of 15.63/20.",
  },
];
