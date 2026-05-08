"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import FeatureSplit from "../../components/templates/FeatureSplit";
import FeatureGrid from "../../components/templates/FeatureGrid";
import StatStrip from "../../components/templates/StatStrip";
import PillarSection from "../../components/templates/PillarSection";
import ImageCta from "../../components/templates/ImageCta";

export default function MassageTherapyPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Massage Therapy · Fairfax, VA"
            title="Expert massage therapy at Roselle Center for Healing."
            subtitle="A natural way to relax, reduce tension, and support overall health."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Massage Therapy" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x681_80/webmgr/0g/5/2/massage%20therapy.jpg.webp?5d81ced378b1d807f74ed89a022d31f0"
            imageAlt="Massage therapy session."
            primaryCta={{ label: "Book a session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "6+", label: "Techniques" },
              { value: "Tailored", label: "Sessions" },
              { value: "Pain", label: "Relief" },
              { value: "Whole-body", label: "Wellness" },
            ]}
          />

          <FeatureSplit
            eyebrow="Therapeutic Care"
            title="Expert massage therapy in Fairfax, VA."
            body="Massage therapy provides clients with a natural way to relax, reduce tension, and support their overall health. By applying skilled techniques to the muscles and soft tissues, our therapists help alleviate pain, improve circulation, and promote mental well-being."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x681_80/webmgr/0g/5/2/massage%20therapy.jpg.webp?5d81ced378b1d807f74ed89a022d31f0"
            imageAlt="Massage therapy."
          />

          <PillarSection
            tone="dark"
            eyebrow="About"
            title="Understanding massage therapy."
            intro="Massage therapy involves the manipulation of muscles, tendons, and ligaments to relieve discomfort and improve physical function. It addresses chronic pain, injuries, or everyday stress — releasing built-up tension and improving overall mobility."
            cta={{ label: "Book a session", href: "/appointment" }}
            pillars={[
              { title: "Soft-tissue work", description: "Skilled manipulation of muscles, tendons, and ligaments where pain hides." },
              { title: "Chronic relief", description: "Targeted care for chronic pain, recurring tightness, and old injuries." },
              { title: "Daily stress", description: "Releases built-up everyday tension for a calmer body and mind." },
              { title: "Tailored sessions", description: "Each visit is personalized to your body and goals — no two are the same." },
            ]}
          />

          <FeatureGrid
            eyebrow="Techniques"
            title="Types of techniques used."
            intro="There are several types of massage therapy designed to meet different goals:"
            cols={3}
            cards={[
              { title: "Swedish Massage", description: "Gentle, flowing strokes to promote relaxation and improve circulation." },
              { title: "Deep Tissue Massage", description: "Targets deeper muscle layers to relieve chronic tension and knots." },
              { title: "Sports Massage", description: "Focuses on preventing injury and enhancing recovery for athletes." },
              { title: "Trigger Point Therapy", description: "Applies pressure to specific points to reduce localized pain." },
              { title: "Prenatal Massage", description: "Designed for expectant mothers to reduce pregnancy-related discomfort." },
              { title: "Reflexology", description: "Stimulates pressure points on the feet or hands linked to other body areas." },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Key Benefits"
            title="The benefits of massage therapy."
            intro="A wide range of benefits that support both body and mind."
            cols={3}
            cards={[
              { title: "Tension Relief", description: "Reduces muscle tension and stiffness throughout the body." },
              { title: "Pain & Mobility", description: "Alleviates chronic pain and improves joint mobility." },
              { title: "Circulation", description: "Enhances blood circulation and promotes faster healing." },
              { title: "Stress Relief", description: "Lowers stress and anxiety levels." },
              { title: "Mood Boost", description: "Boosts mood through the release of endorphins." },
              { title: "Recovery", description: "Supports recovery from injuries and physical exertion." },
            ]}
          />

          <ImageCta
            eyebrow="Visit us"
            title="Visit Roselle Center for Healing today."
            body="If you're considering massage therapy, contact our team — we're happy to answer any questions you may have and help you schedule your appointment."
            image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=70&auto=format&fit=crop"
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
