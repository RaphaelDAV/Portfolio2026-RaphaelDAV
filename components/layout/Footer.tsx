import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { socials } from "@/data/socials";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Mail: <Mail size={18} />,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Raphaël <span className="text-primary">DAVIOT</span>
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
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-card border border-border text-muted hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {iconMap[social.icon]}
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
          <p className="flex items-center gap-1">
            Fait avec <Heart size={14} className="text-secondary" /> et Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
