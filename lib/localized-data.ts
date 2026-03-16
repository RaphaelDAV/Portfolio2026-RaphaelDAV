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

export function createLocalizedValue<T>(values: Record<Locale, T>): T {
  return new Proxy({} as T, {
    get(_target, property, receiver) {
      const activeValue = values[getRuntimeLocale()] as object;
      const result = Reflect.get(activeValue, property, receiver);

      if (typeof result === "function") {
        return result.bind(activeValue);
      }

      return result;
    },
    has(_target, property) {
      return Reflect.has(values[getRuntimeLocale()] as object, property);
    },
    ownKeys() {
      return Reflect.ownKeys(values[getRuntimeLocale()] as object);
    },
    getOwnPropertyDescriptor(_target, property) {
      return Object.getOwnPropertyDescriptor(
        values[getRuntimeLocale()] as object,
        property
      );
    },
  });
}
