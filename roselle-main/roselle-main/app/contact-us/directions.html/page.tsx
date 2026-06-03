"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import ContentBlock from "../../components/templates/ContentBlock";
import CtaBand from "../../components/templates/CtaBand";

export default function DirectionsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Find Us · Fairfax, VA"
            title="Directions to Roselle Center for Healing."
            subtitle="Less than a mile off I-495 on Route 50 (Arlington Boulevard) in Fairfax, Virginia."
            crumbs={[{ label: "Home", href: "/" }, { label: "Directions" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x512_80/webmgr/0g/5/2/slider_01.jpg.webp?30ed42aefe12e4398d68ac595384cd0c"
            imageAlt="Roselle Center for Healing."
            primaryCta={{ label: "Open Google Maps", href: "https://www.google.com/maps/dir//Roselle+Center+for+Healing,+8500+Executive+Park+Ave+%23300,+Fairfax,+VA+22031" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <ContentBlock
            eyebrow="How to Find Us"
            title="Step-by-step directions."
            body={[
              "START - DC / VA: From the northern Virginia suburbs or from Washington, DC, take I-66 to the beltway (I-495).",
              "START - MD: From Maryland, take I-495 toward northern Virginia / Fairfax.",
              "From I-66, take I-495 South (toward Alexandria) for 0.5 miles.",
              "Take the Exit for Route 50 / Arlington Boulevard West (toward Fairfax). Stay left at the fork on the exit ramp to merge onto Route 50 / Arlington Boulevard.",
              "Travel approximately 0.5 miles to the stoplight at Prosperity Avenue. Turn right at the light then take an immediate right onto Executive Park Avenue. We are located in the first building on the left — 3rd Floor.",
            ]}
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Location</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s8 max-w-[28ch]">Merrifield Location in Fairfax, VA.</h2>
              <div className="rounded-xl overflow-hidden border border-[rgba(245,244,239,0.08)]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.2399291!3d38.8676434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b7fd2c0c23d%3A0x2367cc50a24ac1ff!2sRoselle%20Center%20for%20Healing!5e0!3m2!1sen!2sus!4v1" className="w-full aspect-[16/7] max-md:aspect-video" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
              </div>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Free consultation" title="Plan your first visit." body="Call us today to schedule your free 20-minute consultation." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book an appointment", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
