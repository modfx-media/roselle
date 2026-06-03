import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fairfax Acupuncture FAQs: Holistic Healing & Pain Relief Explained",
  description: "Common acupuncture questions answered at Roselle Center for Healing in Fairfax, VA. Learn about holistic healing, pain relief, and how acupuncture works.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
