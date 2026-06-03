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
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function ChiropractorOaktonVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Serving Oakton, VA · Just 8 Minutes Away"
            title="Chiropractic care for Oakton, VA — the closest multidisciplinary option."
            subtitle="Oakton residents have immediate access to Northern Virginia's most comprehensive holistic practice. Roselle Center for Healing is just 8 minutes via Route 123 — offering chiropractic, acupuncture, applied kinesiology, massage, and functional medicine."
            crumbs={[{ label: "Home", href: "/" }, { label: "Locations Served", href: "/sitemap" }, { label: "Chiropractor Near Oakton, VA" }]}
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Holistic chiropractic care serving Oakton Virginia"
            primaryCta={{ label: "Book your visit", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "~8 min", label: "From Oakton via Route 123" },
            { value: "30+", label: "Years serving Fairfax County" },
            { value: "6", label: "Specialties under one roof" },
            { value: "4.7★", label: "110 Google reviews" },
          ]} />
          <FeatureSplit
            eyebrow="Why Oakton patients choose Roselle Center"
            title="Eight minutes to Northern Virginia's most complete wellness practice."
            body={[
              "Oakton's location on Route 123 puts it directly between Fairfax and Vienna — and directly on the way to our clinic at 8500 Executive Park Ave. Whether you're coming from Oakton's residential areas or the business corridor near I-66, the drive is straightforward and parking is free.",
              "Oakton residents tend to be active, professionally accomplished, and health-conscious. They want care that matches that profile: evidence-informed, diagnostically thorough, and worth the time. Our multidisciplinary approach — where your chiropractor, acupuncturist, and nutritionist all coordinate — delivers exactly that.",
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Roselle Center for Healing serving Oakton VA patients"
            bullets={["8-minute drive via Route 123 or I-66 West", "Free parking at Executive Park Ave", "Same-week appointments, new patients welcome"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="What Oakton patients come to us for"
            title="The Oakton health profile — and how we address it."
            intro="Oakton's demographics — competitive high school families, government professionals, and long-term Fairfax County residents — present a consistent set of health concerns. We've built our practice around exactly this profile."
            cta={{ label: "See all conditions we treat", href: "/conditions-treated" }}
            pillars={[
              { title: "Youth athlete care", description: "Oakton High School and nearby school athletes come to us for sports injury evaluation and treatment. Applied kinesiology identifies movement imbalances before they become recurring injuries." },
              { title: "Commuter pain management", description: "The Route 66 and I-495 daily commute from Oakton creates consistent cervical and lumbar loading. We address both the structural effects and the contributing postural patterns." },
              { title: "Family wellness care", description: "From pediatric adjustments to senior mobility support, Oakton families use Roselle Center across generations — one team, coordinated care, every stage of life." },
              { title: "Preventive and maintenance care", description: "Many Oakton patients come monthly for maintenance adjustments, acupuncture, and nutritional support — staying healthy before conditions develop rather than treating them after." },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Oakton patients ask"
            title="Common questions from our Oakton and Oakton Commons neighbors."
            tone="light"
            items={[
              { q: "How do I get to Roselle Center from Oakton, VA?", a: "From Oakton, take Route 123 East toward Fairfax. We're at 8500 Executive Park Ave, Suite 300 — off Lee Highway (Route 29). The drive is approximately 8 minutes in normal traffic. Free parking in the building lot. Alternatively, take I-66 East to Exit 60 (Route 123/Chain Bridge Rd) and follow Route 123 South." },
              { q: "Do you treat Oakton High School athletes?", a: "Yes. We regularly treat student athletes from Oakton High School and other Fairfax County schools. Applied kinesiology is particularly valuable for young athletes because it identifies neurological inhibition patterns — muscles that are firing incorrectly due to past injury or joint dysfunction — that predispose to recurring sports injuries." },
              { q: "What insurance do you accept for Oakton patients?", a: "We accept most major insurance plans: BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, and Medicare. Virginia Medicaid coverage varies. We also accept HSA and FSA payments for all services. Call (703) 698-7117 and our billing team will verify your specific benefits before your first appointment." },
              { q: "Can you see my whole family — kids, adults, and seniors?", a: "Yes. Roselle Center treats patients from infancy through senior years using age-appropriate techniques at every stage. Pediatric chiropractic uses very gentle, low-force methods. Senior care accounts for osteoporosis risk and joint fragility. We've been a family practice for 30+ years." },
              { q: "How is Roselle Center different from a single-specialty chiropractor?", a: "Most chiropractic offices offer spinal adjustment and possibly massage. We have chiropractors, licensed acupuncturists, massage therapists, a holistic nutritionist, and a functional medicine specialist — all in the same practice, all communicating about your case. If your back pain has a nutritional inflammatory component, we can address both in the same care plan." },
            ]}
          />
          <ImageCta
            eyebrow="Oakton, VA · 8 minutes away"
            title="Northern Virginia's most complete wellness center is minutes from Oakton."
            body="30+ years. 6 specialties. 4.7★ on Google. Free 20-minute new patient consultation. Oakton families are welcome — book online or call today."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book online", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
