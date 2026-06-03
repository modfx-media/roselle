import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sciatica Treatment Fairfax, VA | Roselle Center for Healing",
  description:
    "Sciatica treatment in Fairfax, VA without drugs or surgery. Chiropractic spinal decompression, acupuncture & soft-tissue therapy for leg pain, numbness & sciatic nerve pain. Call (703) 698-7117.",
  openGraph: {
    title: "Sciatica Treatment Fairfax, VA | Roselle Center for Healing",
    description:
      "Holistic, drug-free sciatica care at Roselle Center in Fairfax, VA. Address the nerve compression, not just the pain. 30+ years experience.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
