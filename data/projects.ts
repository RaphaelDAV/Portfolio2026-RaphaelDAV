import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Project } from "@/types/project";
import {
  projectOrder as frProjectOrder,
  projects as frProjects,
} from "@/data/fr/projects";
import {
  projectOrder as enProjectOrder,
  projects as enProjects,
} from "@/data/en/projects";

const projectsByLocale: Record<Locale, Project[]> = {
  fr: frProjects,
  en: enProjects,
};

const projectOrderByLocale: Record<Locale, string[]> = {
  fr: frProjectOrder,
  en: enProjectOrder,
};

export function getProjects(locale: Locale = defaultLocale): Project[] {
  return projectsByLocale[locale];
}

export function getProjectOrder(locale: Locale = defaultLocale): string[] {
  return projectOrderByLocale[locale];
}

export const projects = createLocalizedValue(projectsByLocale);

/** Ordered list of project IDs - determines the display order in the grid */
export const projectOrder = createLocalizedValue(projectOrderByLocale);