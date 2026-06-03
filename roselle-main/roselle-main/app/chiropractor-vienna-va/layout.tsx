import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiropractor Near Vienna, VA | Roselle Center for Healing",
  description:
    "Looking for a chiropractor near Vienna, VA? Roselle Center for Healing in Fairfax is minutes away. Chiropractic care, acupuncture, massage & functional medicine for Vienna residents.",
  openGraph: {
    title: "Chiropractor Near Vienna, VA | Roselle Center for Healing",
    description:
      "Serving Vienna, VA with holistic chiropractic, acupuncture, and integrative wellness. 30+ years of trusted care. Call (703) 698-7117.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
