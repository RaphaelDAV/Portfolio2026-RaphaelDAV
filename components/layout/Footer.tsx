import Link from "next/link";
import { Heart, Github, Linkedin, Mail, Instagram, Phone } from "lucide-react";
import { socials } from "@/data/socials";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const getLucideIcon = (id: string) => {
  switch (id) {
    case "github": return <Github size={24} />;
    case "linkedin": return <Linkedin size={24} />;
    case "email": return <Mail size={24} />;
    case "instagram": return <Instagram size={24} />;
    case "phone": return <Phone size={24} />;
    default: return null;
  }
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Raphaël <span className="text-gradient">DAVIOT</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Étudiant en BUT Informatique, passionné par le développement web
              et logiciel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Réseaux
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {getLucideIcon(social.id)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mt-8 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} Raphaël DAVIOT. Tous droits réservés.
          </p>

        </div>
      </div>
    </footer>
  );
}
