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

export default function HeadachesMigrainesFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Headaches & Migraines · Fairfax, VA · Drug-Free"
            title="Headache and migraine treatment in Fairfax, VA — fixing the source, not just the symptom."
            subtitle="Many Fairfax patients have been managing headaches with ibuprofen for years without ever identifying the cause. Our team finds whether your headaches originate in the cervical spine, muscle tension, jaw, or nervous system — and addresses it directly."
            crumbs={[{ label: "Home", href: "/" }, { label: "Headaches", href: "/headaches" }, { label: "Headache Treatment Fairfax, VA" }]}
            image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Headache and migraine treatment Fairfax VA chiropractic and acupuncture"
            primaryCta={{ label: "Book your headache assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "30+", label: "Years of headache care in Fairfax" },
            { value: "Migraine-free", label: "Within 6 months (patient reported)" },
            { value: "Drug-free", label: "Treatment philosophy" },
            { value: "Dual", label: "Chiropractic + acupuncture approach" },
          ]} />
          <FeatureSplit
            eyebrow="The cervicogenic headache pattern"
            title="The headache type most commonly missed in Northern Virginia."
            body={[
              "Cervicogenic headaches originate in the upper cervical spine (C1–C3) and are misdiagnosed as migraines at a high rate. They're extremely common in desk workers, commuters, and anyone who spends significant time with a forward-head posture — which describes most of Fairfax County's workforce.",
              "Clinically, cervicogenic headaches produce pain that starts at the base of the skull, wraps around to the eye or temple, and are worsened by sustained postures. They respond dramatically to cervical chiropractic adjustment and soft-tissue work. If you've been treating what feels like migraines without consistent relief, cervicogenic origin is worth ruling out.",
            ]}
            image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Cervicogenic headache assessment at Roselle Center Fairfax VA"
            bullets={["C1–C3 joint restriction assessment", "Upper trapezius and suboccipital trigger point screening", "Differentiation from vascular migraine and tension-type headache"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="Our headache toolkit"
            title="How we treat headaches — by type, not generically."
            intro="Cervicogenic headaches need spinal work. Vascular migraines need acupuncture and nervous system regulation. Tension headaches need soft tissue. We match the treatment to the diagnosis."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Cervical adjustment", description: "Upper cervical chiropractic manipulation directly reduces the joint restriction that drives cervicogenic headaches — often producing dramatic relief within the first few sessions." },
              { title: "Acupuncture for migraines", description: "Multiple Cochrane reviews confirm acupuncture reduces migraine frequency at least as well as prophylactic drug treatment, without side effects. We use specific points for vascular and autonomic regulation." },
              { title: "Suboccipital release", description: "The suboccipital muscles at the base of the skull are a primary pain generator for tension and cervicogenic headaches. Targeted soft-tissue therapy releases this pattern rapidly." },
              { title: "Trigger identification", description: "Dietary, hormonal, and postural headache triggers are identified through applied kinesiology and nutritional assessment — giving you a roadmap for long-term prevention." },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Headache patients ask"
            title="What Fairfax headache patients need to know."
            tone="light"
            items={[
              { q: "Can chiropractic care cure migraines?", a: "Chiropractic doesn't 'cure' migraines in the pharmaceutical sense, but it significantly reduces frequency, severity, and duration for the majority of migraine patients — particularly those with a cervicogenic or musculoskeletal contribution. A patient we have on record went from weekly migraines to completely migraine-free within 6 months of integrated chiropractic and acupuncture care. Results vary, but the evidence base is solid." },
              { q: "What is the difference between a cervicogenic headache and a migraine?", a: ["Cervicogenic headaches originate from cervical spine dysfunction (joint restriction, disc irritation, or muscle trigger points at C1–C3). They typically start at the base of the skull, are aggravated by neck movement or sustained postures, and are usually one-sided.", "Migraines are neurovascular events — they involve changes in brain blood flow and trigeminovascular system activation. They produce throbbing pain, photophobia, phonophobia, and often nausea. Many patients have elements of both, which is why comprehensive assessment matters more than self-diagnosis."] },
              { q: "How many chiropractic visits does it take to reduce headaches?", a: "For cervicogenic headaches, most patients report meaningful improvement within 4–6 visits. For chronic migraine prevention via acupuncture, a 10–12 session initial course is the standard protocol before reassessment. We track headache frequency and severity objectively across visits so progress is measurable." },
              { q: "Can acupuncture help with tension headaches from office work?", a: "Yes — acupuncture is highly effective for tension-type headaches driven by prolonged screen work. Needling of the trapezius, semispinalis, and temporal muscles releases the sustained contraction pattern, while auricular and scalp points modulate pain signaling centrally. Many patients notice reduced headache frequency within the first 3–4 sessions." },
              { q: "Are there nutritional causes of headaches?", a: "Absolutely. Common dietary headache triggers we identify through applied kinesiology and nutritional assessment include: magnesium deficiency (very common in Northern Virginia's high-stress population), food sensitivities (wheat, dairy, MSG, sulfites), blood sugar instability, and dehydration. Addressing nutritional factors alongside manual therapy significantly improves outcomes." },
            ]}
          />
          <ImageCta
            eyebrow="Headache relief · Fairfax, VA"
            title="Stop managing headaches. Start resolving them."
            body="Our Fairfax team has helped hundreds of Northern Virginia patients eliminate chronic headaches through accurate diagnosis and targeted, drug-free care. Book your assessment today."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book headache assessment", href: "/appointment" }}
            secondaryCta={{ label: "View headaches page", href: "/headaches" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
