import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Nutrition Counseling in Fairfax, VA | Roselle Center",
  description: "Nutritional counseling at Roselle Center for Healing in Fairfax, VA. Personalized nutrition plans, dietary guidance, and holistic wellness support.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
