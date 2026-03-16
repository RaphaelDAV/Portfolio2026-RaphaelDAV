import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Education } from "@/types/education";
import { education as frEducation } from "@/data/fr/education";
import { education as enEducation } from "@/data/en/education";

const educationByLocale: Record<Locale, Education[]> = {
  fr: frEducation,
  en: enEducation,
};

// Change this id to choose which diploma is featured in the About section.
export const featuredEducationId = "but-informatique";

export function getEducation(locale: Locale = defaultLocale): Education[] {
  return educationByLocale[locale];
}

export function getFeaturedEducation(
  locale: Locale = defaultLocale
): Education | undefined {
  const items = getEducation(locale);
  return items.find((item) => item.id === featuredEducationId) ?? items[0];
}

export const education = createLocalizedValue(educationByLocale);
