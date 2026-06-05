import type { Metadata, Viewport } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingBackground from "./components/FloatingBackground";
import MotionProvider from "./components/MotionProvider";
import StructuredData from "./components/StructuredData";

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
  metadataBase: new URL('https://www.rosellecare.com'),
  alternates: { canonical: '/' },
  title: "Roselle Center for Healing | Chiropractor in Fairfax, VA",
  description:
    "Experience holistic chiropractic care at Roselle Center for Healing in Fairfax, VA. Chiropractic, massage therapy, acupuncture, thermography & nutritional guidance.",
  openGraph: {
    title: "Roselle Center for Healing",
    description: "Restore your health and vitality with holistic care.",
    siteName: "Roselle Center for Healing",
    type: "website",
    url: "https://www.rosellecare.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roselle Center for Healing — Holistic chiropractic care in Fairfax, VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roselle Center for Healing",
    description: "Restore your health and vitality with holistic care.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#091321",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="g-8XAtFfdRIDiEEqyIgM62EoBhemmQcNZr4MvkkAVDQ" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <StructuredData />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DDTSPD3MQC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DDTSPD3MQC');
          `}
        </Script>
        <MotionProvider>
          <FloatingBackground />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
