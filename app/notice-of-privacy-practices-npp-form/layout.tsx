import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Notice of Privacy Practices (NPP) Form | Roselle Center For Healing",
  description: "This notice describes how medical information about you may be used and disclosed and how you can get access to this information.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
