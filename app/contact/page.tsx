"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureGrid from "../components/templates/FeatureGrid";
import ContentBlock from "../components/templates/ContentBlock";
import CtaBand from "../components/templates/CtaBand";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    window.location.href = `mailto:rosellecare@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Contact · Fairfax, VA"
            title="Contact Roselle Center for Healing."
            subtitle="We'd love to hear from you. Reach out to schedule a visit, ask a question, or learn more about our services."
            crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x512_80/webmgr/0g/5/2/slider_01.jpg.webp?30ed42aefe12e4398d68ac595384cd0c"
            imageAlt="Roselle Center for Healing."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Get directions", href: "https://www.google.com/maps/place/Roselle+Center+for+Healing" }}
          />

          <FeatureGrid
            eyebrow="Merrifield, VA Location"
            title="Roselle Center For Healing."
            cols={2}
            cards={[
              { title: "Address", description: "8500 Executive Park Ave STE 300, Fairfax, VA 22031" },
              { title: "Phone", description: "(703) 698-7117", href: "tel:+17036987117" },
              { title: "Email", description: "rosellecare@gmail.com", href: "mailto:rosellecare@gmail.com" },
              { title: "Map Directions", description: "Open in Google Maps", href: "https://www.google.com/maps/place/Roselle+Center+for+Healing" },
            ]}
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Location</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s8 max-w-[28ch]">Fairfax, VA 22031 office.</h2>
              <div className="rounded-xl overflow-hidden border border-[rgba(245,244,239,0.08)]">
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
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Get In Touch</p>
              <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] mb-s8 max-w-[32ch]">You can also send us a message:</h2>
              {sent ? (
                <div className="max-w-[680px] p-s8 rounded-xl bg-[rgba(198,177,128,0.08)] border border-[rgba(198,177,128,0.2)]">
                  <p className="text-fluid-base text-fg font-medium">Thank you! Your email client should open shortly. If it doesn&apos;t, please email rosellecare@gmail.com directly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-[680px] grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                  <div className="flex flex-col gap-2"><label className="text-xs tracking-widest uppercase text-accent font-sans">Name *</label><input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-card-bg border border-[rgba(42,41,40,0.12)] outline-none focus:border-accent" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs tracking-widest uppercase text-accent font-sans">Email *</label><input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-card-bg border border-[rgba(42,41,40,0.12)] outline-none focus:border-accent" /></div>
                  <div className="flex flex-col gap-2 col-span-2 max-md:col-span-1"><label className="text-xs tracking-widest uppercase text-accent font-sans">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-card-bg border border-[rgba(42,41,40,0.12)] outline-none focus:border-accent" /></div>
                  <div className="flex flex-col gap-2 col-span-2 max-md:col-span-1"><label className="text-xs tracking-widest uppercase text-accent font-sans">Message *</label><textarea required name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-card-bg border border-[rgba(42,41,40,0.12)] outline-none focus:border-accent resize-none" /></div>
                  <div className="col-span-2 max-md:col-span-1 mt-s3"><button type="submit" className="btn-primary">Send Message</button></div>
                </form>
              )}
            </div>
          </section>

          <CtaBand
            tone="gold"
            eyebrow="Ready to begin?"
            title="Schedule a free 20-minute consultation."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
