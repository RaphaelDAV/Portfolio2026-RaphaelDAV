export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/raphael-daviot",
    icon: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/raphael-daviot",
    icon: "Linkedin",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:raphael.daviot@example.com",
    icon: "Mail",
  },
];
