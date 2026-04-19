import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description:
    "Roselle Center For Healing is your local Chiropractor in Fairfax, VA serving all of your needs. Call us today at (703) 698-7117 for an appointment! Articles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
