"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const STORE_LINKS = [
  {
    title: "Ageless Health® Media",
    description:
      "Podcasts, interviews, and educational health media from Dr. Tom Roselle, DC.",
    href: "https://www.drtomroselle.com/",
    image:
      "https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/category/14225030/0/158267277765954295460/AH_logo_2020_5_500x500_png",
  },
  {
    title: "Dr. Tom Roselle Live!® Media",
    description:
      "Watch Dr. Tom Roselle Live!® health and wellness show episodes and clips.",
    href: "https://www.youtube.com/playlist?list=PLSD_TAHzW2viKc2panFxkNwbGcfKwOnoS",
    image:
      "https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/category/14225030/0/1582672796775-111795520/RCFH_logo_2020_R_png",
  },
  {
    title: "Ageless Health® Wellness",
    description:
      "Professional-grade supplements and wellness products recommended by our practitioners.",
    href: "https://us.fullscript.com/welcome/rosellecenter",
    image: null,
  },
];

const PARTNER_PRODUCTS = [
  {
    title: "Fullscript — Order Supplements",
    description:
      "Order supplements through our Fullscript store. Free shipping on orders over $50.",
    href: "https://us.fullscript.com/welcome/rosellecenter",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/450x300_80/webmgr/0g/5/2/2024/rtr-bio-photo-2016.jpg.webp?60de3fe80a9047a9c27cf25f1300a844",
  },
  {
    title: "Lotus Wei — Flower Essences",
    description:
      "Premium flower essence elixirs for emotional wellness and stress relief.",
    href: "https://www.lotuswei.com/?sca_ref=5562388.gogdYBefi6",
    image: null,
  },
  {
    title: "AirTamer — Personal Air Purifiers",
    description:
      "Best-selling rechargeable personal air purifiers. Use promo code Roselle for a discount.",
    href: "https://www.airtamer.com/products/personal-air-purifiers/a310-rechargeable-air-purifier/",
    image: null,
  },
];

export default function IStorePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs mb-s4" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="hover:text-bg transition-colors duration-200">Home</a>
                  <span>/</span>
                  <span className="text-bg">Ageless Health Store</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Ageless Health"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">Store</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  Roselle Center For Healing&rsquo;s Ageless Health Store in Fairfax, VA &mdash; your source for
                  professional-grade supplements, wellness products, and health education media.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Ageless Health Brands ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Shop By Brand</p>
                <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s6">
                  Ageless Health<span className="text-accent">&reg;</span> Products
                </h2>
              </RevealSection>

              <div className="grid grid-cols-3 gap-s6 max-lg:grid-cols-1">
                {STORE_LINKS.map((item, i) => (
                  <RevealSection key={item.title} delay={i * 0.1}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-card-bg rounded-xl p-s6 h-full card-hover-lift"
                      style={{ border: "1px solid rgba(42,41,40,0.06)" }}
                    >
                      {item.image && (
                        <div className="w-20 h-20 mb-s4 rounded-lg overflow-hidden bg-bg flex items-center justify-center p-2">
                          <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                        </div>
                      )}
                      {!item.image && (
                        <div className="w-20 h-20 mb-s4 rounded-lg overflow-hidden bg-fg flex items-center justify-center">
                          <span className="text-2xl text-accent font-serif font-bold">AH</span>
                        </div>
                      )}
                      <h3 className="text-lg font-serif font-semibold text-fg mb-s1">{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.55)" }}>
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm mt-s3 text-accent font-medium group-hover:gap-2.5 transition-all duration-200">
                        Visit Store <span>&rarr;</span>
                      </span>
                    </a>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── Trademark Notice ── */}
          <section className="about-noise bg-fg py-s8">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 text-center">
              <RevealSection>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.45)" }}>
                  Ageless Health<span className="text-accent">&reg;</span> and logos are federally registered trademarks.
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "rgba(245,244,239,0.45)" }}>
                  Dr. Tom Roselle Live!<span className="text-accent">&reg;</span> and logos are federally protected trademarks.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Recommended Products ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Recommended</p>
                <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s3">
                  Partner Products
                </h2>
                <p className="text-fluid-base leading-relaxed mb-s8" style={{ color: "rgba(42,41,40,0.55)" }}>
                  Dr. Roselle recommends these trusted health and wellness brands to support your journey.
                </p>
              </RevealSection>

              <div className="grid grid-cols-3 gap-s6 max-lg:grid-cols-1">
                {PARTNER_PRODUCTS.map((item, i) => (
                  <RevealSection key={item.title} delay={i * 0.1}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-card-bg rounded-xl p-s6 h-full card-hover-lift"
                      style={{ border: "1px solid rgba(42,41,40,0.06)" }}
                    >
                      <div className="w-12 h-12 mb-s4 rounded-full bg-fg flex items-center justify-center">
                        <span className="text-lg text-accent font-serif font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-fg mb-s1">{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.55)" }}>
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm mt-s3 text-accent font-medium group-hover:gap-2.5 transition-all duration-200">
                        Shop Now <span>&rarr;</span>
                      </span>
                    </a>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="rounded-2xl p-s8 max-md:p-s6 text-center"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}>
                  <h2 className="text-fluid-3xl text-bg font-serif leading-tight tracking-tight mb-s3">
                    Questions About Supplements?
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-xl mx-auto mb-s6" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Our practitioners can help you choose the right supplements for your specific health needs.
                    Schedule a consultation to get personalized recommendations.
                  </p>
                  <div className="flex gap-s3 justify-center flex-wrap">
                    <MagneticButton onClick={() => window.location.href = "/appointment"}>
                      Book a Consultation
                    </MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
                      style={{ color: "rgba(245,244,239,0.65)", border: "1px solid rgba(245,244,239,0.15)" }}
                    >
                      (703) 698-7117
                    </a>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours & Location ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 max-lg:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-fg font-serif leading-tight tracking-tight mb-s4">Hours of Operation</h3>
                  <ul className="flex flex-col gap-2">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm py-1.5"
                        style={{ borderBottom: "1px solid rgba(42,41,40,0.08)" }}>
                        <span className="text-fg font-medium">{h.day}</span>
                        <span style={{ color: "rgba(42,41,40,0.55)" }}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-2xl text-fg font-serif leading-tight tracking-tight mb-s4">Location</h3>
                  <div className="rounded-xl overflow-hidden mb-s4" style={{ border: "1px solid rgba(42,41,40,0.08)" }}>
                    <iframe
                      title="Roselle Center for Healing Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.123456!2d-77.306!3d38.856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e8a3c0e1b3d%3A0x1234567890abcdef!2s8500+Executive+Park+Ave+%23300%2C+Fairfax%2C+VA+22031!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="text-sm text-fg font-medium">Roselle Center For Healing</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(42,41,40,0.55)" }}>
                    8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                  </p>
                  <div className="flex flex-col gap-1 mt-s2">
                    <a href="tel:+17036987117" className="text-sm text-accent hover:text-fg transition-colors duration-200">
                      Phone: (703) 698-7117
                    </a>
                    <p className="text-sm" style={{ color: "rgba(42,41,40,0.55)" }}>Fax: (703) 698-5729</p>
                    <a href="mailto:rosellecare@gmail.com" className="text-sm text-accent hover:text-fg transition-colors duration-200">
                      rosellecare@gmail.com
                    </a>
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
