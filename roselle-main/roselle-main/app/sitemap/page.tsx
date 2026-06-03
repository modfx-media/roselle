"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import CtaBand from "@/app/components/templates/CtaBand";

interface SitemapItem { title: string; href: string; children?: SitemapItem[]; }

const SITEMAP_DATA: SitemapItem[] = [
  { title: "Home", href: "/", children: [{ title: "Center Hours", href: "/about-us/center-hours.html" }, { title: "Directions", href: "/contact-us/directions.html" }] },
  { title: "New Patient Experience", href: "/new-patient-center.html", children: [{ title: "Purpose & Mission", href: "/purpose-a-misson" }, { title: "Online Forms", href: "/online-forms.html" }, { title: "Payment Options", href: "/new-patient-center/payment-options.html" }, { title: "FAQ about Medicare", href: "/new-patient-information/faq-about-medicare.html" }] },
  { title: "About", href: "/about-us.html", children: [{ title: "Dr. Tom Roselle, DC", href: "/dr-tom-roselle-dc.html" }, { title: "Doctors & Specialists", href: "/about-us/meet-the-doctors---therapists.html" }, { title: "Testimonials", href: "/testimonials.html" }] },
  { title: "Services", href: "/services.html", children: [{ title: "Allergy Relief", href: "/allergy-relief" }, { title: "Chronic Pain", href: "/chronic-pain" }, { title: "Chiropractic", href: "/services/chiropractic.html", children: [{ title: "Chiropractic Adjustments", href: "/chiropractic-adjustments" }, { title: "Chiropractic Adjustments FAQs", href: "/chiropractic-adjustments-faqs" }] }, { title: "Sports Medicine", href: "/sports-medicine" }, { title: "Acupuncture", href: "/services/acupuncture.html", children: [{ title: "Acupuncture FAQs", href: "/acupuncture-faqs" }, { title: "Benefits of Acupuncture", href: "/benefits-of-acupuncture" }] }, { title: "Applied Kinesiology", href: "/services/applied-kinesiology.html", children: [{ title: "Kinesiology FAQs", href: "/kinesiology-faqs" }] }, { title: "Functional Medicine", href: "/functional-medicine" }, { title: "Nutrition", href: "/services/nutrition.html" }, { title: "Massage Therapy", href: "/services/massage-therapy.html" }, { title: "Prenatal Chiropractic Care", href: "/prenatal-chiropractic-care" }, { title: "Sciatica Treatment", href: "/sciatica-treatment" }, { title: "Ultra Sound", href: "/ultra-sound" }, { title: "Webster Technique", href: "/webster-technique" }] },
  { title: "Health Education", href: "/education-lectures.html", children: [{ title: "Health Care Orientation", href: "/health-care-orientation" }, { title: "Teleworking Ergonomics Survival Guide", href: "/teleworking-ergonomics-survival-guide" }, { title: "Thyroid Assessment", href: "/thyroid-assessment" }, { title: "Spine Simulator", href: "/spine-simulator.html" }] },
  { title: "Ageless Health Store", href: "/istore" },
  { title: "Contact", href: "/contact", children: [{ title: "Contact a Staff Member", href: "/contact-staff-member.html" }, { title: "Patient Feedback", href: "/contact-us/patient-feedback.html" }] },
  { title: "Blog", href: "/blog" },
  { title: "Articles", href: "/articles/general" },
  { title: "Preferred Providers", href: "/about/preferred-providers.html" },
  { title: "Special Offers", href: "/special-offer.html" },
  { title: "Conditions Treated", href: "/conditions-treated", children: [{ title: "Back Pain", href: "/back-pain", children: [{ title: "Back Pain FAQs", href: "/back-pain-faqs" }] }, { title: "Fibromyalgia", href: "/fibromyalgia", children: [{ title: "Fibromyalgia FAQs", href: "/fibromyalgia-faqs" }] }, { title: "Integrative Health", href: "/integrative-health" }, { title: "Knee Pain", href: "/knee-pain" }, { title: "Lower Back Pain", href: "/lower-back-pain", children: [{ title: "Lower Back Pain FAQs", href: "/lower-back-pain-faqs" }] }, { title: "Muscle Strains & Sprains", href: "/muscle-strains-a-sprains" }, { title: "Neck Pain", href: "/neck-pain", children: [{ title: "Neck Pain FAQs", href: "/neck-pain-faqs" }] }, { title: "Rotator Cuff", href: "/rotator-cuff" }, { title: "Sciatica", href: "/sciatica" }, { title: "Shoulder Pain", href: "/shoulder-pain" }, { title: "Whiplash", href: "/whiplash" }] },
];

function SitemapList({ items, depth = 0 }: { items: SitemapItem[]; depth?: number }) {
  return (
    <ul className={`flex flex-col ${depth === 0 ? "gap-s4" : "gap-1.5"} ${depth > 0 ? "mt-2" : ""}`} style={{ paddingLeft: depth > 0 ? "1.5rem" : 0, borderLeft: depth > 0 ? "1px solid rgba(198,177,128,0.2)" : "none" }}>
      {items.map((item) => (
        <li key={item.href + item.title}>
          <a href={item.href} className={`text-fg hover:text-accent transition-colors ${depth === 0 ? "text-fluid-base font-medium" : "text-sm"}`}>{item.title}</a>
          {item.children && <SitemapList items={item.children} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
}

export default function SiteMapPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Navigation · Fairfax, VA"
            title="Site map."
            subtitle="A complete index of pages on the Roselle Center for Healing website."
            crumbs={[{ label: "Home", href: "/" }, { label: "Site Map" }]}
            image="/services/sitemap.jpg"
            imageAlt="Site map."
            compact
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">All Pages</p>
              <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] mb-s8">Browse the full site.</h2>
              <SitemapList items={SITEMAP_DATA} />
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Need help?" title="Can't find what you're looking for?" body="Our team is happy to help you find the right resource or service." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
