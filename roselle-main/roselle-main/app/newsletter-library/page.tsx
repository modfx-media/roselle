"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import CtaBand from "@/app/components/templates/CtaBand";

const CATEGORIES = ["Back, Body & Joint Pain","Healthy Tips","Exercise & Fitness","Injury Rehab & Prevention","Kid's Health","Illness Prevention","Chronic Conditions","Nutrition & Healthy Eating","Breaking Bad Habits","Senior Health","Weight Loss","Pregnancy & Parenting","Wellness","Mind-Body Connection","Stress & Anxiety","Life-Work Balance","Staying Young","Staying Motivated"];

const NEWSLETTERS = [
  { title: "How Your Chiropractor Addresses Microtrauma Before Injury", description: "Could a microtrauma be the reason for your pain? Find out how your chiropractor can help." },
  { title: "How Chiropractic Care May Improve Your Stress Levels", description: "Has stress taken control of your life? Chiropractic care could help you relax." },
  { title: "What Disc Conditions Can a Chiropractor Help With?", description: "Wondering if chiropractic treatment is right for your disc condition?" },
  { title: "The Benefits of Regular Chiropractic Adjustments", description: "Could regular chiropractic adjustments improve your health and comfort?" },
  { title: "The Benefits of Chiropractic Care Across All Ages", description: "Wondering if chiropractic treatments are a good idea for everyone?" },
  { title: "How an Auto Accident Impacts Your Posture", description: "Chiropractic care offers the perfect solution to your post-accident posture issues." },
];

export default function NewsletterLibraryPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Resources · Fairfax, VA"
            title="Newsletter library."
            subtitle="A collection of informative newsletters covering health and wellness topics — to help you better understand chiropractic care and the fascinating abilities of your body."
            crumbs={[{ label: "Home", href: "/" }, { label: "Newsletter Library" }]}
            image="/services/newsletter-library.jpg"
            imageAlt="Newsletter library."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book a consultation", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Welcome"
            title="Health & wellness newsletters."
            body="Our complimentary newsletters are provided to help you improve your understanding of chiropractic care and learn more about how to care for your body. Browse by topic below."
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s4">Browse by topic</h3>
              <div className="flex flex-wrap gap-s2">
                {CATEGORIES.map((c) => (
                  <span key={c} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-card-bg text-fg hover:bg-accent transition-colors cursor-pointer">{c}</span>
                ))}
              </div>
            </div>
          </section>

          <FeatureGrid
            tone="dark"
            eyebrow="Latest Issues"
            title="Featured newsletters."
            cols={2}
            cards={NEWSLETTERS}
          />

          <CtaBand tone="gold" eyebrow="Stay informed" title="Subscribe to our newsletter." body="Stay up to date with the latest health and wellness tips from Roselle Center For Healing." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
