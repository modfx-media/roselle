"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import StatStrip from "@/app/components/templates/StatStrip";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function AllergyReliefPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Allergy Relief · Fairfax, VA"
            title="Natural allergy relief that addresses the root cause."
            subtitle="A whole-body approach combining chiropractic care, allergy testing, and lifestyle support."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Allergy Relief" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_functional_food_allergies.jpg.webp?68eef3a29713848aea38b07d9ef30806"
            imageAlt="Woman showing signs of an allergic reaction."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Natural", label: "Approach" },
              { value: "Drug-free", label: "Care" },
              { value: "Personalized", label: "Plans" },
              { value: "Whole-body", label: "Wellness" },
            ]}
          />

          <FeatureSplit
            eyebrow="Holistic Allergy Care"
            title="Natural Allergy Relief in Fairfax, VA."
            body="Many people in Fairfax, VA struggle with allergies, often turning to medications that only provide temporary relief. At Roselle Center For Healing, we take a different approach. Rather than masking the symptoms, our clinic focuses on identifying and addressing the root cause of allergic reactions. This approach helps patients experience more lasting results."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_functional_food_allergies.jpg.webp?68eef3a29713848aea38b07d9ef30806"
            imageAlt="Allergy relief consultation."
          />

          <PillarSection
            tone="dark"
            eyebrow="Nervous System & Allergies"
            title="The Role of the Nervous System in Allergic Reactions."
            intro="Your nervous system plays a vital role in how your body responds to allergens. If there is interference in the communication between the brain and body, your immune response can become exaggerated. Our chiropractors use chiropractic adjustments to help restore proper nervous system function. By improving this communication, the body may be better equipped to handle environmental triggers and reduce the frequency or intensity of allergy symptoms."
            cta={{ label: "Book a consultation", href: "/appointment" }}
            pillars={[
              { title: "Brain-body comms", description: "Healthy nerve signals shape balanced immune responses." },
              { title: "Adjustments", description: "Chiropractic care restores proper nervous system function." },
              { title: "Reduced flare-ups", description: "Better signaling can mean fewer or milder symptoms." },
              { title: "Whole-body support", description: "A foundation that helps the body handle daily triggers." },
            ]}
          />

          <ContentBlock
            eyebrow="Chiropractic Support"
            title="Chiropractic Care as a Natural Support for Allergies."
            body="Chiropractic care does not treat allergies directly, but it helps support the body's natural ability to regulate its immune response. When the spine is aligned properly, the body tends to function more efficiently. Patients often report reduced sinus congestion, fewer headaches, and better breathing after regular chiropractic visits. Our clinic combines chiropractic care with holistic strategies to enhance the body's overall wellness."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Testing & Diagnosis"
            title="The Importance of Allergy Testing."
            body="Before beginning care, we recommend thorough allergy testing to better understand what substances may be triggering your symptoms. Identifying specific allergens allows our team to create a more personalized care plan. In some cases, lifestyle changes or targeted supplements may complement your chiropractic care. The goal is to reduce your body's sensitivity over time while improving immune resilience."
          />

          <ChecklistSplit
            eyebrow="Comprehensive Care"
            title="A Whole-Body Approach to Allergy Relief."
            body="At Roselle Center For Healing, our chiropractors take a whole-body approach to managing allergies. We consider spinal health, diet, environment, and stress levels when designing care for each patient. This comprehensive method helps us better serve individuals looking for a natural way to manage allergies. If you are searching for a chiropractor near you who understands the complexities of allergic responses, our team is ready to help."
            image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Holistic allergy care."
            items={[
              "Spinal health and alignment review",
              "Dietary guidance and trigger awareness",
              "Environmental factor evaluation",
              "Stress management for immune balance",
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact Roselle Center For Healing for allergy relief."
            body="Living with allergies can be frustrating, but you do not have to manage it alone. By combining chiropractic care with allergy testing and customized recommendations, we support your body's ability to adapt and heal. Call today to schedule an appointment and begin your journey toward lasting allergy relief."
            image="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&q=70&auto=format&fit=crop"
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
