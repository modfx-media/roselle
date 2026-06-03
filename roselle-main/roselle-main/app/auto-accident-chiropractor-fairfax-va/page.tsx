"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import Testimonials from "@/app/components/Testimonials";
import PageHero from "@/app/components/templates/PageHero";
import StatStrip from "@/app/components/templates/StatStrip";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function AutoAccidentChiropractorFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Auto Accident Injuries · Fairfax, VA · Same-Week Care"
            title="Just had a car accident in Northern Virginia? Don't wait on treatment."
            subtitle="Symptoms from whiplash and soft-tissue auto injuries often emerge 24–72 hours after a crash. Roselle Center for Healing in Fairfax provides thorough injury assessment, documentation for insurance and attorneys, and full functional recovery care."
            crumbs={[{ label: "Home", href: "/" }, { label: "Auto Accidents", href: "/auto-accidents" }, { label: "Auto Accident Chiropractor Fairfax, VA" }]}
            image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Auto accident injury chiropractic care Fairfax VA"
            primaryCta={{ label: "Book accident assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "30+", label: "Years of accident injury care" },
            { value: "Same-week", label: "Appointments post-accident" },
            { value: "Full", label: "Insurance documentation provided" },
            { value: "Drug-free", label: "Recovery approach" },
          ]} />
          <FeatureSplit
            eyebrow="Northern Virginia's accident injury pattern"
            title="I-66, I-495, and Route 50 produce consistent injury profiles."
            body={[
              "Northern Virginia's highway network — one of the country's most congested — generates a predictable volume of rear-end and intersection collisions. Whiplash is the most common result: the cervical spine hyperextends and flexes rapidly, straining ligaments, compressing facet joints, and occasionally herniating discs.",
              "The problem with waiting? Adrenaline masks pain in the hours after a crash. Soft-tissue injuries often feel minor initially, then escalate significantly at 48–72 hours. Early assessment establishes a clinical baseline, improves recovery trajectory, and creates the documentation your insurance claim requires.",
            ]}
            image="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Whiplash and auto accident injury assessment Fairfax VA"
            bullets={["Assessment within days of accident, not weeks", "Injury documentation for auto insurance and attorneys", "Treatment of whiplash, lumbar strain, and disc injuries"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="Our accident care approach"
            title="What happens when an accident patient comes to us."
            intro="We've handled hundreds of auto accident cases in Fairfax County. Our process is structured, documented, and focused on both your recovery and your legal protection."
            cta={{ label: "Book your assessment today", href: "/appointment" }}
            pillars={[
              { title: "Comprehensive injury intake", description: "Full orthopedic and neurological assessment documenting all injury findings — this becomes the clinical foundation for your insurance claim and any legal proceedings." },
              { title: "Whiplash-specific treatment", description: "Cervical manipulation, soft-tissue mobilization, and traction to address the hyperextension-flexion injury pattern — targeting both joint dysfunction and muscular splinting." },
              { title: "Lumbar and thoracic care", description: "Low-back compression injuries and thoracic strain from seat belt forces are extremely common in rear-end collisions and are addressed alongside cervical care." },
              { title: "Recovery timeline planning", description: "We provide realistic recovery timelines and milestone documentation throughout your care — useful for both your health management and any legal settlement process." },
            ]}
          />
          <ChecklistSplit
            eyebrow="Post-accident checklist"
            title="What to do in the first 72 hours after a Northern Virginia car accident."
            body="The steps you take immediately after a collision have a direct impact on both your recovery and your claim. Here's what our Fairfax accident care team recommends."
            image="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Post-accident care checklist Fairfax VA"
            tone="light"
            items={[
              "Call 911 — even minor collisions warrant a police report for insurance",
              "Seek medical evaluation within 24–48 hours, even if you feel 'fine'",
              "Document all symptoms as they develop over 72 hours (photos, written log)",
              "Notify your auto insurance company — Virginia requires timely reporting",
              "Contact Roselle Center: (703) 698-7117 — same-week appointments available",
              "Consult a personal injury attorney if the other driver was at fault",
              "Do not sign any medical releases or settlements until treatment is complete",
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Accident patients ask"
            title="What Fairfax auto accident patients need to know."
            tone="dark"
            items={[
              { q: "How soon after a car accident should I see a chiropractor?", a: "As soon as possible — ideally within 24–72 hours. Early assessment establishes injury documentation while the acute inflammatory phase is present (making findings clearer), prevents chronic pain development, and begins the treatment that produces the best long-term outcomes. Many patients delay, thinking symptoms will resolve. They often don't, and a gap in treatment can complicate insurance claims." },
              { q: "Does auto insurance cover chiropractic care after an accident in Virginia?", a: "Yes. Virginia auto insurance policies include medical payment (MedPay) coverage that covers chiropractic, massage, and other rehabilitative care after an accident regardless of fault. If the accident was the other driver's fault, their liability insurance covers your care. We work directly with auto insurers and can direct-bill most major carriers — no out-of-pocket upfront for most patients." },
              { q: "What are the symptoms of whiplash after a car accident?", a: ["Whiplash symptoms include: neck pain and stiffness (often worse on day 2–3), headaches starting at the base of the skull, shoulder and upper back pain, arm numbness or tingling, jaw pain, and in some cases dizziness, cognitive fog, and visual disturbances.", "Symptoms frequently don't peak until 48–72 hours post-accident. If you were in a collision and feel 'fine', get assessed anyway — delayed-onset whiplash is extremely common."] },
              { q: "How long does whiplash take to heal with chiropractic care?", a: "Mild whiplash (Grade I) typically resolves in 4–8 weeks with consistent care. Moderate whiplash (Grade II — with restricted range of motion) may take 8–16 weeks. More severe presentations involving disc injury can require 3–6 months. Early intervention consistently produces faster recovery than delayed care." },
              { q: "Can I see a chiropractor while my accident case is still open?", a: "Yes, and you should. Continuing treatment while your case is open is normal and expected. Your attorney will want current treatment documentation to support your claim value. We work alongside personal injury attorneys regularly and can provide all necessary records, treatment summaries, and injury documentation." },
            ]}
          />
          <ImageCta
            eyebrow="Auto accident care · Fairfax, VA"
            title="Same-week appointments for Northern Virginia accident victims."
            body="Don't wait for symptoms to become chronic. Roselle Center has helped hundreds of Fairfax County accident victims recover fully and document their injuries properly. Call today."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book accident assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
