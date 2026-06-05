import type { MetadataRoute } from "next";

const BASE = "https://www.rosellecare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Homepage ── */
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },

    /* ── New Patient Experience ── */
    { url: `${BASE}/new-patient-center.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/purpose-and-mission`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/online-forms.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/new-patient-center/payment-options.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/new-patient-information/faq-about-medicare.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── About ── */
    { url: `${BASE}/about-us.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about-us/meet-the-doctors---therapists.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about-us/center-hours.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/testimonials.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── Services ── */
    { url: `${BASE}/services.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/allergy-relief`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/chronic-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/chiropractic.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/chiropractic-adjustments`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/chiropractic-adjustments-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sports-medicine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/acupuncture.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/acupuncture-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/benefits-of-acupuncture`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/applied-kinesiology.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kinesiology-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/functional-medicine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/nutrition.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lower-back-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/massage-therapy.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/prenatal-chiropractic-care`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/prenatal-chiropractic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sciatica-treatment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ultra-sound`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/webster-technique`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    /* ── Health Education ── */
    { url: `${BASE}/education-lectures.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/health-care-orientation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/teleworking-ergonomics-survival-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/thyroid-assessment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/spine-simulator.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── Store ── */
    { url: `${BASE}/istore`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── Contact ── */
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact-staff-member.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact-us/patient-feedback.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact-us/directions.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── Blog / News ── */
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/podcast`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/articles/general`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── More ── */
    { url: `${BASE}/about/preferred-providers.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/special-offer.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    /* ── Conditions Treated ── */
    { url: `${BASE}/conditions-treated`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/back-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/back-pain-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/fibromyalgia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/fibromyalgia-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/integrative-health`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/knee-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lower-back-pain-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/muscle-strains-a-sprains`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/neck-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/neck-pain-faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rotator-cuff`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sciatica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/shoulder-pain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/whiplash`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
