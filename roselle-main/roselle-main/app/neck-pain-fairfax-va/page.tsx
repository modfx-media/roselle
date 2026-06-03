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

export default function NeckPainFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Neck Pain · Fairfax, VA · Drug-Free Treatment"
            title="Neck pain treatment in Fairfax, VA — cervical spine care that actually lasts."
            subtitle="From tech-neck and desk strain to disc herniations and post-accident whiplash — our Fairfax team identifies exactly what's compressing or irritating your cervical spine and treats it without drugs."
            crumbs={[{ label: "Home", href: "/" }, { label: "Neck Pain", href: "/neck-pain" }, { label: "Neck Pain Treatment Fairfax, VA" }]}
            image="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Neck pain chiropractic treatment Fairfax VA"
            primaryCta={{ label: "Book your neck assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "30+", label: "Years treating neck pain in Fairfax" },
            { value: "Drug-free", label: "Cervical care approach" },
            { value: "Same-week", label: "Appointments available" },
            { value: "5★", label: "Patient outcomes" },
          ]} />
          <FeatureSplit
            eyebrow="Why desk workers and commuters lead our neck pain caseload"
            title="The Fairfax neck pain epidemic — and what's driving it."
            body={[
              "Northern Virginia's workforce is dominated by government employees, federal contractors, and tech professionals — all spending 8–10 hours per day with their heads forward over screens. Every inch of forward head posture adds roughly 10 lbs of effective force on the cervical spine. By the end of a workday, many patients are carrying the equivalent of a bowling ball on their neck.",
              "Our assessment goes beyond 'where does it hurt'. We evaluate cervical range of motion, nerve tension signs, muscle strength asymmetry, and referred pain patterns to identify whether your neck pain originates from a facet joint, disc, muscle, or nerve root — because each requires a different approach.",
            ]}
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Neck pain assessment at Roselle Center Fairfax VA"
            bullets={["Cervical disc and facet joint assessment", "Neurological screening for radiculopathy", "Postural analysis and ergonomic review"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="Treatment approach"
            title="How we treat neck pain — matched to your specific cause."
            intro="Neck pain from a disc herniation is treated differently from facet joint syndrome, which is different from muscle strain. We identify which before we start."
            cta={{ label: "Read our full neck pain page", href: "/neck-pain" }}
            pillars={[
              { title: "Cervical chiropractic adjustment", description: "Precise, low-force cervical manipulation restores vertebral alignment and reduces facet joint restriction — relieving both local pain and referred headache symptoms." },
              { title: "Soft-tissue therapy", description: "Myofascial release and trigger point therapy for the scalene, levator scapulae, and trapezius muscles that maintain painful cervical postures." },
              { title: "Acupuncture for nerve pain", description: "When cervical nerve root irritation creates shooting arm pain or numbness, acupuncture down-regulates nerve sensitization effectively and quickly." },
              { title: "Postural rehab", description: "Deep cervical flexor strengthening and scapular stabilization exercises to correct the forward-head posture pattern that causes recurrence." },
            ]}
          />
          <ChecklistSplit
            eyebrow="Neck pain red flags"
            title="When neck pain needs immediate attention."
            body="Most neck pain responds beautifully to conservative chiropractic care. These specific presentations warrant same-day emergency evaluation instead."
            image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Neck pain red flags"
            tone="light"
            items={[
              "Severe arm weakness or progressive hand numbness — possible cervical myelopathy",
              "Neck pain with fever, chills, or unexplained weight loss",
              "Neck pain following significant trauma (car accident, fall, sports collision)",
              "Loss of coordination, balance problems, or difficulty walking",
              "Neck pain with jaw pain, chest pain, or difficulty swallowing",
              "Sudden, 'worst headache of my life' onset with neck stiffness",
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Neck pain patients ask"
            title="Clinical answers for Fairfax neck pain patients."
            tone="dark"
            items={[
              { q: "What is the best doctor to see for severe neck pain?", a: ["For most neck pain — including severe cases — a chiropractor with cervical spine expertise should be your first call, not an ER or primary care physician. Chiropractic assessment identifies mechanical causes (disc, joint, muscle) and produces faster results for most presentations without imaging costs or medication.", "Exceptions: if you have progressive neurological symptoms (arm weakness, coordination loss, bowel/bladder changes) or neck pain following major trauma, go to the ER first. We'll refer you appropriately if we see anything that needs surgical consultation."] },
              { q: "What is the most effective treatment for neck pain?", a: "Research consistently shows that combined care — chiropractic manipulation plus supervised exercise — produces superior outcomes to either alone. A 2012 Annals of Internal Medicine study found spinal manipulation significantly more effective than medication for acute neck pain at 12 weeks. At Roselle Center, we pair cervical adjustments with soft-tissue therapy and a targeted home exercise program for lasting results." },
              { q: "What are the 5 D's of chiropractic neck assessment?", a: "The 5 D's are contraindications that indicate caution with cervical manipulation: Diplopia (double vision), Dizziness (of vestibular or vascular origin), Drop attacks, Dysarthria (slurred speech), and Dysphagia (difficulty swallowing). These may indicate vertebrobasilar artery compromise and we screen for all of them before any cervical adjustment." },
              { q: "What are red flags in neck pain?", a: "Red flags requiring urgent evaluation include: neck pain with fever (infection), pain following major trauma (fracture), progressive arm weakness or hand clumsiness (myelopathy), loss of bowel/bladder control, and the sudden-onset 'thunderclap' headache with stiff neck (potential meningitis or subarachnoid hemorrhage). We screen for all red flags at intake." },
              { q: "How many chiropractic visits does neck pain take to resolve?", a: "Acute neck pain (under 4 weeks) typically responds in 6–10 visits over 3–4 weeks. Chronic neck pain (months to years) requires 12–20 visits over 6–10 weeks with reassessment at visit 8. We give every patient a written care plan with specific milestones so there are no open-ended commitments." },
            ]}
          />
          <ImageCta
            eyebrow="Neck pain relief · Fairfax, VA"
            title="30 years of Fairfax neck pain results. Your turn."
            body="We've treated thousands of Northern Virginia patients for every type of neck pain — tech neck, disc herniations, post-accident whiplash, and chronic cervical arthritis. We'll find what's driving yours."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book neck assessment", href: "/appointment" }}
            secondaryCta={{ label: "View neck pain page", href: "/neck-pain" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
