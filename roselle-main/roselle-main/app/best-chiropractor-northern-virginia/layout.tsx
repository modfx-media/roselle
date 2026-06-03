import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Chiropractor Northern Virginia | Roselle Center for Healing",
  description:
    "Roselle Center for Healing has been Northern Virginia's trusted chiropractic and integrative wellness provider since the 1990s. 4.7★ on Google, 110 reviews. Serving Fairfax, Vienna, Burke, Herndon. Call (703) 698-7117.",
  openGraph: {
    title: "Best Chiropractor Northern Virginia | Roselle Center for Healing",
    description:
      "30+ years of results. 110+ Google reviews. Six specialties in one practice. See why Northern Virginia families choose Roselle Center for Healing in Fairfax, VA.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
