"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import ContentBlock from "../../components/templates/ContentBlock";
import CtaBand from "../../components/templates/CtaBand";

export default function CenterHoursPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Visit · Fairfax, VA"
            title="Center hours & directions."
            subtitle="Roselle Center For Healing is conveniently located in Fairfax, VA — minutes from I-495."
            crumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us.html" }, { label: "Center Hours" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x512_80/webmgr/0g/5/2/slider_01.jpg.webp?30ed42aefe12e4398d68ac595384cd0c"
            imageAlt="Roselle Center for Healing."
            primaryCta={{ label: "View Office Hours", href: "/contact-us/office-hours.html" }}
            secondaryCta={{ label: "Get directions", href: "/contact-us/directions.html" }}
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Location</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s8 max-w-[28ch]">Directions to the Center.</h2>
              <div className="rounded-xl overflow-hidden border border-[rgba(245,244,239,0.08)]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.2399291!3d38.8676434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b7fd2c0c23d%3A0x2367cc50a24ac1ff!2sRoselle%20Center%20for%20Healing!5e0!3m2!1sen!2sus!4v1" className="w-full aspect-[16/7] max-md:aspect-video" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
              </div>
            </div>
          </section>

          <ContentBlock
            eyebrow="Stay Informed"
            title="Join our mailing list."
            body="Be notified of center updates, special events and health education lectures. Contact our office to be added to our mailing list."
          />

          <CtaBand tone="gold" eyebrow="Free consultation" title="Schedule your first visit." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book an appointment", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
