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

export default function UltraSoundPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Ultrasound Therapy · Fairfax, VA"
            title="Ultrasound therapy: deep relief that promotes healing."
            subtitle="Reduce inflammation, restore injured tissue, and improve mobility — non-invasive and drug-free."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Ultra Sound" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x681_80/webmgr/0g/5/2/services_theraputic_ultrasound.jpg.webp?d53f715f2f8fd5a877e5f88a1c9934b3"
            imageAlt="Ultrasound therapy treatment on a patient's knee."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Deep-tissue", label: "Healing" },
              { value: "Non-invasive", label: "Care" },
              { value: "Inflammation", label: "Reduction" },
              { value: "Faster", label: "Recovery" },
            ]}
          />

          <FeatureSplit
            eyebrow="What Is It?"
            title="What Is Ultrasound Therapy?"
            body="Ultrasound therapy is a form of physical therapy that uses sound waves to penetrate deep into the skin to reduce inflammation and promote healing. It can also be used to break up adhesions and fibrous tissue, as well as reduce swelling."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x681_80/webmgr/0g/5/2/services_theraputic_ultrasound.jpg.webp?d53f715f2f8fd5a877e5f88a1c9934b3"
            imageAlt="Ultrasound therapy session."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Conditions Treated"
            title="Ultrasound Therapy Can Help Treat."
            cols={2}
            cards={[
              { title: "Injured Tissue", description: "Helps reduce inflammation and promote healing in injured tissue." },
              { title: "Tendinitis", description: "Helps improve flexibility, reduce pain, and improve mobility." },
              { title: "Muscle Spasms", description: "Sound waves penetrate deep into the skin and release tension in muscle spasms." },
              { title: "Arthritis", description: "Increases circulation and reduces swelling — an effective treatment for arthritis." },
            ]}
          />

          <ContentBlock
            eyebrow="Benefits"
            title="What Are the Benefits of Ultrasound Therapy?"
            body="Ultrasound therapy has many benefits for those suffering from chronic pain or injuries. It can help reduce swelling, improve range of motion, increase blood flow, speed up healing time, reduce nerve irritation, alleviate muscle spasms, and help make movement easier. It can also be used in conjunction with chiropractic care and massage therapy for further relief."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Timeline"
            title="How Long Will It Take to Work?"
            body="The results of ultrasound therapy can be seen almost immediately after the treatment is completed. Depending on the severity of your condition, you may need a series of treatments over time to experience full relief. At Roselle Center for Healing, our expert chiropractors will work with you to develop an individualized treatment plan tailored to your specific needs and goals."
          />

          <ImageCta
            eyebrow="Schedule today"
            title="Schedule your ultrasound today!"
            body="Ultrasound therapy can be a powerful tool to help you find relief from pain and inflammation, and improve your overall health. Call us today to learn more or schedule an appointment."
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=70&auto=format&fit=crop"
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
