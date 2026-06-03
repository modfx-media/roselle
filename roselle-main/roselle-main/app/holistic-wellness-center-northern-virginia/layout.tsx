import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holistic Wellness Center Northern Virginia | Roselle Center for Healing",
  description:
    "Roselle Center for Healing is Northern Virginia's leading holistic wellness center. Chiropractic, acupuncture, functional medicine, massage & nutrition in Fairfax, VA. Serving Vienna, Burke, Herndon & beyond.",
  openGraph: {
    title: "Holistic Wellness Center Northern Virginia | Roselle Center for Healing",
    description:
      "30+ years of integrative, whole-person healthcare in Fairfax, VA. The most complete holistic wellness center in Northern Virginia.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
