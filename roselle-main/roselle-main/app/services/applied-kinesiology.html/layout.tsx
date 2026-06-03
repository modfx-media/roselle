import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applied Kinesiology in Fairfax, VA | Roselle Center for Healing",
  description: "Discover the benefits of applied kinesiology at Roselle Center for Healing in Fairfax, VA. Dr. Tom Roselle provides personalized muscle testing and holistic care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
