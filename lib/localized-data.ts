import { defaultLocale, type Locale } from "@/lib/i18n";

function getRuntimeLocale(): Locale {
  if (typeof document === "undefined") {
    return defaultLocale;
  }

  const htmlLang = document.documentElement.lang;
  if (htmlLang === "fr" || htmlLang === "en") {
    return htmlLang;
  }

  const storedLocale = window.localStorage.getItem("locale");
  if (storedLocale === "fr" || storedLocale === "en") {
    return storedLocale;
  }

  return defaultLocale;
}

export function createLocalizedValue<T extends object>(
  values: Record<Locale, T>
): T {
  return new Proxy({} as T, {
    get(_target, property, receiver) {
      const activeValue = values[getRuntimeLocale()];
      const result = Reflect.get(activeValue, property, receiver);

      if (typeof result === "function") {
        return result.bind(activeValue);
      }

      return result;
    },
    has(_target, property) {
      return Reflect.has(values[getRuntimeLocale()], property);
    },
    ownKeys() {
      return Reflect.ownKeys(values[getRuntimeLocale()]);
    },
    getOwnPropertyDescriptor(_target, property) {
      return Object.getOwnPropertyDescriptor(
        values[getRuntimeLocale()],
        property
      );
    },
  });
}
