import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neck Pain FAQs | Chiropractic Relief in Fairfax, VA | Roselle Center For Healing",
  description: "Get answers to common neck pain FAQs. Roselle Center for Healing in Fairfax, VA offers chiropractic treatment for whiplash, herniated discs, and neck injuries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
