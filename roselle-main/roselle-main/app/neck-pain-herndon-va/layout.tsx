import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neck Pain Treatment Near Herndon, VA | Roselle Center for Healing",
  description:
    "Neck pain and tech neck treatment near Herndon, VA at Roselle Center in Fairfax. Cervical chiropractic for stiff neck, text neck & headaches. Call (703) 698-7117.",
  openGraph: {
    title: "Neck Pain Treatment Near Herndon, VA | Roselle Center for Healing",
    description:
      "Serving Herndon tech workers with cervical spine care for 30+ years. 15 min from Herndon via Fairfax County Pkwy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
