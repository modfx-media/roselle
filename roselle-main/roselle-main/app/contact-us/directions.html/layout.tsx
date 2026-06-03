import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Directions to Roselle Center For Healing in Fairfax, VA | Chiropractor in Fairfax, VA",
  description:
    "Get driving directions to Roselle Center for Healing at 8500 Executive Park Ave STE 300, Fairfax, VA 22031. Located less than a mile off I-495 on Route 50 in the Merrifield area.",
};

export default function DirectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
