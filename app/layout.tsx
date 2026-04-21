import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import FloatingBackground from "./components/FloatingBackground";
import MotionProvider from "./components/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roselle Center for Healing | Chiropractor in Fairfax, VA",
  description:
    "Experience holistic chiropractic care at Roselle Center for Healing in Fairfax, VA. Chiropractic, massage therapy, acupuncture, thermography & nutritional guidance.",
  openGraph: {
    title: "Roselle Center for Healing",
    description: "Restore your health and vitality with holistic care.",
    siteName: "Roselle Center for Healing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable}`}
    >
      <body className="antialiased">
        <MotionProvider>
          <FloatingBackground />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
