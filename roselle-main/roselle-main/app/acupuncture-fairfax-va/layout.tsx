import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acupuncture in Fairfax, VA | Roselle Center for Healing",
  description:
    "Certified acupuncturist in Fairfax, VA. Roselle Center for Healing treats pain, stress, inflammation, migraine, and chronic conditions with traditional and contemporary acupuncture. Call (703) 698-7117.",
  openGraph: {
    title: "Acupuncture Fairfax, VA | Roselle Center for Healing",
    description:
      "30+ years treating Northern Virginia with integrative acupuncture. Pain relief, stress reduction, and holistic health support in Fairfax, VA.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
