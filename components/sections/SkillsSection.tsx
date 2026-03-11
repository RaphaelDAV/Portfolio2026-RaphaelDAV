"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AllSkillsModal } from "@/components/modals/AllSkillsModal";
import { OrbitSystem } from "@/components/ui/Orbit";
import { ArrowUpRight } from "lucide-react";
import { skills } from "@/data/skills";

// Map actual skills from data to Orbit items
const orbitSkills = skills.map((skill) => ({
  id: skill.id,
  label: skill.name,
  src: skill.logo || "",
}));

export function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkillId, setSelectedSkillId] = useState<string | undefined>();

  const handleOpenModal = (skillId?: string) => {
    setSelectedSkillId(skillId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: reset skill ID after closing animation finishes
    setTimeout(() => setSelectedSkillId(undefined), 300);
  };

  return (
    <>
      <AnimatedSection id="skills" className="relative bg-background overflow-hidden py-12">
        <OrbitSystem
          header="Compétences Techniques"
          title={
            <>
              Apprendre, <br />
              Expérimenter & <br />
              Consolider
            </>
          }
          description="Des technologies acquises en BUT Informatique et appliquées à travers des projets réels, du développement au déploiement."
          buttonText="Voir mes compétences"
          buttonIcon={<ArrowUpRight size={18} />}
          buttonOnClick={() => handleOpenModal()}
          buttonVariant="white"
          items={orbitSkills}
          orbitCount={3}
          size="md"
          onItemClick={(item) => handleOpenModal(item.id)}
        />
      </AnimatedSection>

      <AllSkillsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        initialSkillId={selectedSkillId}
      />
    </>
  );
}