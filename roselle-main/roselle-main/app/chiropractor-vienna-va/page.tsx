"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import Testimonials from "../components/Testimonials";
import PageHero from "../components/templates/PageHero";
import StatStrip from "../components/templates/StatStrip";
import FeatureSplit from "../components/templates/FeatureSplit";
import PillarSection from "../components/templates/PillarSection";
import FaqAccordion from "../components/templates/FaqAccordion";
import FeatureGrid from "../components/templates/FeatureGrid";
import ImageCta from "../components/templates/ImageCta";
import CtaBand from "../components/templates/CtaBand";

export default function ChiropractorViennaVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Serving Vienna, VA · 10 min from Maple Ave"
            title="Chiropractic & holistic care close to Vienna, VA."
            subtitle="Vienna residents don't have to go far for expert care. Roselle Center for Healing in Fairfax offers chiropractic, acupuncture, massage, and functional medicine — a 10-minute drive via I-66 or Route 123."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/sitemap" },
              { label: "Chiropractor Near Vienna, VA" },
            ]}
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Northern Virginia community — serving Vienna and surrounding areas"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "~10 min", label: "From Vienna via Rt. 123" },
              { value: "30+", label: "Years treating Northern VA" },
              { value: "6", label: "Specialties under one roof" },
              { value: "4.7★", label: "110 Google reviews" },
            ]}
          />

          <FeatureSplit
            eyebrow="Why Vienna Residents Choose Us"
            title="Multidisciplinary care your whole family can rely on."
            body={[
              "Vienna, VA sits in the heart of Fairfax County — minutes from our clinic at 8500 Executive Park Ave. Whether you're dealing with back pain from your Tysons commute, stress headaches, or a sports injury from one of Vienna's many recreational programs, our team creates a personalized plan that addresses the root cause.",
              "Unlike single-specialty offices, we have chiropractors, licensed acupuncturists, massage therapists, holistic nutritionists, and thermography specialists on staff. One appointment, coordinated care.",
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/backpain2.jpg.webp?5e09f2e65d557a69799049a7fdb7935b"
            imageAlt="Patient consultation at Roselle Center for Healing near Vienna VA"
            bullets={[
              "Free 20-minute consultation for new patients",
              "Same-week scheduling available",
              "Accepts most major insurance plans",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Our Approach"
            title="How we help Vienna residents heal and stay healthy."
            intro="Fairfax County's commuter lifestyle — long drives, desk jobs, high-stress careers — takes a measurable toll on the musculoskeletal and nervous system. Our care protocols are built specifically for that reality."
            cta={{ label: "See all services", href: "/services.html" }}
            pillars={[
              {
                title: "Chiropractic Adjustments",
                description:
                  "Precise spinal manipulation restores alignment and relieves the nerve pressure that causes back pain, neck pain, and headaches common to desk workers and commuters.",
              },
              {
                title: "Acupuncture",
                description:
                  "Traditional and contemporary acupuncture techniques support pain relief, stress reduction, and systemic balance — particularly effective for tension headaches and chronic inflammation.",
              },
              {
                title: "Applied Kinesiology",
                description:
                  "Muscle-testing diagnostics help identify functional imbalances that X-rays miss, guiding more targeted chiropractic and nutritional interventions.",
              },
              {
                title: "Therapeutic Massage",
                description:
                  "Sports and therapeutic massage releases soft-tissue tension accumulated from repetitive strain, sedentary work, and athletic activity.",
              },
              {
                title: "Holistic Nutrition",
                description:
                  "Nutrition analysis and supplementation plans that support your body's natural healing — especially useful for inflammatory conditions and fatigue.",
              },
              {
                title: "Functional Medicine",
                description:
                  "Root-cause investigation using thermography and integrative medicine protocols for chronic, complex conditions that haven't responded to conventional care.",
              },
            ]}
          />

          <FeatureGrid
            eyebrow="Common Conditions We Treat"
            title="What Vienna patients come to us for."
            intro="From acute injuries to chronic conditions, our Northern Virginia patients bring us a consistent set of concerns. Here's what we see most — and how we address each."
            cols={3}
            cards={[
              {
                icon: "🔙",
                title: "Back & Neck Pain",
                description:
                  "The #1 reason patients visit us. We identify whether the root cause is disc, muscle, joint, or nerve — then build a targeted plan, not a generic protocol.",
                href: "/back-pain",
              },
              {
                icon: "⚡",
                title: "Sciatica",
                description:
                  "Radiating leg pain from sciatic nerve compression responds well to chiropractic decompression, targeted stretching, and soft-tissue work.",
                href: "/sciatica",
              },
              {
                icon: "🤕",
                title: "Headaches & Migraines",
                description:
                  "Cervical spine misalignment and muscle tension are common, under-identified causes of recurring headaches. We address both mechanically and neurologically.",
                href: "/headaches",
              },
              {
                icon: "🚗",
                title: "Auto Accident Injuries",
                description:
                  "Whiplash and soft-tissue trauma from Northern Virginia's busy roads. We document injuries for insurance and focus on full functional recovery.",
                href: "/auto-accidents",
              },
              {
                icon: "🏃",
                title: "Sports Injuries",
                description:
                  "From Oakton High student-athletes to adult club sports, we treat shoulder, knee, and ankle injuries with manual therapy and kinesiology.",
                href: "/sports-injuries",
              },
              {
                icon: "🧘",
                title: "Stress & Fatigue",
                description:
                  "Acupuncture, nutritional support, and nervous system regulation for the chronic low-energy, high-stress patterns prevalent among Northern Virginia professionals.",
                href: "/functional-medicine",
              },
            ]}
          />

          <Testimonials />

          <FaqAccordion
            eyebrow="Vienna patients ask"
            title="Common questions from our Northern Virginia neighbors."
            intro="We hear the same questions from Vienna, Vienna Woods, and Tysons-area residents. Here are direct answers."
            tone="light"
            items={[
              {
                q: "How far is Roselle Center from Vienna, VA?",
                a: "We're located at 8500 Executive Park Ave, Suite 300, Fairfax, VA 22031 — approximately 10 minutes from downtown Vienna via Route 123 or I-66 East. Parking is free and plentiful.",
              },
              {
                q: "Do you accept insurance for chiropractic care?",
                a: "Yes. We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, and Medicare. Our front desk will verify your benefits before your first appointment. We also accept HSA/FSA payments.",
              },
              {
                q: "What is the difference between chiropractic care and physical therapy?",
                a: [
                  "Chiropractors focus on the relationship between spinal structure and nervous system function, using manual adjustments to restore alignment and reduce nerve interference. Physical therapists primarily focus on movement rehabilitation through exercise.",
                  "At Roselle Center, we often use both approaches within a single care plan — Dr. Roselle's team combines chiropractic adjustments with applied kinesiology and therapeutic massage for comprehensive results.",
                ],
              },
              {
                q: "Can chiropractic care help with arthritis?",
                a: "Yes, for osteoarthritis particularly. Chiropractic adjustments improve joint mobility, reduce inflammation-related stiffness, and decrease pain without medication. Studies published in the Journal of Manipulative and Physiological Therapeutics show consistent improvements in functional range of motion for arthritis patients under chiropractic care. We tailor the adjustment technique to each patient's joint condition.",
              },
              {
                q: "Can chiropractic care help with sciatica?",
                a: "Absolutely. Sciatica occurs when the sciatic nerve is compressed — most commonly by a herniated disc, bone spur, or tight piriformis muscle. Chiropractic spinal manipulation reduces that compression directly. We also address the surrounding soft tissue and prescribe targeted stretches to prevent recurrence.",
              },
              {
                q: "How many visits does it typically take?",
                a: "Most acute conditions show significant improvement within 4–8 visits. Chronic conditions may require a longer initial phase followed by maintenance care. After your initial evaluation, we'll give you a specific timeline and milestone plan so there are no surprises.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Ready when you are"
            title="Vienna's trusted holistic care team is 10 minutes away."
            body="Roselle Center for Healing has been serving Northern Virginia since the 1990s. Our team of chiropractors, acupuncturists, nutritionists, and massage therapists work together to get you better — not just symptom-free. New patients welcome."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book online now", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
