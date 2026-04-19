"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const SITEMAP_DATA = [
  {
    title: "Home", href: "/",
    children: [
      { title: "Center Hours", href: "/about-us/center-hours.html" },
      { title: "Directions", href: "/contact-us/directions.html" },
    ],
  },
  {
    title: "New Patient Experience", href: "/new-patient-center.html",
    children: [
      { title: "Purpose & Mission", href: "/purpose-a-misson" },
      { title: "New Patient Center", href: "/new-patient-center.html" },
      { title: "Online Forms", href: "/online-forms.html" },
      { title: "Payment Options", href: "/new-patient-center/payment-options.html" },
      { title: "FAQ about Medicare", href: "/new-patient-information/faq-about-medicare.html" },
    ],
  },
  {
    title: "About", href: "/about-us.html",
    children: [
      { title: "Dr. Tom Roselle, DC", href: "https://www.drtomroselle.com/" },
      { title: "Doctors & Specialists", href: "/about-us.html/staff" },
      { title: "Testimonials", href: "/testimonials.html" },
    ],
  },
  {
    title: "Services", href: "/services.html",
    children: [
      { title: "Allergy Relief", href: "/allergy-relief" },
      { title: "Chronic Pain", href: "/chronic-pain" },
      {
        title: "Chiropractic", href: "/services/chiropractic.html",
        children: [
          { title: "Chiropractic Adjustments", href: "/chiropractic-adjustments" },
          { title: "Chiropractic Adjustments FAQs", href: "/chiropractic-adjustments-faqs" },
        ],
      },
      { title: "Sports Medicine & Rehabilitation", href: "/sports-medicine" },
      {
        title: "Acupuncture", href: "/services/acupuncture.html",
        children: [
          { title: "Acupuncture FAQs", href: "/acupuncture-faqs" },
          { title: "Benefits of Acupuncture", href: "/benefits-of-acupuncture" },
        ],
      },
      {
        title: "Applied Kinesiology", href: "/services/applied-kinesiology.html",
        children: [
          { title: "Kinesiology FAQS", href: "/kinesiology-faqs" },
        ],
      },
      { title: "Functional Medicine", href: "/functional-medicine" },
      { title: "Nutrition", href: "/services/nutrition.html" },
      { title: "Lower Back Pain", href: "/lower-back-pain" },
      { title: "Massage Therapy", href: "/services/massage-therapy.html" },
      { title: "Prenatal Chiropractic Care", href: "/prenatal-chiropractic-care" },
      { title: "Prenatal Chiropractic", href: "/prenatal-chiropractic" },
      { title: "Sciatica Treatment", href: "/sciatica-treatment" },
      { title: "Ultra Sound", href: "/ultra-sound" },
      { title: "Webster Technique", href: "/webster-technique" },
    ],
  },
  {
    title: "Health Education", href: "/education-lectures.html",
    children: [
      { title: "Health Care Orientation", href: "/health-care-orientation" },
      { title: "Teleworking: Ergonomics Survival Guide", href: "/teleworking-ergonomics-survival-guide" },
      { title: "Thyroid Assessment", href: "/thyroid-assessment" },
      { title: "Spine Simulator", href: "/spine-simulator.html" },
    ],
  },
  { title: "Ageless Health Store", href: "/istore" },
  {
    title: "Contact", href: "/contact",
    children: [
      { title: "Contact a Staff Member Directly", href: "/contact-staff-member.html" },
      { title: "Patient Feedback", href: "/contact-us/patient-feedback.html" },
    ],
  },
  {
    title: "Latest News", href: "/blog",
    children: [
      {
        title: "Community Content", href: "/articles/general",
        children: [
          { title: "About Chiropractic Care", href: "/articles/general/category/39542" },
          { title: "Common Conditions Treated", href: "/articles/general/category/39539" },
          { title: "Health & Wellness", href: "/articles/general/category/64024" },
          { title: "Therapies & Techniques", href: "/articles/general/category/64025" },
          { title: "Newsletter Library", href: "/articles/general/category/39807" },
          { title: "Wellness4Kids", href: "/articles/general/category/39627" },
        ],
      },
    ],
  },
  { title: "Preferred Providers", href: "/about/preferred-providers.html" },
  { title: "Special Offers", href: "/special-offer.html" },
  {
    title: "Where is Your Pain? Conditions Treated", href: "/conditions-treated",
    children: [
      {
        title: "Back Pain", href: "/back-pain",
        children: [
          { title: "Back Pain FAQs", href: "/back-pain-faqs" },
        ],
      },
      {
        title: "Fibromyalgia", href: "/fibromyalgia",
        children: [
          { title: "Fibromyalgia FAQs", href: "/fibromyalgia-faqs" },
        ],
      },
      { title: "Integrative Health", href: "/integrative-health" },
      { title: "Knee Pain", href: "/knee-pain" },
      { title: "Lower Back Pain FAQs", href: "/lower-back-pain-faqs" },
      { title: "Muscle Strains & Sprains", href: "/muscle-strains-a-sprains" },
      {
        title: "Neck Pain", href: "/neck-pain",
        children: [
          { title: "Neck Pain FAQs", href: "/neck-pain-faqs" },
        ],
      },
      { title: "Rotator Cuff", href: "/rotator-cuff" },
      { title: "Sciatica", href: "/sciatica" },
      { title: "Shoulder Pain", href: "/shoulder-pain" },
      { title: "Whiplash", href: "/whiplash" },
    ],
  },
];

interface SitemapItem {
  title: string;
  href: string;
  children?: SitemapItem[];
}

function SitemapList({ items, depth = 0 }: { items: SitemapItem[]; depth?: number }) {
  return (
    <ul className={`flex flex-col ${depth === 0 ? "gap-s4" : "gap-1.5"} ${depth > 0 ? "mt-2" : ""}`}
      style={{ paddingLeft: depth > 0 ? "1.5rem" : 0, borderLeft: depth > 0 ? "1px solid rgba(198,177,128,0.2)" : "none" }}>
      {items.map((item) => (
        <li key={item.href + item.title}>
          <a
            href={item.href}
            className={`text-fg hover:text-accent transition-colors duration-200 ${depth === 0 ? "text-fluid-base font-medium" : "text-sm"}`}
          >
            {item.title}
          </a>
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

          {/* ── Hero ── */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Site Map</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Site Map" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Sitemap List (light) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Navigation</p>
                <SplitReveal text="All Pages" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="mt-s8">
                  <SitemapList items={SITEMAP_DATA} />
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours + Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (<div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}><span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span><span className="text-bg font-medium">{h.time}</span></div>))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p><a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p></div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
