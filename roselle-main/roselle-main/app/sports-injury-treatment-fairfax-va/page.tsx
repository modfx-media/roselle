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
import ImageCta from "../components/templates/ImageCta";

export default function SportsInjuryTreatmentFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sports Injury Treatment · Fairfax, VA · Return to Performance"
            title="Sports injury treatment in Fairfax, VA — get back in the game faster."
            subtitle="From Fairfax County student athletes to adult recreational players, our chiropractic and applied kinesiology-based sports injury care gets you back to full performance without surgery or long medication courses."
            crumbs={[{ label: "Home", href: "/" }, { label: "Sports Injuries", href: "/sports-injuries" }, { label: "Sports Injury Treatment Fairfax, VA" }]}
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Sports injury chiropractic treatment Fairfax VA"
            primaryCta={{ label: "Book sports injury assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "30+", label: "Years treating athletes in Fairfax" },
            { value: "PAK", label: "Dr. Roselle: Professional Applied Kinesiology" },
            { value: "All ages", label: "Youth to masters athletes" },
            { value: "Drug-free", label: "Recovery approach" },
          ]} />
          <FeatureSplit
            eyebrow="The kinesiology advantage"
            title="Why applied kinesiology changes sports injury outcomes."
            body={[
              "Applied kinesiology (AK) uses muscle-response testing to identify neurological inhibition patterns — muscles that are firing incorrectly due to injury, joint dysfunction, or nutritional stress. This is critical in sports injuries because most overuse injuries and acute sprains involve compensatory movement patterns that persist even after the primary injury heals.",
              "Dr. Roselle holds Professional Applied Kinesiology (PAK) certification — one of the highest levels in this field. When a Fairfax County soccer player comes in with a recurring hamstring strain, AK testing often reveals a hip flexor inhibition or sacroiliac dysfunction that's loading the hamstring asymmetrically. Fix the underlying pattern and the hamstring stops tearing.",
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Applied kinesiology sports injury assessment Fairfax VA"
            bullets={["Applied kinesiology for movement pattern diagnosis", "Chiropractic adjustment for joint dysfunction", "Sports massage for soft-tissue recovery"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="Sports we treat"
            title="Common sports injury presentations in Fairfax County."
            intro="Northern Virginia's competitive sports culture — from Fairfax County rec leagues to NVSL swimming, VHSL high school athletics to adult club sports — produces a predictable set of injuries. We've treated all of them."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Shoulder & rotator cuff", description: "Rotator cuff tendinopathy, labral irritation, AC joint sprains, and swimmer's shoulder — assessed with orthopedic testing and treated without surgery whenever possible." },
              { title: "Knee & lower limb", description: "Runner's knee (PFPS), IT band syndrome, ACL/MCL sprain rehabilitation, patellar tendinopathy, and shin splints — biomechanical assessment identifies the driving factor." },
              { title: "Ankle & foot", description: "Ankle sprains, peroneal tendinopathy, plantar fasciitis, and Achilles tendinopathy — we address joint restrictions and muscular imbalances that predispose to these injuries." },
              { title: "Spine & core", description: "Low back pain from lifting and contact sports, stress fractures (spondylolysis), and disc injuries — assessed and managed conservatively with high success rates in young athletes." },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Athletes ask"
            title="What Fairfax County athletes want to know about sports injury care."
            tone="light"
            items={[
              { q: "Can a chiropractor treat a rotator cuff injury?", a: "Yes. For most rotator cuff injuries — tendinopathy, partial tears, and impingement — chiropractic shoulder joint manipulation combined with applied kinesiology and soft-tissue therapy produces excellent results without surgery. We differentiate between partial tears (treatable conservatively) and full-thickness tears (typically requiring surgical consultation) through orthopedic testing. If your rotator cuff needs surgical management, we'll tell you." },
              { q: "How quickly can a sports injury heal with chiropractic care?", a: "Acute ankle sprains: 2–4 weeks with proper care. Rotator cuff tendinopathy: 6–12 weeks. IT band syndrome: 4–8 weeks with biomechanical correction. These timelines assume consistent treatment and adherence to a home exercise program. We provide return-to-sport criteria so you know exactly when it's safe to compete again." },
              { q: "Do you treat youth athletes at Roselle Center?", a: "Yes. We treat student athletes from Fairfax County high schools (Oakton, Robinson, Woodson, Chantilly, and others) regularly. Pediatric and adolescent chiropractic care uses age-appropriate, low-force techniques. Applied kinesiology is particularly valuable in youth sports because it identifies neuromuscular imbalances before they become injuries." },
              { q: "What is the difference between a sports chiropractor and a regular chiropractor?", a: "A sports chiropractor has additional training in sports biomechanics, return-to-sport protocols, and sports-specific injury presentations. At Roselle Center, Dr. Roselle's PAK certification adds applied kinesiology-based movement assessment — a tool that generic chiropractic practices don't use. The result is more precise diagnosis of why an injury keeps recurring, not just treatment of the injury itself." },
              { q: "Can I see a chiropractor for performance optimization, not just injury?", a: "Absolutely. Many of our Fairfax patients are recreational athletes who come in without injuries — they want optimal joint mobility, corrected movement patterns, and nutritional support for performance. Applied kinesiology identifies subclinical imbalances that limit performance before they cause injury. This is what serious athletes use proactively." },
            ]}
          />
          <ImageCta
            eyebrow="Sports injury care · Fairfax, VA"
            title="Get back to the game — properly, not just quickly."
            body="Roselle Center's sports injury approach finds the pattern driving your injury, not just the injury itself. That's why our Fairfax County athletes stay healthy after they recover."
            image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book sports assessment", href: "/appointment" }}
            secondaryCta={{ label: "View sports injuries page", href: "/sports-injuries" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
