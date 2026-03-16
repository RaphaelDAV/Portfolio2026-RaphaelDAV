"use client";

import { useI18n } from "@/components/providers/I18nProvider";

export function MentionsLegalesClient() {
  const { t } = useI18n();

  return (
    <section className="py-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {t("legal.title")}
        </h1>

        <div className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("legal.editorHeading")}
            </h2>
            <p>{t("legal.editorDescription")}</p>
            <p>{t("legal.emailLabel")} : raphael.daviot@example.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("legal.hostingHeading")}
            </h2>
            <p>{t("legal.hostingDescription")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("legal.intellectualPropertyHeading")}
            </h2>
            <p>{t("legal.intellectualPropertyDescription")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("legal.personalDataHeading")}
            </h2>
            <p>{t("legal.personalDataDescription")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t("legal.cookiesHeading")}
            </h2>
            <p>{t("legal.cookiesDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
