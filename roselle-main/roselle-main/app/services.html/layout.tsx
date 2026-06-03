import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Roselle Center For Healing | Chiropractor in Fairfax, VA",
  description:
    "Explore chiropractic care, acupuncture, massage therapy, applied kinesiology, functional medicine, nutrition, and more at Roselle Center for Healing in Fairfax, VA.",
  openGraph: {
    title: "Services | Roselle Center For Healing",
    description:
      "Comprehensive chiropractic care, functional medicine, massage therapy, and integrative wellness services in Fairfax, VA.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
