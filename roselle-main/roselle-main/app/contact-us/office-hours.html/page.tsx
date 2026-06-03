"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import CtaBand from "@/app/components/templates/CtaBand";

const HOURS = [
  { day: "Monday", time: "7:00am - 6:00pm" },
  { day: "Tuesday", time: "10:00am - 7:00pm" },
  { day: "Wednesday", time: "7:00am - 6:00pm" },
  { day: "Thursday", time: "2:00pm - 7:00pm" },
  { day: "Friday", time: "7:00am - 5:00pm" },
  { day: "Saturday", time: "8:00am - 1:00pm" },
  { day: "Sunday", time: "CLOSED" },
];

export default function OfficeHoursPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Hours · Fairfax, VA"
            title="Office hours."
            subtitle="We are open six days a week to serve you. Call (703) 698-7117 for available appointments."
            crumbs={[{ label: "Home", href: "/" }, { label: "Office Hours" }]}
            image="/services/office-time.jpg"
            imageAlt="Office hours."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book an appointment", href: "/appointment" }}
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[640px] mx-auto">
                <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans text-center">Weekly Schedule</p>
                <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] mb-s8 text-center">Roselle Center For Healing hours.</h2>
                <div className="flex flex-col">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-4 text-fluid-base border-b border-[rgba(42,41,40,0.1)]">
                      <span className="font-medium text-fg">{h.day}</span>
                      <span className="text-fg/70">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-s8 text-center">
                  <p className="text-fluid-base text-fg font-medium">Roselle Center For Healing</p>
                  <p className="text-fluid-base text-fg/70 mt-s2">8500 Executive Park Ave. #300A, Fairfax, VA 22031</p>
                  <p className="text-fluid-base text-fg/70 mt-s2">Phone: <a href="tel:+17036987117" className="text-fg font-medium hover:text-accent transition-colors">(703) 698-7117</a></p>
                  <p className="text-fluid-base text-fg/70">Fax: 703-698-5729</p>
                </div>
              </div>
            </div>
          </section>

          <ContentBlock
            tone="dark"
            eyebrow="Important Update"
            title="COVID-19 update — we are now open."
            body="Please call (703) 698-7117 for available appointments. We've implemented enhanced safety protocols to keep our patients and team healthy during your visit."
          />

          <CtaBand tone="gold" eyebrow="Book your visit" title="Schedule your appointment." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
