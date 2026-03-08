import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Raphaël DAVIOT",
  description: "Mentions légales du portfolio de Raphaël DAVIOT.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Mentions légales
        </h1>

        <div className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Éditeur du site
            </h2>
            <p>
              Ce site est édité par Raphaël DAVIOT, étudiant en BUT Informatique.
            </p>
            <p>Email : raphael.daviot@example.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              code source) sont la propriété de Raphaël DAVIOT, sauf mention
              contraire. Toute reproduction, même partielle, est soumise à
              autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle de manière
              automatique. Les informations transmises via le formulaire de
              contact sont uniquement utilisées pour répondre à votre message.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Cookies
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies de suivi ou de publicité.
              Seuls des cookies techniques strictement nécessaires au
              fonctionnement du site peuvent être utilisés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
