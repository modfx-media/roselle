import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: "/services", destination: "/services.html", permanent: true },
      { source: "/about-us", destination: "/about-us.html", permanent: true },
      { source: "/about", destination: "/about-us.html", permanent: true },
      { source: "/new-patient-center", destination: "/new-patient-center.html", permanent: true },
      { source: "/online-forms", destination: "/online-forms.html", permanent: true },
      { source: "/testimonials", destination: "/testimonials.html", permanent: true },
      { source: "/education-lectures", destination: "/education-lectures.html", permanent: true },
      { source: "/services/chiropractic", destination: "/services/chiropractic.html", permanent: true },
      { source: "/services/acupuncture", destination: "/services/acupuncture.html", permanent: true },
      { source: "/services/applied-kinesiology", destination: "/services/applied-kinesiology.html", permanent: true },
      { source: "/services/nutrition", destination: "/services/nutrition.html", permanent: true },
      { source: "/services/massage-therapy", destination: "/services/massage-therapy.html", permanent: true },
      { source: "/purpose-and-mission", destination: "/purpose-and-mission", permanent: true },
      { source: "/sciatica-treatment", destination: "/sciatica", permanent: true },
      { source: "/prenatal-chiropractic-care", destination: "/prenatal-chiropractic", permanent: true },
      { source: "/lower-back-pain", destination: "/back-pain", permanent: true },
    ];
  },
};

export default nextConfig;
