"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import CtaBand from "../components/templates/CtaBand";

export default function SpecialOffersPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Special Offers · Fairfax, VA"
            title="Free 20-minute chiropractic consultation."
            subtitle="Take the first step toward better health with a complimentary consultation at Roselle Center for Healing."
            crumbs={[{ label: "Home", href: "/" }, { label: "Special Offers" }]}
            image="/services/special-offer.jpg"
            imageAlt="Special offers."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="rounded-xl overflow-hidden">
                <Image src="/mothers-day-flyer.webp" alt="Mother's Day wellness specials at Roselle Center for Healing." width={1350} height={1043} className="w-full h-auto" priority />
              </div>
            </div>
          </section>

          <ContentBlock
            tone="dark"
            eyebrow="Free Documentary"
            title="Applied Kinesiology — the BEST-kept secret in healthcare."
            body="Watch the free ICAK-USA documentary on Applied Kinesiology. A deep look at this powerful diagnostic and therapeutic approach used by our practitioners every day."
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <a href="https://www.youtube.com/watch?v=kr89lXmXmHs" target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden">
                <Image src="/icak-documentary-poster.webp" alt="Applied Kinesiology documentary poster." width={1320} height={1020} className="w-full h-auto" />
              </a>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Get started" title="Schedule your free 20-minute consultation today." body="Take advantage of our special offers and start your journey to better health." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
