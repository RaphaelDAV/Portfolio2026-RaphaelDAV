"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { PresentationCard } from "@/components/cards/PresentationCard";
import { ClickableAboutCard } from "@/components/cards/ClickableAboutCard";
import { CharacteristicsCard } from "@/components/cards/CharacteristicsCard";
import { AllEducationsModal } from "@/components/modals/AllEducationsModal";
import { AllExperiencesModal } from "@/components/modals/AllExperiencesModal";
import { GraduationCap, Briefcase, ArrowUpRight, FolderOpen, Award, Rocket,FolderCode } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";

export function AboutSection() {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  // Récupérer le premier élément de chaque tableau pour l'aperçu
  const firstEducation = education[0];
  const firstExperience = experiences[0];

  return (
    <>
      <AnimatedSection id="about" className="py-24 md:py-32 bg-background">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header centré */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-1">
              Qui suis-je ?
            </h2>
            <p className="text-2xl font-semibold text-foreground mb-3">
              Un Étudiant En Constante Évolution.
            </p>
            <p className="text-md text-muted-foreground mb-5">
              En construction vers un profil d’ingénieur logiciel et manager éclairé.
            </p>
            
            {/* 2 CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton href="/#projects" variant="gradient" size="md">
                <FolderOpen size={18} />
                Voir mes projets
              </GlowButton>
              <GlowButton href="/#contact" variant="ghost" size="md">
                Me Contacter
                <ArrowUpRight size={18} />
              </GlowButton>
            </div>
          </div>

          {/* Grille de 4 cartes */}
          <div className="grid md:grid-cols-3 md:auto-rows-fr gap-6">
            {/* 1. Carte présentation */}
            <PresentationCard 
              text={
                <>
                  Étudiant en 3eme année de <strong>BUT informatique</strong>, je suis ambitieux, organisé, et persévérant. Mes compétences en programmation sont polyvalentes, et je cherche à intégrer une <strong>école d'ingénieur</strong> après mon BUT pour faciliter mon entrée dans le monde professionnel. Je suis actuellement à la recherche d'une <strong>alternance en informatique</strong> pour la rentrée 2026.
                </>
              } 
            />

            {/* 2. Carte diplômes */}
            <div className="md:col-span-2 h-full">
              <ClickableAboutCard
                title="Mes Diplômes"
                icon={<GraduationCap size={24} />}
                mainText={firstEducation.diploma}
                tags={[firstEducation.school]}
                description={firstEducation.description}
                footerText="Cliquer pour voir tous mes diplômes"
                backgroundIcon={<GraduationCap size={250} />}
                onClick={() => setIsEducationModalOpen(true)}
              />
            </div>

            {/* 3. Carte expériences */}
            <div className="md:col-span-2 h-full">
              <ClickableAboutCard
                title="Mes Expériences"
                icon={<Briefcase size={24} />}
                mainText={firstExperience.role}
                tags={[firstExperience.company]}
                description={firstExperience.description}
                footerText="Cliquer pour voir toutes mes expériences"
                backgroundIcon={<FolderCode size={250} />}
                onClick={() => setIsExperienceModalOpen(true)}
              />
            </div>

            {/* 4. Carte caractéristiques */}
            <CharacteristicsCard characteristics={profile.characteristics} />
          </div>
        </div>
      </AnimatedSection>

      {/* Modals */}
      <AllEducationsModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
      />
      <AllExperiencesModal
        isOpen={isExperienceModalOpen}
        onClose={() => setIsExperienceModalOpen(false)}
      />
    </>
  );
}
