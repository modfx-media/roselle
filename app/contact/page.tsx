"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import SpotlightCard from "../components/motion/SpotlightCard";

const HOURS = [
  { day: "Monday", time: "7:00 am - 5:00 pm" },
  { day: "Tuesday", time: "10:00 am - 7:00 pm" },
  { day: "Wednesday", time: "7:00 am - 5:00 pm" },
  { day: "Thursday", time: "2:00 pm - 7:00 pm" },
  { day: "Friday", time: "7:00 am - 5:00 pm" },
  { day: "Saturday", time: "8:00 am - 1:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:rosellecare@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Contact</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Contact Roselle Center for Healing"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Location Hero with Image ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                {/* Image */}
                <RevealSection>
                  <div className="w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(42,41,40,0.04)" }}>
                    <img
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x512_80/webmgr/0g/5/2/slider_01.jpg.webp?30ed42aefe12e4398d68ac595384cd0c"
                      alt="Roselle Center for Healing logo featuring a human figure and geometric shapes, representing wellness and chiropractic services in Fairfax, VA."
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                {/* Info */}
                <div className="flex flex-col gap-s4">
                  <RevealSection delay={0.1}>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                      Merrifield, VA Location
                    </p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12]">
                      Roselle Center For Healing
                    </h2>
                  </RevealSection>

                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      8500 Executive Park Ave STE 300
                    </p>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Fairfax, VA 22031
                    </p>
                  </RevealSection>

                  <RevealSection delay={0.2}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Phone:{" "}
                      <a href="tel:+17036987117" className="text-fg font-medium transition-colors duration-200 hover:text-accent">
                        (703) 698-7117
                      </a>
                    </p>
                  </RevealSection>

                  <RevealSection delay={0.25}>
                    <div className="flex flex-wrap gap-s3 mt-s2">
                      <MagneticButton
                        className="btn-primary"
                        onClick={() => window.location.href = "tel:+17036987117"}
                      >
                        Call Now
                      </MagneticButton>
                      <MagneticButton
                        className="btn-primary"
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps/place/Roselle+Center+for+Healing/@38.8676434,-77.2399291,17z/data=!4m13!1m7!3m6!1s0x89b64b7fd2c0c23d:0xe47fb75005812289!2s8500+Executive+Park+Ave,+Fairfax,+VA+22031!3b1!8m2!3d38.8676434!4d-77.2377404!3m4!1s0x0:0x2367cc50a24ac1ff!8m2!3d38.867705!4d-77.2378939?hl=en-US",
                            "_blank"
                          )
                        }
                      >
                        Map Directions
                      </MagneticButton>
                    </div>
                  </RevealSection>

                  <RevealSection delay={0.3}>
                    <a
                      href="https://www.rosellecare.com/contact-staff-member.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm mt-s2 transition-colors duration-200 text-accent hover:text-fg"
                    >
                      Contact a Staff Member Directly
                      <span className="arrow-nudge">&rarr;</span>
                    </a>
                  </RevealSection>
                </div>
              </div>
            </div>
          </section>

          {/* ── Map Embed ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Our Location
                </p>
                <SplitReveal
                  text="Fairfax, VA 22031 Office Location"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <div className="mt-s8 rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.2399291!3d38.8676434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b7fd2c0c23d%3A0x2367cc50a24ac1ff!2sRoselle%20Center%20for%20Healing!5e0!3m2!1sen!2sus!4v1"
                    className="w-full aspect-[16/7] max-md:aspect-video"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Roselle Center for Healing location map"
                  />
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Contact Form ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Get In Touch
                </p>
                <SplitReveal
                  text="You can also complete the form below to contact us:"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <div className="mt-s8 max-w-[680px]">
                  <p className="text-xs mb-s6" style={{ color: "rgba(42,41,40,0.45)" }}>
                    Please do not submit any Protected Health Information (PHI).
                  </p>

                  {sent ? (
                    <div className="rounded-xl p-s6 text-sm"
                      style={{
                        background: "rgba(198,177,128,0.1)",
                        border: "1px solid rgba(198,177,128,0.25)",
                        color: "rgba(42,41,40,0.75)",
                      }}>
                      &#10003; &nbsp;Message sent — we&rsquo;ll be in touch soon.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-s4">
                      <div className="grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="c-name" className="text-xs tracking-wide font-medium"
                            style={{ color: "rgba(42,41,40,0.55)" }}>
                            Name
                          </label>
                          <input
                            id="c-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-xl px-s4 py-3 text-sm bg-card-bg border border-transparent
                                       outline-none transition-colors duration-200
                                       input-gold-focus focus:border-accent text-fg placeholder:text-[rgba(42,41,40,0.35)]"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="c-email" className="text-xs tracking-wide font-medium"
                            style={{ color: "rgba(42,41,40,0.55)" }}>
                            Email
                          </label>
                          <input
                            id="c-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-xl px-s4 py-3 text-sm bg-card-bg border border-transparent
                                       outline-none transition-colors duration-200
                                       input-gold-focus focus:border-accent text-fg placeholder:text-[rgba(42,41,40,0.35)]"
                            placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-phone" className="text-xs tracking-wide font-medium"
                          style={{ color: "rgba(42,41,40,0.55)" }}>
                          Phone
                        </label>
                        <input
                          id="c-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="rounded-xl px-s4 py-3 text-sm bg-card-bg border border-transparent
                                     outline-none transition-colors duration-200
                                     input-gold-focus focus:border-accent text-fg placeholder:text-[rgba(42,41,40,0.35)]"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="c-message" className="text-xs tracking-wide font-medium"
                          style={{ color: "rgba(42,41,40,0.55)" }}>
                          Message
                        </label>
                        <textarea
                          id="c-message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="rounded-xl px-s4 py-3 text-sm bg-card-bg border border-transparent
                                     outline-none transition-colors duration-200 resize-y
                                     input-gold-focus focus:border-accent text-fg placeholder:text-[rgba(42,41,40,0.35)]"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <MagneticButton className="btn-primary" type="submit">
                          Submit
                        </MagneticButton>
                      </div>
                    </form>
                  )}
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours & Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">

                {/* Hours */}
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Hours of Operation
                  </h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day}
                        className="flex items-center justify-between py-3 text-sm"
                        style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span style={{ color: "rgba(245,244,239,0.7)" }}>{h.day}</span>
                        <span className="text-bg font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </RevealSection>

                {/* Location */}
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Merrifield Location In Fairfax, VA
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans"
                    style={{ color: "rgba(198,177,128,0.85)" }}>
                    Your Local Chiropractic Clinic
                  </p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">
                    Roselle Center For Healing
                  </p>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Address
                      </p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.7)" }}>
                        8500 Executive Park Ave STE 300<br />Fairfax, VA 22031
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Phone
                      </p>
                      <a href="tel:+17036987117"
                        className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">
                        (703) 698-7117
                      </a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Fax
                      </p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.7)" }}>
                        (703) 698-5729
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Email
                      </p>
                      <a href="mailto:rosellecare@gmail.com"
                        className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">
                        rosellecare@gmail.com
                      </a>
                    </div>
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
