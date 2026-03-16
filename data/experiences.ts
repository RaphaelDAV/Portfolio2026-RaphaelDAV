import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Experience } from "@/types/experience";
import { experiences as frExperiences } from "@/data/fr/experiences";
import { experiences as enExperiences } from "@/data/en/experiences";

const experiencesByLocale: Record<Locale, Experience[]> = {
  fr: frExperiences,
  en: enExperiences,
};

export function getExperiences(locale: Locale = defaultLocale): Experience[] {
  return experiencesByLocale[locale];
}

export const experiences = createLocalizedValue(experiencesByLocale);
