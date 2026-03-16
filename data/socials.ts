import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { socials as frSocials } from "@/data/fr/socials";
import { socials as enSocials } from "@/data/en/socials";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  image: string;
}

const socialsByLocale: Record<Locale, SocialLink[]> = {
  fr: frSocials,
  en: enSocials,
};

export function getSocials(locale: Locale = defaultLocale): SocialLink[] {
  return socialsByLocale[locale];
}

export const socials = createLocalizedValue(socialsByLocale);
