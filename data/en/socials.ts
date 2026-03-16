export interface SocialLink {
  id: string;
  label: string;
  url: string;
  image: string;
}

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/RaphaelDAV",
    image: "/assets/socials/github.png",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/raphael-daviot/",
    image: "/assets/socials/linkedin.png",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:daviotraphael@gmail.com",
    image: "/assets/socials/gmail.png",
  },
  {
    id: "phone",
    label: "Phone",
    url: "tel:+33769817638",
    image: "/assets/socials/whatsapp.png",
  },
];
