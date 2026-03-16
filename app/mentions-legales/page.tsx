import type { Metadata } from "next";
import { MentionsLegalesClient } from "./MentionsLegalesClient";

export const metadata: Metadata = {
  title: "Mentions légales — Raphaël DAVIOT",
  description: "Mentions légales du portfolio de Raphaël DAVIOT.",
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}
