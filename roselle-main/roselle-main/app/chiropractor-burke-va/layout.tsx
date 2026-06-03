import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiropractor Near Burke, VA | Roselle Center for Healing – Fairfax",
  description:
    "Burke, VA residents trust Roselle Center for Healing in Fairfax for chiropractic, acupuncture, and holistic wellness. 30+ years of care, 10 minutes from Burke Centre. Call (703) 698-7117.",
  openGraph: {
    title: "Chiropractor Near Burke, VA | Roselle Center for Healing",
    description:
      "Drug-free, multidisciplinary care for Burke and Burke Centre residents. Back pain, sciatica, auto accidents, acupuncture, and more in Fairfax, VA.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
