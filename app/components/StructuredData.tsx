export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Roselle Center for Healing",
    url: "https://www.rosellecare.com",
    telephone: "+1-703-698-7117",
    email: "info@rosellecare.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8500 Executive Park Ave, Suite 300",
      addressLocality: "Fairfax",
      addressRegion: "VA",
      postalCode: "22031",
      addressCountry: "US",
    },
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
      ratingValue: "4.7",
      reviewCount: "110",
    },
    medicalSpecialty: [
      "Chiropractic",
      "Acupuncture",
      "Nutrition",
      "FunctionalMedicine",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
