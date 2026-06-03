import Script from "next/script";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import CtaBand from "../components/templates/CtaBand";

export default function AppointmentPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Schedule · Fairfax, VA"
            title="Request an appointment."
            subtitle="Call us directly or email our office to schedule your visit. We will do our best to accommodate your preferred day and time."
            crumbs={[{ label: "Home", href: "/" }, { label: "Appointment Request" }]}
            image="/services/online-appointment.jpg"
            imageAlt="Schedule an appointment."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email info@rosellecare.com", href: "mailto:info@rosellecare.com" }}
          />

          <section className="bg-bg py-section-py relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                top: "-10%",
                left: "-8%",
                width: "520px",
                height: "520px",
                background:
                  "radial-gradient(circle, rgba(198,177,128,0.10) 0%, transparent 65%)",
              }}
            />

            <div className="relative w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="mb-s10">
                <div className="flex items-center gap-3 mb-s4">
                  <span
                    className="w-6 h-px"
                    style={{ background: "rgba(198,177,128,0.5)" }}
                  />
                  <p className="text-xs tracking-[0.22em] uppercase font-sans text-accent">
                    How to book
                  </p>
                </div>
                <h2 className="text-fluid-4xl text-fg tracking-tight leading-[1.05] max-w-[24ch]">
                  Two easy ways to schedule.
                </h2>
                <p
                  className="mt-s4 max-w-[60ch] text-sm leading-relaxed"
                  style={{ color: "rgba(42,41,40,0.7)" }}
                >
                  Call us directly or email our office to request your appointment. Your
                  appointment is not confirmed until you receive confirmation from our
                  office.
                </p>
              </div>

              <div className="grid grid-cols-[1.05fr_1fr] gap-s8 items-start max-lg:grid-cols-1 max-lg:gap-s6">
                {/* Left — info cards 2x2 */}
                <div className="grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
                  {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" />
                      </svg>
                    ),
                    label: "Call us",
                    value: "(703) 698-7117",
                    href: "tel:+17036987117",
                    cta: "Tap to call",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    ),
                    label: "Email us",
                    value: "info@rosellecare.com",
                    href: "mailto:info@rosellecare.com",
                    cta: "Send email",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 14" />
                      </svg>
                    ),
                    label: "Office Hours",
                    value: "Mon–Fri 7am–7pm · Sat 8am–1pm",
                    href: "#",
                    cta: "View full schedule",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    ),
                    label: "Visit us",
                    value: "8500 Executive Park Ave STE 300, Fairfax, VA 22031",
                    href: "https://www.google.com/maps/place/Roselle+Center+for+Healing",
                    cta: "Get directions",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-s3 p-s5 rounded-2xl transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.65)",
                      border: "1px solid rgba(42,41,40,0.08)",
                    }}
                  >
                    <span
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors"
                      style={{
                        background: "rgba(198,177,128,0.12)",
                        color: "#c6b180",
                        border: "1px solid rgba(198,177,128,0.35)",
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium mb-1">
                        {c.label}
                      </p>
                      <p className="text-sm text-fg leading-snug">{c.value}</p>
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs mt-auto transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ color: "rgba(42,41,40,0.7)" }}
                    >
                      {c.cta}
                      <span aria-hidden="true">→</span>
                    </span>
                  </a>
                ))}
                </div>

                {/* Right — appointment request form (GHL embed) */}
                <div
                  className="p-s6 rounded-2xl max-sm:p-s5 relative overflow-hidden"
                  style={{
                    background: "#091321",
                    boxShadow:
                      "0 24px 60px rgba(10,22,40,0.18), 0 0 0 1px rgba(245,244,239,0.06)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute pointer-events-none"
                    style={{
                      top: "-30%",
                      right: "-20%",
                      width: "320px",
                      height: "320px",
                      background:
                        "radial-gradient(circle, rgba(198,177,128,0.18) 0%, transparent 65%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-s2">
                      <span
                        className="w-6 h-px"
                        style={{ background: "rgba(198,177,128,0.6)" }}
                      />
                      <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium">
                        Request by Form
                      </p>
                    </div>
                    <h3 className="text-fluid-2xl text-bg tracking-tight leading-tight mb-s5">
                      Send us your appointment request.
                    </h3>

                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: "#f5f4ef",
                        border: "1px solid rgba(198,177,128,0.25)",
                        boxShadow:
                          "0 12px 30px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.04)",
                      }}
                    >
                      <iframe
                        src="https://api.leadconnectorhq.com/widget/form/fogoqXFCsjN9Hfn6659b"
                        style={{
                          width: "100%",
                          height: "878px",
                          border: "none",
                          borderRadius: "25px",
                          display: "block",
                        }}
                        id="inline-fogoqXFCsjN9Hfn6659b"
                        data-layout='{"id":"INLINE"}'
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Appointment Request"
                        data-height="878"
                        data-layout-iframe-id="inline-fogoqXFCsjN9Hfn6659b"
                        data-form-id="fogoqXFCsjN9Hfn6659b"
                        title="Appointment Request"
                      />
                    </div>

                    <p
                      className="mt-s4 text-[11px] leading-relaxed"
                      style={{ color: "rgba(245,244,239,0.55)" }}
                    >
                      Submitting this form is a request only. Your appointment is not
                      confirmed until our office contacts you.
                    </p>
                  </div>
                  <Script
                    src="https://link.msgsndr.com/js/form_embed.js"
                    strategy="lazyOnload"
                  />
                </div>
              </div>
            </div>
          </section>

          <CtaBand
            tone="gold"
            eyebrow="Ready to begin?"
            title="Schedule your visit today."
            body="Take the next step toward better health with Roselle Center For Healing in Fairfax, VA."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email us", href: "mailto:info@rosellecare.com" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
