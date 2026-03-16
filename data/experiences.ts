import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Experience } from "@/types/experience";
import { experiences as frExperiences } from "@/data/fr/experiences";
import { experiences as enExperiences } from "@/data/en/experiences";

const experiencesByLocale: Record<Locale, Experience[]> = {
  fr: frExperiences,
  en: enExperiences,
};

// Change this id to choose which experience is featured in the About section.
export const featuredExperienceId = "stage-safran-vba";

export function getExperiences(locale: Locale = defaultLocale): Experience[] {
  return experiencesByLocale[locale];
}

export function getFeaturedExperience(
  locale: Locale = defaultLocale
): Experience | undefined {
  const items = getExperiences(locale);
  return items.find((item) => item.id === featuredExperienceId) ?? items[0];
}

export const experiences = createLocalizedValue(experiencesByLocale);
