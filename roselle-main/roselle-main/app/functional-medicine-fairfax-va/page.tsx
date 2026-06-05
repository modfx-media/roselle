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
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import ImageCta from "@/app/components/templates/ImageCta";

export default function FunctionalMedicineFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Functional Medicine · Fairfax, VA · Root-Cause Care"
            title="Functional medicine in Fairfax, VA — for conditions conventional care hasn't solved."
            subtitle="Chronic fatigue, hormonal imbalance, autoimmune symptoms, digestive dysfunction, and complex inflammatory conditions — these respond to root-cause investigation, not symptom management. Our Fairfax functional medicine team uses thermography, nutritional protocols, and integrative diagnostics to find what's driving your condition."
            crumbs={[{ label: "Home", href: "/" }, { label: "Functional Medicine", href: "/functional-medicine" }, { label: "Functional Medicine Fairfax, VA" }]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Functional medicine thermography Fairfax VA"
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "30+", label: "Years integrative practice in Fairfax" },
            { value: "Thermography", label: "Digital infrared screening" },
            { value: "6", label: "Disciplines in one practice" },
            { value: "DCCN", label: "Dr. Roselle's nutrition diplomate" },
          ]} />
          <FeatureSplit
            eyebrow="What functional medicine actually does"
            title="Investigate the system, not just the symptom."
            body={[
              "Functional medicine asks 'why' rather than 'what'. Instead of naming a condition and prescribing a medication to manage it, functional medicine investigates the upstream biochemical, structural, and lifestyle factors that created the condition in the first place.",
              "At Roselle Center, our functional medicine approach is built on Dr. Tom Roselle's Ageless Health® philosophy: an integrative framework that combines chiropractic structural care, traditional Chinese medicine (acupuncture), clinical nutrition (DCCN, DCBCN), applied kinesiology diagnostics, and thermography screening. The result is a complete picture most single-specialty practices simply cannot produce.",
            ]}
            image="/dr-tom-roselle.webp"
            imageAlt="Dr. Tom Roselle DC DCCN functional medicine Fairfax VA"
            bullets={["Thermography — digital infrared imaging for early detection", "Applied kinesiology for neurological imbalance assessment", "Clinical nutrition — DCCN/DCBCN diplomate-level protocols"]}
          />
          <FeatureGrid
            eyebrow="Conditions we approach functionally"
            title="What functional medicine patients come to us for."
            intro="These are the conditions our Fairfax functional medicine patients present with — conditions that responded poorly to conventional symptom management but do respond to root-cause care."
            cols={3}
            cards={[
              { icon: "😴", title: "Chronic Fatigue", description: "Adrenal dysfunction, mitochondrial insufficiency, thyroid dysregulation, and sleep architecture issues — we investigate all of them.", href: "/functional-medicine" },
              { icon: "⚖️", title: "Hormonal Imbalance", description: "Thyroid, adrenal, and sex hormone dysfunction assessed through clinical nutrition and applied kinesiology — without automatic pharmaceutical intervention." },
              { icon: "🤧", title: "Allergy & Immune Dysfunction", description: "Systemic allergy relief through acupuncture protocols and nutritional anti-inflammatory support — proven in our practice for 30+ years.", href: "/allergy-relief" },
              { icon: "🧠", title: "Cognitive & Neurological", description: "Brain fog, memory changes, and concentration issues assessed through nutritional deficiency screening and nervous system evaluation." },
              { icon: "🫀", title: "Cardiovascular Screening", description: "Thermography provides early-detection circulatory assessment — identifying asymmetric blood flow patterns before clinical symptoms emerge." },
              { icon: "🦋", title: "Thyroid Conditions", description: "Subclinical thyroid dysfunction responds well to nutritional and acupuncture protocols — we assess for it in every complex fatigue presentation.", href: "/thyroid-assessment" },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Functional medicine patients ask"
            title="What Fairfax functional medicine patients want to know."
            tone="dark"
            items={[
              { q: "What is functional medicine and how is it different from conventional care?", a: "Functional medicine investigates root causes of chronic conditions using a systems-biology lens rather than a disease-diagnosis-prescription framework. Instead of asking 'what drug treats this symptom', it asks 'what's disrupting normal function and why'. At Roselle Center, that investigation uses chiropractic structural assessment, applied kinesiology, thermography, and clinical nutrition to build a complete picture of what's actually happening in your body." },
              { q: "What conditions does functional medicine treat?", a: "Functional medicine approaches chronic fatigue, hormonal imbalance (thyroid, adrenal, sex hormones), autoimmune conditions, digestive dysfunction, neurological symptoms (brain fog, numbness), chronic pain with inflammatory components, cardiovascular risk factors, and allergy/immune dysregulation. It's most valuable for conditions that haven't responded well to conventional management." },
              { q: "What is thermography and why does Roselle Center use it?", a: ["Digital infrared thermal imaging (thermography) detects patterns of skin temperature asymmetry that indicate circulatory dysfunction, inflammation, or neurological changes — often before these produce symptoms detectable by standard imaging.", "We use thermography as a preventive screening tool and as a way to monitor treatment response in complex inflammatory and circulatory conditions. It's non-invasive, radiation-free, and produces actionable clinical information."] },
              { q: "Is functional medicine covered by insurance?", a: "The chiropractic components of our functional medicine approach are covered by most major insurance plans. Nutritional counseling coverage varies by plan. Thermography is typically out-of-pocket but reasonably priced. Our billing team will review your specific benefits before your first appointment so there are no surprises." },
              { q: "What is the downside of functional medicine?", a: "Functional medicine requires more time and commitment than a prescription appointment. Initial consultations are longer (60–90 minutes), the diagnostic phase involves more thorough history-taking, and the therapeutic approach is phased rather than immediate. It's not appropriate for acute emergencies. The tradeoff is more durable outcomes — addressing causes rather than suppressing symptoms." },
            ]}
          />
          <ImageCta
            eyebrow="Functional medicine · Fairfax, VA"
            title="Your condition has a cause. Let's find it."
            body="Roselle Center has been practicing integrative, root-cause medicine in Fairfax County since the 1990s. If conventional care hasn't given you answers, we likely can. Free 20-minute consultation for new patients."
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book consultation", href: "/appointment" }}
            secondaryCta={{ label: "View functional medicine page", href: "/functional-medicine" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
