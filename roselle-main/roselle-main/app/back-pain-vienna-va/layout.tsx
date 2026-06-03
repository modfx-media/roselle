import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Back Pain Treatment Near Vienna, VA | Roselle Center for Healing",
  description:
    "Back pain treatment near Vienna, VA at Roselle Center in Fairfax. Chiropractic, massage & disc herniation care — just 10 min from Vienna. Call (703) 698-7117.",
  openGraph: {
    title: "Back Pain Treatment Near Vienna, VA | Roselle Center for Healing",
    description:
      "Vienna residents trust Roselle Center for back pain, disc herniation & sciatica care. 30+ years of drug-free results, 10 min from Vienna.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
