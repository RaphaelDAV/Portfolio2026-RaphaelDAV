"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { Tag } from "@/components/ui/Tag";
import { OrbitSystem } from "@/components/ui/Orbit";
import { Send, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";

const orbitItems = socials.map((social) => ({
  id: social.id,
  src: social.image,
  label: social.label,
  url: social.url,
}));

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

  function handleOpenModal(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <AnimatedSection id="contact" className="bg-background py-24 ">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 lg:divide-x lg:divide-border/50 items-center">
          {/* Left side - Orbit System with Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center w-full min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-3xl lg:rounded-none lg:col-span-3"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <OrbitSystem
                orbitCount={2}
                size="sm"
                items={orbitItems}
                onItemClick={(item) => {
                  if ('url' in item && typeof item.url === 'string') {
                    window.open(item.url, "_blank");
                  }
                }}
                header={"Formulaire de contact"}
                title={"Travaillons ensemble!"}
                description="Je suis à la recherche d’un stage pour Mars 2026 et d’une alternance pour la rentrée de Septembre 2026"
                button={
                  <GlowButton
                    variant="white"
                    onClick={() => handleOpenModal()}
                  >
                    <ArrowUpRight size={18} />
                    Voir mes réseaux
                  </GlowButton>
                }
              />
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto lg:col-span-2 lg:pl-12 lg:py-12"
          >
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                Formulaire de contact
              </h2>
              <p className="text-muted text-md">
                Envie de collaborer ? N'hésitez pas à me contacter via ce formulaire.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="w-fit">
                    <Tag size="sm" className="tracking-wide">
                      Votre nom
                    </Tag>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Votre nom"
                    className="w-full mt-1 px-5 py-2 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="email" className="w-fit">
                    <Tag size="sm" className="tracking-wide">
                      Votre email
                    </Tag>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="votre@email.com"
                    className="w-full mt-1 px-5 py-2 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="message" className="w-fit">
                  <Tag size="sm" className="tracking-wide">
                    Votre message
                  </Tag>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Votre message..."
                  className="w-full mt-1 px-5 py-2 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none font-medium"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm font-medium text-green-400 bg-green-400/10 px-4 py-3 rounded-lg border border-green-400/20">
                  <CheckCircle size={18} />
                  Message envoyé avec succès !
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm font-medium text-red-400 bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={18} />
                  Veuillez remplir tous les champs.
                </div>
              )}

              <div className="flex justify-center pt-4">
                <GlowButton type="submit" variant="gradient" size="md" className="group flex items-center">
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="font-bold tracking-wide">Envoyer</span>
                </GlowButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
