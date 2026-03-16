import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Skill } from "@/types/skill";
import { skills as frSkills } from "@/data/fr/skills";
import { skills as enSkills } from "@/data/en/skills";

const skillsByLocale: Record<Locale, Skill[]> = {
  fr: frSkills,
  en: enSkills,
};

export function getSkills(locale: Locale = defaultLocale): Skill[] {
  return skillsByLocale[locale];
}

export const skills = createLocalizedValue(skillsByLocale);
