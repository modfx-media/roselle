import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact a Staff Member Directly | Roselle Center For Healing",
  description: "Contact a staff member directly at Roselle Center For Healing in Fairfax, VA. Reach our front desk by phone, fax, or email.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
