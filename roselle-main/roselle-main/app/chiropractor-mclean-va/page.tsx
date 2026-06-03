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

export default function ChiropractorMcLeanVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractor · Near McLean, VA · 20 Minutes via I-495"
            title="Chiropractor near McLean, VA — sophisticated, integrated care 20 minutes away."
            subtitle="McLean's executive, diplomatic, and legal community deserves clinical care that matches their expectations. Roselle Center in Fairfax provides the diagnostic depth, integrative capability, and personalized attention that high-demand patients require — 20 minutes via I-495."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Chiropractor Near McLean, VA" },
            ]}
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractor near McLean VA - Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "20 min", label: "From McLean via I-495" },
              { value: "30+", label: "Years of Northern Virginia integrative care" },
              { value: "Applied", label: "Kinesiology diagnostic precision" },
              { value: "Same-week", label: "New patient appointments" },
            ]}
          />

          <FeatureSplit
            eyebrow="Who we see from McLean"
            title="McLean's high-achieving community and its health patterns."
            body={[
              "McLean's population includes senior federal officials, law firm partners, intelligence community leaders, and corporate executives — a group characterized by extremely high professional stress, limited recovery time, and a tendency to seek the best available care when they finally address a health problem. We see McLean patients who've been managing symptoms for 6–18 months finally seeking resolution rather than just relief.",
              "McLean also has a significant diplomatic and international community from the nearby embassy corridors, with patients who have prior experiences of healthcare systems in Europe and East Asia and tend to be receptive to integrated approaches. Our combination of Western chiropractic precision and traditional medicine (acupuncture) resonates strongly with this group.",
            ]}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Comprehensive integrative care for McLean VA patients at Roselle Center Fairfax"
            bullets={[
              "Executive-level comprehensive intake and care planning",
              "Flexible scheduling accommodating demanding professional schedules",
              "Integrative approach matching international healthcare expectations",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="What sets us apart for McLean"
            title="Clinical depth that McLean's community expects."
            intro="McLean patients typically arrive having already explored standard options. Here's why Roselle Center's integrated approach produces results where others have not."
            cta={{ label: "Learn about our integrative approach", href: "/functional-medicine-fairfax-va" }}
            pillars={[
              {
                title: "What we treat",
                description:
                  "Back and neck pain, complex musculoskeletal conditions, sports and performance optimization, auto accident injuries, and chronic health conditions through functional medicine. Full-spectrum integrative care for the whole person.",
              },
              {
                title: "Multidisciplinary coordination",
                description:
                  "Chiropractic, applied kinesiology, acupuncture, therapeutic massage, thermography, and functional medicine. For McLean patients dealing with chronic complex conditions, this integrated capability is often what finally produces results after years of single-modality care.",
              },
              {
                title: "Dr. Roselle's expertise",
                description:
                  "Applied kinesiology certification, 30+ years in practice, thermographic imaging capability, and a clinical approach grounded in evidence while drawing on the full toolkit of integrative medicine. McLean patients appreciate the intellectual rigor and the clinical depth.",
              },
              {
                title: "Getting here from McLean",
                description:
                  "Take I-495 South from McLean to the Route 123 exit (Chain Bridge Rd) heading West toward Fairfax — approximately 20 minutes. Alternative: Georgetown Pike (Route 193) West to Route 123 South to Fairfax. Easy highway access, ample parking at our facility. Call (703) 698-7117.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="McLean patients ask"
            title="Questions from the McLean community about integrative chiropractic care."
            tone="light"
            items={[
              {
                q: "Can a chiropractor help with a rotator cuff injury?",
                a: [
                  "Yes — for the majority of rotator cuff presentations. Full-thickness rotator cuff tears require orthopedic surgical evaluation. But rotator cuff tendinopathy, partial tears, subacromial impingement, and bursitis — which account for most rotator cuff complaints — respond well to conservative chiropractic care.",
                  "Our approach: identify which of the four rotator cuff muscles is inhibited via applied kinesiology testing, restore glenohumeral joint mechanics with specific shoulder manipulation, reduce bursal inflammation with acupuncture, and progressively load the tendon through eccentric rehabilitation. Most rotator cuff patients see significant improvement within 6–8 weeks without cortisone injections or surgery.",
                ],
              },
              {
                q: "Can a chiropractor treat a deviated septum?",
                a: "A deviated nasal septum is a structural misalignment of the cartilage and bone separating the nasal passages — a mechanical issue that chiropractic cannot directly correct. However, we can address secondary effects: nasal congestion, sinus pressure, and inflammation that compound a deviated septum's symptoms can be reduced through acupuncture, specific facial point protocols, and functional medicine approaches to allergy and inflammation. We're transparent when the primary structural issue is outside our scope.",
              },
              {
                q: "Why would someone from McLean drive to Fairfax for chiropractic?",
                a: "The question we hear occasionally — and it's fair. The answer is applied kinesiology, integration, and 30 years of clinical depth. There are high-volume chiropractic offices closer to McLean, but they offer standard adjustment protocols. Roselle Center offers AK-guided diagnosis, coordinated chiropractic/acupuncture/functional medicine care, thermographic imaging, and a clinical approach that addresses why you're having the problem — not just the segment that's restricted. For patients who've tried and been disappointed by standard chiropractic, the difference is immediately apparent.",
              },
              {
                q: "Can chiropractic care help with stress-related physical symptoms?",
                a: "Yes. Chronic stress dysregulates the sympathetic nervous system, producing elevated muscle tension, reduced immune function, digestive disruption, and pain amplification (central sensitization). Spinal manipulation has documented sympathoinhibitory effects — reducing sympathetic tone and improving heart rate variability. Our acupuncture protocols specifically target HPA-axis regulation and vagal activation. For McLean's high-pressure professional community, addressing the physiology of stress — not just its psychological expression — is an important component of sustainable health.",
              },
              {
                q: "Do you offer functional medicine for executive health optimization in McLean?",
                a: "Yes. Our functional medicine approach uses thermography, comprehensive health history review, and applied kinesiology assessment to identify subclinical dysfunction before it becomes symptomatic — the preventive and optimization application that complements treatment. For executives and professionals who want to maintain peak cognitive and physical function, not just treat pain when it emerges, this is the relevant service. Call (703) 698-7117 to discuss what a functional medicine consultation looks like for your specific goals.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Chiropractor near McLean, VA"
            title="20 minutes from McLean. The clinical depth you'd expect from a premium Northern Virginia practice."
            body="Roselle Center for Healing serves McLean's discerning community with integrated chiropractic, acupuncture, and functional medicine. 30+ years of results in Northern Virginia. Same-week appointments available."
            image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
