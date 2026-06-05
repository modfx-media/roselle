import { PRACTICE_STATS } from "../lib/practice-stats";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.rosellecare.com/#business",
    name: "Roselle Center for Healing",
    url: "https://www.rosellecare.com",
    image: "https://www.rosellecare.com/og-image.png",
    telephone: "+1-703-698-7117",
    email: "info@rosellecare.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8500 Executive Park Ave, Suite 300",
      addressLocality: "Fairfax",
      addressRegion: "VA",
      postalCode: "22031",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.8629,
      longitude: -77.2295,
    },
    hasMap: "https://maps.app.goo.gl/5WJebWVTjWfPRX3VA",
    sameAs: [
      "https://www.facebook.com/rosellecare/",
      "https://instagram.com/rosellecenterforhealing",
      "https://www.youtube.com/playlist?list=PLSD_TAHzW2viKc2panFxkNwbGcfKwOnoS",
      "https://www.linkedin.com/in/drtomroselledc",
      "https://www.drtomroselle.com/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "14:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(PRACTICE_STATS.rating),
      reviewCount: String(PRACTICE_STATS.reviewCount),
    },
    medicalSpecialty: [
      "Chiropractic",
      "Acupuncture",
      "Nutrition",
      "FunctionalMedicine",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.rosellecare.com/#website",
    url: "https://www.rosellecare.com",
    name: "Roselle Center for Healing",
    publisher: { "@id": "https://www.rosellecare.com/#business" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rosellecare.com",
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [data, website, breadcrumb],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
