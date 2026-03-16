import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/components/providers/I18nProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raphaël DAVIOT — Portfolio Développeur",
  description:
    "Portfolio de Raphaël DAVIOT, étudiant en BUT Informatique. Développeur web & logiciel passionné.",
  keywords: [
    "développeur",
    "portfolio",
    "informatique",
    "web",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Raphaël DAVIOT" }],
  openGraph: {
    title: "Raphaël DAVIOT — Portfolio Développeur",
    description:
      "Découvrez mes projets et compétences en développement web et logiciel.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
