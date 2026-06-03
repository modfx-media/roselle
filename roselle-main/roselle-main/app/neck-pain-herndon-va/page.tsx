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

export default function NeckPainHerndonVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Neck Pain Treatment · Near Herndon, VA · Tech Neck Specialists"
            title="Neck pain treatment near Herndon, VA — serving the tech corridor's most common injury."
            subtitle="Herndon's concentration of tech employers along the Dulles Corridor produces a specific and predictable cervical spine presentation: forward-head posture, upper trapezius overload, and C5-C6 disc irritation from hours of screen-forward positioning. We treat it precisely."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Neck Pain Treatment Near Herndon, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Tech neck and cervical spine treatment near Herndon VA at Roselle Center Fairfax"
            primaryCta={{ label: "Book your neck assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "15 min", label: "From Herndon via Fairfax County Pkwy" },
              { value: "C1–C7", label: "Full cervical spine evaluation" },
              { value: "30+", label: "Years treating Northern Virginia neck pain" },
              { value: "Same-week", label: "New patient appointments available" },
            ]}
          />

          <FeatureSplit
            eyebrow="The Dulles Corridor neck problem"
            title="Tech neck isn't cosmetic — it's a structural problem with consequences."
            body={[
              "For every inch the head translates forward from its neutral position above the shoulders, the effective weight on the cervical spine increases by approximately 10 pounds. A typical tech worker with 2–3 inches of forward head posture puts 30–40 pounds of additional compressive load on the cervical spine for 6–10 hours per day. Over months and years, this produces predictable disc degeneration at C5-C6 and C6-C7, suboccipital muscle shortening, and chronic cervicogenic headaches.",
              "Most Herndon-area neck pain patients have been managing symptoms with pain relievers and stretching for months or years before seeing us. What they haven't had is an accurate assessment of how much structural change has occurred, which segments are restricted, and what it would take to actually reverse the pattern — which is what we provide.",
            ]}
            image="https://images.unsplash.com/photo-1559757175-7cb036e0e749?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Forward head posture and tech neck assessment for Herndon VA patients at Roselle Center"
            bullets={[
              "Forward head posture quantification and correction plan",
              "C5-C6 and C6-C7 disc assessment for tech workers",
              "Suboccipital and scalene release for screen-pattern tension",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="How we treat it"
            title="Cervical care for Herndon's tech and professional community."
            intro="Tech neck requires a multimodal approach — cervical adjustment alone won't hold when the patient returns to 8 hours of forward-head screen time. We address the structure and the postural pattern that created it."
            cta={{ label: "See our full neck pain approach", href: "/neck-pain-fairfax-va" }}
            pillars={[
              {
                title: "Cervical adjustment and mobilization",
                description:
                  "Specific manipulation of restricted C4-C7 segments reduces joint fixation, restores glide, and immediately improves range of motion. Our technique selection (diversified, toggle, or instrument-assisted) is adapted to your specific presentation and comfort.",
              },
              {
                title: "Suboccipital and myofascial release",
                description:
                  "The suboccipital muscles — four pairs at the base of the skull — shorten dramatically in forward-head posture and produce the classic occipital headache pattern. Manual release of this group combined with SCM and anterior scalene work is often the key intervention for screen-pattern neck pain.",
              },
              {
                title: "Acupuncture for cervicogenic pain",
                description:
                  "Cervical paraspinal needling reduces local muscle tension and nerve root irritation in ways that complement manual therapy — particularly for patients with arm numbness or tingling that persists between adjustments.",
              },
              {
                title: "Postural retraining and home program",
                description:
                  "A chin tuck program, deep cervical flexor strengthening, and thoracic extension mobility work are the specific exercises that counteract tech neck patterns. We provide a written home program and monitor compliance — because the desk hours don't stop between appointments.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Herndon-area patients ask"
            title="Neck pain questions from Northern Virginia tech workers."
            tone="light"
            items={[
              {
                q: "What is tech neck and how is it different from regular neck pain?",
                a: "Tech neck (also called 'text neck') specifically refers to the cervical dysfunction caused by sustained forward-head posture during screen use. Unlike acute neck strains or trauma-related cervical injuries, tech neck is a slowly progressive condition driven by cumulative loading. It tends to produce: suboccipital pain and headaches, bilateral shoulder and neck tension (not one-sided like most disc herniations), mid-cervical stiffness, and in advanced cases, disc degeneration at C5-C6. It responds well to chiropractic care combined with postural retraining — but recurs if the ergonomic drivers aren't addressed.",
              },
              {
                q: "Can chiropractic treatment fix cervical disc pain from years of desk work?",
                a: "Chiropractic can significantly reduce cervical disc-related pain and nerve compression, and can slow or arrest degenerative progression when initiated appropriately. Complete reversal of disc degeneration already present on imaging isn't realistic, but reducing the pain, restoring function, and preventing further progression are highly achievable goals. The caveat: if you continue the same 10-hour forward-head workday without ergonomic changes, the disc will continue to degrade regardless of how well we adjust it. Treatment and postural change together produce lasting outcomes.",
              },
              {
                q: "How long does it take to see results for neck pain from chiropractic?",
                a: "For tech neck and chronic desk-work cervical pain, most patients notice meaningful improvement in range of motion and symptom reduction within 4–6 visits. Full postural retraining — changing the deep cervical flexor weakness pattern — takes 8–12 weeks of consistent exercise. We're honest about this: you'll feel better quickly, but correcting the underlying postural fault takes longer and requires your participation between sessions.",
              },
              {
                q: "Can neck problems cause headaches?",
                a: "Yes — this is one of the most underappreciated relationships in clinical practice. Cervicogenic headaches (originating from the upper cervical spine and its musculature) are estimated to account for 15–20% of all chronic recurring headaches. The C1-C3 nerve roots share synaptic connections with the trigeminal nerve, which is why irritation at the upper cervical spine produces referred pain to the forehead, eye, and temple — feeling like a headache even though the source is the neck. If your headaches are associated with neck stiffness, worsen with sustained sitting or driving, or are located at the base of the skull, cervicogenic mechanism is likely.",
              },
              {
                q: "How far is Roselle Center from Herndon, VA, and how do I get there?",
                a: "Roselle Center for Healing is located in Fairfax, approximately 15 minutes from Herndon. The most straightforward route: take Centreville Road (Route 657) south from Herndon to Fairfax County Parkway, then south to our Fairfax location. Alternatively, take Route 28 south to I-66 east to Fairfax. We're also accessible from the Herndon/Monroe Metro station area via Fairfax County Pkwy. Call us at (703) 698-7117 and we'll provide specific directions from your location.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Neck pain care near Herndon, VA"
            title="The Dulles Corridor's tech neck specialists — 15 minutes from Herndon."
            body="Roselle Center for Healing has been treating Northern Virginia's tech workforce for over 30 years. Same-week appointments available. Fairfax, VA — 15 min via Fairfax County Pkwy."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your neck assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
