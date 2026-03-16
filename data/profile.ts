import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { profile as frProfile } from "@/data/fr/profile";
import { profile as enProfile } from "@/data/en/profile";

const profilesByLocale = {
  fr: frProfile,
  en: enProfile,
} as const;

export function getProfile(locale: Locale = defaultLocale) {
  return profilesByLocale[locale];
}

export const profile = createLocalizedValue(profilesByLocale);
