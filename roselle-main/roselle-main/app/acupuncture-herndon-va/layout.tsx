import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acupuncture Near Herndon, VA | Roselle Center for Healing",
  description:
    "Acupuncture near Herndon, VA at Roselle Center in Fairfax. Licensed acupuncturist treating pain, stress, migraines & chronic conditions. Call (703) 698-7117.",
  openGraph: {
    title: "Acupuncture Near Herndon, VA | Roselle Center for Healing",
    description:
      "Herndon residents trust Roselle Center for integrative acupuncture care. Just 15 min via Fairfax County Pkwy. 30+ years experience.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
