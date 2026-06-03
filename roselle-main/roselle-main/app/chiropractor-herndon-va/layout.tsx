import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiropractor Near Herndon, VA | Roselle Center for Healing",
  description:
    "Herndon, VA residents get expert chiropractic, acupuncture & holistic care at Roselle Center for Healing in Fairfax. 30+ years experience, drug-free care. Book online or call (703) 698-7117.",
  openGraph: {
    title: "Chiropractor Near Herndon, VA | Roselle Center for Healing",
    description:
      "Multidisciplinary wellness serving Herndon, Reston, and the Route 7 corridor. Chiropractic, acupuncture, massage, nutrition under one roof in Fairfax, VA.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
