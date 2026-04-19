import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Roselle Center For Healing | Chiropractor in Fairfax, VA",
  description:
    "Learn about Roselle Center for Healing in Fairfax, VA. Dr. Tom Roselle and his experienced team offer integrative chiropractic care, massage therapy, acupuncture, and functional medicine.",
  openGraph: {
    title: "About Us | Roselle Center For Healing",
    description:
      "Learn about Roselle Center for Healing in Fairfax, VA. Integrative chiropractic care, massage therapy, acupuncture, and functional medicine.",
    type: "website",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
