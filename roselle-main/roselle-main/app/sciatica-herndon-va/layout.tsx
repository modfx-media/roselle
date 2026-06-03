import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sciatica Treatment Near Herndon, VA | Roselle Center for Healing",
  description:
    "Sciatica and sciatic nerve pain treatment near Herndon, VA at Roselle Center in Fairfax. Non-surgical leg pain relief. 15 min from Herndon. Call (703) 698-7117.",
  openGraph: {
    title: "Sciatica Treatment Near Herndon, VA | Roselle Center for Healing",
    description:
      "Serving Herndon patients with sciatica, leg pain & disc herniation for 30+ years. Just 15 minutes from Herndon — no surgery required.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
