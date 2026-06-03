import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Back Pain Treatment Fairfax, VA | Roselle Center for Healing",
  description:
    "Drug-free back pain treatment in Fairfax, VA. Chiropractic adjustments, spinal decompression, acupuncture & massage for lower back, upper back & disc pain. Same-week appointments. Call (703) 698-7117.",
  openGraph: {
    title: "Back Pain Treatment Fairfax, VA | Roselle Center for Healing",
    description:
      "30+ years treating back pain in Fairfax County without drugs or surgery. Identify the root cause and build a plan that lasts.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
