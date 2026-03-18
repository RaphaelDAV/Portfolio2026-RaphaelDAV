"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { PresentationCard } from "@/components/cards/PresentationCard";
import { ClickableAboutCard } from "@/components/cards/ClickableAboutCard";
import { CharacteristicsCard } from "@/components/cards/CharacteristicsCard";
import { AllEducationsModal } from "@/components/modals/AllEducationsModal";
import { AllExperiencesModal } from "@/components/modals/AllExperiencesModal";
import { GraduationCap, Briefcase, ArrowUpRight, FolderOpen, FolderCode } from "lucide-react";
import { profile } from "@/data/profile";
import { getFeaturedEducation } from "@/data/education";
import { getFeaturedExperience } from "@/data/experiences";
import { useI18n } from "@/components/providers/I18nProvider";

export function AboutSection() {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const { t, locale } = useI18n();

  const featuredEducation = getFeaturedEducation(locale);
  const featuredExperience = getFeaturedExperience(locale);

  if (!featuredEducation || !featuredExperience) {
    return null;
  }

  return (
    <>
      <AnimatedSection id="about" className="py-24 md:py-32 bg-background">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header centré */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-1">
              {t("about.title")}
            </h2>
            <p className="text-2xl font-semibold text-foreground mb-3">
              {t("about.subtitle")}
            </p>
            <p className="text-md text-muted-foreground mb-5">
              {t("about.description")}
            </p>
            
            {/* 2 CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <GlowButton href="/#projects" variant="gradient" size="md">
                <FolderOpen size={18} />
                {t("about.viewProjects")}
              </GlowButton>
              <GlowButton href="/#contact" variant="ghost" size="md">
                {t("about.contact")}
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
                  {t("about.presentationPrefix")}
                  <strong>{t("about.presentationStrong1")}</strong>
                  {t("about.presentationMiddle1")}
                  <strong>{t("about.presentationStrong2")}</strong>
                  {t("about.presentationMiddle2")}
                  <strong>{t("about.presentationStrong3")}</strong>
                  {t("about.presentationSuffix")}
                </>
              } 
            />

            {/* 2. Carte diplômes */}
            <div className="md:col-span-2 h-full">
              <ClickableAboutCard
                title={t("about.educationCardTitle")}
                icon={<GraduationCap size={24} />}
                mainText={featuredEducation.diploma}
                tags={[featuredEducation.school]}
                description={featuredEducation.description}
                footerText={t("about.educationCardFooter")}
                backgroundIcon={<GraduationCap size={250} />}
                onClick={() => setIsEducationModalOpen(true)}
              />
            </div>

            {/* 3. Carte expériences */}
            <div className="md:col-span-2 h-full">
              <ClickableAboutCard
                title={t("about.experiencesCardTitle")}
                icon={<Briefcase size={24} />}
                mainText={featuredExperience.role}
                tags={[featuredExperience.company]}
                description={featuredExperience.description}
                footerText={t("about.experiencesCardFooter")}
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
