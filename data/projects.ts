import { defaultLocale, type Locale } from "@/lib/i18n";
import { createLocalizedValue } from "@/lib/localized-data";
import { Project } from "@/types/project";
import {
  projectOrder as frProjectOrderRaw,
  projects as frProjectsRaw,
} from "@/data/fr/projects";
import {
  projectOrder as enProjectOrderRaw,
  projects as enProjectsRaw,
} from "@/data/en/projects";

function normalizeOrder(raw: any): { ids: string[]; sizeMap: Record<string, "large" | "small" | undefined> } {
  const ids: string[] = [];
  const sizeMap: Record<string, "large" | "small" | undefined> = {};

  if (!raw) return { ids, sizeMap };

  if (Array.isArray(raw)) {
    if (raw.length === 0) return { ids, sizeMap };

    if (typeof raw[0] === "string") {
      raw.forEach((id: string) => ids.push(id));
    } else if (typeof raw[0] === "object" && raw[0] !== null) {
      raw.forEach((entry: { id: string; size?: "large" | "small" }) => {
        ids.push(entry.id);
        sizeMap[entry.id] = entry.size;
      });
    }
  }

  return { ids, sizeMap };
}

const { ids: frOrderIds, sizeMap: frSizeMap } = normalizeOrder(frProjectOrderRaw as any);
const { ids: enOrderIds, sizeMap: enSizeMap } = normalizeOrder(enProjectOrderRaw as any);

const projectsByLocale: Record<Locale, Project[]> = {
  fr: frProjectsRaw.map((p) => ({ ...p, size: frSizeMap[p.id] ?? p.size })),
  en: enProjectsRaw.map((p) => ({ ...p, size: enSizeMap[p.id] ?? p.size })),
};

const projectOrderByLocaleIds: Record<Locale, string[]> = {
  fr: frOrderIds,
  en: enOrderIds,
};

export function getProjects(locale: Locale = defaultLocale): Project[] {
  return projectsByLocale[locale];
}

export function getProjectOrder(locale: Locale = defaultLocale): string[] {
  return projectOrderByLocaleIds[locale];
}

export const projects = createLocalizedValue(projectsByLocale);

/** Ordered list of project IDs - determines display order in the grid */
export const projectOrder = createLocalizedValue(projectOrderByLocaleIds);