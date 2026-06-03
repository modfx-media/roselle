"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import ImageCta from "../components/templates/ImageCta";

export default function FunctionalMedicinePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Functional Medicine · Fairfax, VA"
            title="Holistic functional medicine: heal the whole person."
            subtitle="Nutrition, lifestyle, chiropractic, and behavioral interventions — care that goes beyond medication."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Functional Medicine" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/integrated_medicine_services.jpg.webp?079d02753fdf6ebf5c90f88101c7b602"
            imageAlt="Woman practicing mindfulness, emphasizing holistic functional medicine."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Whole-person", label: "Care" },
              { value: "Root-cause", label: "Focus" },
              { value: "Integrative", label: "Therapies" },
              { value: "Personalized", label: "Plans" },
            ]}
          />

          <FeatureSplit
            eyebrow="Holistic Health"
            title="Roselle Center for Healing: Holistic Functional Medicine Services."
            body="At Roselle Center For Healing, in Fairfax, VA, we focus on integrative health care. We take a holistic, whole-person approach to health and wellness by utilizing natural integrative medicine, including chiropractic, acupuncture, applied kinesiology, functional medicine, nutrition, and massage therapy."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/integrated_medicine_services.jpg.webp?079d02753fdf6ebf5c90f88101c7b602"
            imageAlt="Functional medicine consultation."
          />

          <FeatureSplit
            tone="dark"
            eyebrow="Defining Functional Medicine"
            title="What Is Functional Medicine?"
            body={[
              "Conventional medicine uses a disease treatment model. A disease or condition is identified, and treatment focuses on the disease, with little consideration for the patient's overall health.",
              "Functional medicine takes a vastly different approach. It focuses on whole body health and healing. Rather than medication, functional medicine uses nutrition, lifestyle changes, chiropractic care, and behavioral interventions to treat and manage a variety of conditions.",
            ]}
            image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Natural wellness ingredients reflecting a whole-body, root-cause approach to functional medicine."
            reverse
          />

          <FeatureSplit
            eyebrow="Conditions"
            title="What Can be Treated with Functional Medicine?"
            body="Nearly any chronic condition can be treated with functional medicine. This includes allergies, arthritis, fibromyalgia, diabetes, digestive disorders, chronic pain, and thyroid disorders. It's also helpful for many female health issues, including PCOS, menopause, PMS, and endometriosis."
            bullets={[
              "Allergies, arthritis & fibromyalgia",
              "Diabetes & digestive disorders",
              "Chronic pain & thyroid disorders",
              "PCOS, menopause, PMS & endometriosis",
            ]}
            image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Practitioner reviewing a personalized care plan during a functional medicine consultation."
          />

          <FeatureSplit
            tone="dark"
            eyebrow="Your Assessment"
            title="Functional Medicine Diagnosis."
            body="Your diagnosis may include neurological testing, orthopedic testing, and functional chiropractic testing. Your chiropractor will also spend time discussing your lifestyle, concerns and symptoms, and medical history."
            bullets={[
              "Neurological testing",
              "Orthopedic testing",
              "Functional chiropractic testing",
              "Lifestyle, symptom & medical history review",
            ]}
            image="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Chiropractor performing a functional assessment to identify root causes."
            reverse
          />

          <FeatureGrid
            eyebrow="Treatment Options"
            title="Functional Medicine Treatments."
            intro="Treatments vary based on your condition and the underlying cause of your symptoms."
            cols={2}
            cards={[
              {
                title: "Chiropractic Care",
                description:
                  "Adjustments relieve pain, improve nervous system function, reduce inflammation, and expedite the healing process.",
              },
              {
                title: "Corrective Exercises",
                description:
                  "Tailored to your specific needs and conditions. Strengthens weakened muscles, improves flexibility and posture, and helps maintain proper spinal alignment.",
              },
              {
                title: "Nutritional Counseling",
                description:
                  "Functional medicine views food as medicine. Eating the best foods for your specific nutritional needs — with dietary changes and supplements that support your health.",
              },
              {
                title: "Lifestyle Advice",
                description:
                  "Recommendations to stop certain habits and begin new ones — exercise regimens, smoking cessation, and other beneficial lifestyle changes.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Functional Medicine at Roselle"
            title="Functional Medicine at Roselle Center for Healing."
            body="If you need a medical chiropractor in Fairfax, VA, contact us at Roselle Center For Healing. We treat a wide variety of conditions with holistic treatments — chiropractic adjustment, acupuncture, functional medicine, and massage therapy."
            image="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=1600&q=70&auto=format&fit=crop"
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
