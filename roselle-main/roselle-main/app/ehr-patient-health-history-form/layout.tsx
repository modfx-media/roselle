import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "EHR Patient Health History Form | Roselle Center For Healing",
  description: "Electronic Health Record patient health history form for Roselle Center For Healing.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
