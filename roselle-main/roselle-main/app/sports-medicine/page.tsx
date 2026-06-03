"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import ImageCta from "@/app/components/templates/ImageCta";

export default function SportsMedicinePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sports Medicine · Fairfax, VA"
            title="Expert sports medicine & rehabilitation."
            subtitle="Trusted by NFL, NBA, WNBA athletes, Olympians, and weekend warriors alike."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Sports Medicine & Rehabilitation" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sport2.jpg.webp?ef9173d16bb5404a1aa60675b9b7a777"
            imageAlt="Athlete with knee injury during rehabilitation."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Elite", label: "Athletes" },
              { value: "Interdisciplinary", label: "Team" },
              { value: "Tailored", label: "Plans" },
              { value: "Faster", label: "Recovery" },
            ]}
          />

          <FeatureSplit
            eyebrow="Elite Athletic Care"
            title="Sports Medicine & Rehabilitation."
            body="At Roselle Center for Healing, our chiropractors are highly trained to treat various sports-related injuries — from professional athletes to weekend warriors. We specialize in expert sports medicine, physical therapy, and injury rehabilitation, with tailored plans customized to the sport and the individual athlete. Our team has treated athletes across the NFL, NBA, WNBA, top-tier Olympians, and many more."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sport2.jpg.webp?ef9173d16bb5404a1aa60675b9b7a777"
            imageAlt="Sports medicine evaluation."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Comprehensive Treatment"
            title="Our interdisciplinary approach."
            intro="Spinal adjustments, physical medicine rehabilitation, acupuncture, low energy light laser, and nutritional support — combined to give you the physical edge."
            cols={2}
            cards={[
              { title: "Sports Chiropractic Applied Kinesiology", description: "Functional movement assessment and treatment for athletic performance and recovery." },
              { title: "Injury Rehabilitation & Strengthening", description: "Targeted programs to restore strength, stability, and confidence after injury." },
              { title: "Physio Therapy", description: "Hands-on physical therapy techniques designed to accelerate healing." },
              { title: "Acupuncture", description: "Reduces pain and inflammation, promotes recovery, and supports performance." },
              { title: "Nutrition Counseling", description: "Performance-driven nutrition guidance for athletes at every level." },
              { title: "Spinal Decompression & Bio Analysis", description: "Advanced diagnostics and decompression therapy for spinal injuries and chronic pain." },
            ]}
          />

          <ContentBlock
            eyebrow="Recovery"
            title="Starting Your Rehabilitation Journey."
            body={[
              "If you've suffered a sports injury and are seeking rehabilitation, Roselle Center for Healing is here to help. Our experienced team will work with you to develop a personalized treatment plan tailored to your specific needs and goals — from spinal adjustments, acupuncture, and decompression to therapeutic exercises and lifestyle modifications.",
              "Don't let a sports injury sideline you any longer. With our expert guidance and advanced sports medicine and rehabilitation techniques, you can get back to doing what you love with confidence and peace of mind.",
            ]}
          />

          <ImageCta
            eyebrow="Get back to your sport"
            title="Take the first step toward a full and speedy recovery."
            body="Contact Roselle Center for Healing today at (703) 698-7117 to schedule a consultation."
            image="https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=1600&q=70&auto=format&fit=crop"
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
