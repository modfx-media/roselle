"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import CtaBand from "@/app/components/templates/CtaBand";

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="About Roselle Center for Healing"
            title="Healing isn't a destination — it's a journey."
            subtitle="At Roselle Center for Healing in Fairfax, VA, we help people reclaim their health through personalized, integrative care that treats the whole person — not just the pain."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/about%20us.png.webp?9756851d43ab801c42fe6f45e0b23372"
            imageAlt="Woman receiving laser therapy at the Roselle Center for Healing in Fairfax, VA."
            primaryCta={{ label: "Meet our doctors", href: "/about-us/meet-the-doctors---therapists.html" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "40+", label: "Years of practice" },
              { value: "1M+", label: "Patient visits" },
              { value: "10+", label: "Integrative therapies" },
              { value: "Fairfax,VA", label: "Locally rooted" },
            ]}
          />

          <FeatureSplit
            eyebrow="Our story"
            title="Rooted in results — meet Roselle Center For Healing."
            body="Health isn't a single destination — it's a dynamic journey. We help people reclaim their health through personalized, integrative care. Whether you're dealing with chronic back pain, stubborn neck pain, or looking for a deeper understanding of your health, Dr. Tom Roselle and his experienced team are here to guide you toward lasting wellness."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/about%20us.png.webp?9756851d43ab801c42fe6f45e0b23372"
            imageAlt="Patient receiving laser therapy at Roselle Center for Healing."
            bullets={[
              "Conventional + functional medicine working together",
              "Chiropractic, acupuncture, nutrition, massage, advanced diagnostics",
              "Treatment plans built around how your body wants to heal",
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="What makes us different"
            title="A different kind of healing center."
            body="Roselle Center for Healing isn't your average chiropractic clinic. It's a place where conventional and functional medicine work together to uncover root causes, not just manage symptoms. From chiropractic care and massage therapy to nutrition, acupuncture, and advanced diagnostic tools, we build treatment plans that support how your body naturally wants to heal. That means no guesswork — just thoughtful care shaped by years of experience and a passion for helping people feel like themselves again."
          />

          <ContentBlock
            eyebrow="Expert care, locally"
            title="Expert care from a chiropractor near you in Fairfax, VA."
            body="Finding a chiropractor near you should mean more than picking the closest option. At our Fairfax, VA center, Dr. Tom Roselle brings decades of clinical experience, a deep commitment to patient education, and a whole-person approach to every appointment. He's helped thousands find relief from back pain and neck pain using methods that combine traditional chiropractic with innovative therapies, always tailored to the individual."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Our approach"
            title="Care that asks better questions."
            cols={2}
            cards={[
              {
                title: "Addressing pain with purpose",
                description:
                  "Back pain and neck pain are two of the most common complaints we see — but they're rarely the whole story. We look beyond the obvious, considering how posture, stress, nutrition, and lifestyle play a role. With chiropractic adjustments, targeted massage therapy and supportive functional medicine, we treat pain at its source — not just the surface.",
              },
              {
                title: "More than symptom relief — a whole-body reset",
                description:
                  "Healing should lead to more than comfort — it should lead to clarity. Whether you're struggling with fatigue, unresolved pain, or a health concern that no one's been able to explain, we ask different questions and look in new places. Our team works closely with you, offering care that adapts as your body begins to change.",
              },
            ]}
          />

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p
                  className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase mb-s4 font-sans"
                  style={{ color: "rgba(198,177,128,1)" }}
                >
                  <span className="w-6 h-px" style={{ background: "rgba(198,177,128,1)" }} />
                  Our team
                </p>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-[1.12] max-w-[28ch]">
                  Meet expert chiropractors and therapists.
                </h2>
              </RevealSection>

              <RevealSection delay={0.12}>
                <div
                  className="mt-s8 rounded-xl overflow-hidden"
                  style={{
                    background: "rgba(10,22,40,0.04)",
                    border: "1px solid rgba(42,41,40,0.08)",
                  }}
                >
                  <div className="w-full aspect-video">
                    <iframe
                      src="https://player.vimeo.com/video/279532866?h=0&title=0&byline=0&portrait=0"
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Roselle Center for Healing Introduction"
                    />
                  </div>
                  <div className="p-s6">
                    <p
                      className="text-fluid-base leading-relaxed"
                      style={{ color: "rgba(42,41,40,0.7)" }}
                    >
                      At the Roselle Center for Healing, we take a holistic approach. By educating patients about the body and about their treatments, they become active partners in achieving optimal health. We are a practice of chiropractors, acupuncturists, nutritionists, massage therapists, rehabilitation specialists, and functional medicine experts. This video provides an introduction to our practice — but we encourage you to come see why almost one million patients have visited us over the last four decades.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          <CtaBand
            tone="gold"
            eyebrow="Start your healing journey"
            title="Take the first step toward real relief."
            body="If you're looking for a chiropractor near you in Fairfax, VA who offers more than quick fixes, call Roselle Center for Healing. Dr. Tom Roselle and his team will help you uncover the deeper causes of your symptoms and support your body's natural ability to heal."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book an appointment", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
