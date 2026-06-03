import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.rosellecare.com"),
  alternates: {
    canonical: "https://www.rosellecare.com",
  },
  openGraph: {
    title: "Roselle Center for Healing",
    description: "Restore your health and vitality with holistic care.",
    siteName: "Roselle Center for Healing",
    type: "website",
    url: "https://www.rosellecare.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roselle Center for Healing | Chiropractor in Fairfax, VA",
    description:
      "Holistic chiropractic, acupuncture, massage & functional medicine in Fairfax, VA. 30+ years. Call (703) 698-7117.",
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
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="google-site-verification" content="g-8XAtFfdRIDiEEqyIgM62EoBhemmQcNZr4MvkkAVDQ" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
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
        {/* JSON-LD: LocalBusiness structured data */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://www.rosellecare.com/#organization",
              "name": "Roselle Center for Healing",
              "alternateName": "Roselle Center for Healing – Dr. Tom Roselle DC",
              "description": "A multidisciplinary holistic wellness center in Fairfax, VA offering chiropractic care, acupuncture, massage therapy, applied kinesiology, holistic nutrition, and functional medicine.",
              "url": "https://www.rosellecare.com",
              "telephone": "+17036987117",
              "email": "info@rosellecare.com",
              "image": "https://www.rosellecare.com/footer-logo-white-txt.png",
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Credit Card, Insurance, HSA, FSA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8500 Executive Park Ave, Suite 300",
                "addressLocality": "Fairfax",
                "addressRegion": "VA",
                "postalCode": "22031",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.8614,
                "longitude": -77.2293
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "07:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "10:00", "closes": "19:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "07:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "14:00", "closes": "19:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "07:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "110",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasMap": "https://maps.app.goo.gl/5WJebWVTjWfPRX3VA",
              "sameAs": [
                "https://www.facebook.com/rosellecare/",
                "https://instagram.com/rosellecenterforhealing",
                "https://www.linkedin.com/in/drtomroselledc"
              ],
              "medicalSpecialty": [
                "Chiropractic",
                "Acupuncture",
                "Massage Therapy",
                "Applied Kinesiology",
                "Functional Medicine",
                "Holistic Nutrition"
              ],
              "availableService": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Chiropractic Care",
                  "url": "https://www.rosellecare.com/services/chiropractic.html"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Acupuncture",
                  "url": "https://www.rosellecare.com/services/acupuncture.html"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Massage Therapy",
                  "url": "https://www.rosellecare.com/services/massage-therapy.html"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Applied Kinesiology",
                  "url": "https://www.rosellecare.com/services/applied-kinesiology.html"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Functional Medicine",
                  "url": "https://www.rosellecare.com/functional-medicine"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Holistic Nutrition",
                  "url": "https://www.rosellecare.com/services/nutrition.html"
                }
              ]
            }),
          }}
        />
        <MotionProvider>
          <FloatingBackground />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
