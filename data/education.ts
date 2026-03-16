import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Education } from "@/types/education";
import { education as frEducation } from "@/data/fr/education";
import { education as enEducation } from "@/data/en/education";

const educationByLocale: Record<Locale, Education[]> = {
  fr: frEducation,
  en: enEducation,
};

export function getEducation(locale: Locale = defaultLocale): Education[] {
  return educationByLocale[locale];
}

export const education = createLocalizedValue(educationByLocale);
