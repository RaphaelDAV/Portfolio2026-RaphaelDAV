"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowButton } from "@/components/ui/GlowButton";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { socials } from "@/data/socials";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Mail: <Mail size={20} />,
};

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    // Simulate success (EmailJS integration ready)
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact"
          subtitle="Envie de collaborer ? N'hésitez pas à me contacter"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - text + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Travaillons ensemble
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Je suis toujours ouvert aux nouvelles opportunités, que ce soit
              pour un stage, un projet freelance ou une simple discussion autour
              du développement. N&apos;hésitez pas à m&apos;écrire, je vous
              répondrai dans les plus brefs délais.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Vous pouvez également me retrouver sur mes réseaux sociaux :
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border text-muted hover:text-primary hover:border-primary/30 transition-all duration-300 hover:glow-sm"
                >
                  {iconMap[social.icon]}
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle size={16} />
                  Message envoyé avec succès !
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} />
                  Veuillez remplir tous les champs.
                </div>
              )}

              <GlowButton type="submit" variant="primary" size="lg" className="w-full">
                <Send size={18} />
                Envoyer le message
              </GlowButton>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
