"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import FeatureSplit from "../../components/templates/FeatureSplit";
import CtaBand from "../../components/templates/CtaBand";

const TEAM = [
  { name: "Dr. Tom Roselle, DC, PAK, PAc, DCCN, DCBCN", role: "Founder & Lead Chiropractor", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1067_80/webmgr/0g/5/2/rtr-bio-photo-2016.jpg.webp?60de3fe80a9047a9c27cf25f1300a844", alt: "Dr. Tom Roselle, DC.", bio: ["In 1972, Dr. R. Thomas Roselle graduated with a Bachelor's Degree from Kent State University. He went on to receive a Doctor of Chiropractic Degree from the National College of Chiropractic in Lombard, Illinois in 1977 and certifications for acupuncture and nutrition. Since 1977, he has practiced in the state of New York and Virginia.", "He has served on the Boards of Directors of the Northern Virginia Chiropractic Society and New York State Chiropractic Association, and held multiple local and state offices. He has taught at the National University of Health Sciences, the International College of Applied Kinesiology, Northern Virginia Community College and Jamestown Community College.", "Since 1983, Dr. Roselle has hosted a radio talk show — now \"Dr. Tom Roselle Live!®\" — providing listeners with the latest information on integrative, holistic and wellness health care methods.", "Dr. Roselle is the founder of Caring For Others Ltd., a charity that provides alternative health care for those in need."] },
  { name: "Dr. Harlan Browning, DC, MS, DIBAK", role: "Chiropractor & Sports Medicine Specialist", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b2975f81028e_RoselleHarlanB2013.png.webp?42f6d4562164e265a3fa2a454c0faa9b", alt: "Dr. Harlan Browning, DC.", bio: ["Dr. Harlan L. Browning, D.C., brings over 20 years of conditioning and clinical knowledge to Roselle Center for Healing. His treating philosophy is a culmination of his experience in strength and conditioning, rehabilitation, Chiropractic and clinical nutrition.", "He is a graduate of the National University of Health Sciences majoring both as a Doctor of Chiropractic and a Bachelors of Science in Human Biology. He holds a Masters of Science in Human Nutrition from the University of Bridgeport and a Bachelors of Science in Business Administration from Auburn University.", "Dr. Browning holds numerous post graduate honors including Diplomate and Fellowship status in Applied Kinesiology (DIBAK), Neurology (DCBCN), Clinical Nutrition (DCBCN) and Acupuncture (FIAMA). He is a Certified Strength & Conditioning Specialist (CSCS), Certified Clinical Nutritionist (CCN) and a Certified Personal Trainer (ACE)."] },
  { name: "Dr. Scott Lamp, DC, CCSP", role: "Chiropractor & Sports Physician", image: "https://cdcssl.ibsrv.net/ibimg/smb/804x1181_80/webmgr/0g/5/2/5b297626dbbd7_RoselleLamp2013.png.webp?3e8b003b5c11e453fefd078f261a127a", alt: "Dr. Scott Lamp, DC.", bio: ["Dr. Scott Lamp graduated from George Mason University in 1986 with a Bachelor of Science Degree in Biology. He went on to graduate Magna Cum Laude with a Doctor of Chiropractic Degree from Logan College of Chiropractic in 1993.", "Dr. Scott's continuing education has earned him the additional title of Certified Chiropractic Sports Physician. He has extensive knowledge and training in the areas of Applied Kinesiology and Nutrition.", "In March 2010, Dr. Scott joined Roselle Center for Healing to continue to further pursue his interests and passion in the alternative health and wellness field."] },
  { name: "Dr. Stephanie Pina, ND, L.AC, MSOM, FABORM, CLT", role: "Naturopathic Doctor & Acupuncturist", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b29766ca6d8f_RosellePina2013.png.webp?8c6c1d926a7a1f145769f3e90bedf45d", alt: "Dr. Stephanie Pina.", bio: ["Dr. Stephanie Pina graduated from the University of Tennessee, Knoxville with a Bachelor of Science. She obtained her Doctorate in Naturopathic Medicine from Southwest College of Naturopathic Medicine, and a Masters degree in Oriental Medicine from the Phoenix Institute of Herbal Medicine and Acupuncture.", "Stephanie is a Fellow and Member of the American Board of Oriental Reproductive Medicine (ABORM), a specialty board accrediting practitioners with advanced training in Western and Eastern reproductive medicine."] },
  { name: "Dr. Qinglong Zhang, DC, DOM, MSOM, LAc", role: "Chiropractor & TCM Practitioner", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1040_80/webmgr/0g/5/2/Dr._Qinlong_Zhang_DC.png.webp?1fa05eccd8e44256e4f1c364fe761ce4", alt: "Dr. Qinglong Zhang.", bio: ["Dr. Qinglong Zhang hails from Shanghai, China. He graduated in 2007 with a bachelor's degree in Acupuncture, Moxibustion and Tui'na of TCM, and received his master's in Orthopedics and Traumatology in 2010 from Shanghai University of TCM.", "In June 2017, he received his Doctor of Chiropractic degree from Palmer College of Chiropractic with Magna Cum Laude honors. He has extensive experience in acupuncture, Chinese herbs, cupping and manual manipulation."] },
  { name: "Dr. Jerry Cowart III, DC", role: "Chiropractor", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1068_80/webmgr/0g/5/2/jerry-cowart-200-x-267.png.webp?115853488b428ab4ed7dfdcf98ff3ca8", alt: "Dr. Jerry Cowart III.", bio: ["Dr. Jerry Cowart III graduated with a bachelor's degree in Biology and a minor in Spanish from Western Kentucky University. He earned his doctorate in Chiropractic from Life University in Atlanta, GA.", "He is a professional member of the prestigious International College of Applied Kinesiology, with significant postgraduate education in Quantum Neurology, NET (neuro-emotional technique) and cranial-sacral techniques."] },
  { name: "R. Sue Roselle, MS, CNS", role: "Certified Nutritionist", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b297726672bc_RoselleSue2013.png.webp?8cd98ae804b85c13120e666fb263a1e7", alt: "R. Sue Roselle.", bio: ["R. Sue Roselle, MS, CNS, has worked as a Certified Nutritionist for Roselle Alternative Care since 1989. She completed her Bachelor of Science Degree at Kent State University and her Master of Science in Human Nutrition from the University of Bridgeport, Connecticut.", "She is licensed by the National Institute of Nutritional Education and is a member of the Society of Certified Nutritionists and the Institute for Functional Medicine."] },
  { name: "Dr. Leonard Poe, DC", role: "Chiropractor & Functional Medicine", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1040_80/webmgr/0g/5/2/Roselle_Poe_260x200.png.webp?8e43a9b1bb71dc31b1e149ba3773339a", alt: "Dr. Leonard Poe.", bio: ["Dr. Poe received his Bachelor's Degree from the Virginia Military Institute and his Doctor of Chiropractic from Parker University in Dallas, TX.", "Dr. Poe has been committed to the use of Functional Medicine, including Neurology, Endocrinology and Immunology in his approach to the treatment of patients. He is certified as a Professional Applied Kinesiologist."] },
  { name: "Derreth Painter", role: "Well-Being Coach & ACCT Thermographer", image: "https://cdcssl.ibsrv.net/ibimg/smb/800x1068_80/webmgr/0g/5/2/dp-200-x-267.png.webp?643c4774e7174e24410449c7e3e057cc", alt: "Derreth Painter.", bio: ["Derreth has over 20 years' experience in forensic psychology and assessment, and 15+ years in natural healthcare principles. She is passionate in encouraging others to be proactive in their own health and well-being.", "Derreth is also our certified ACCT Thermographer with the Thermography Center of Fairfax."] },
];

export default function MeetTheDoctorsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Our Team · Fairfax, VA"
            title="Doctors & specialists."
            subtitle="A multidisciplinary team of chiropractors, acupuncturists, naturopaths, nutritionists, and wellness coaches working together to help you thrive."
            crumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us.html" }, { label: "Doctors & Specialists" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x567_80/webmgr/0g/5/2/2024/rcfh-team.png.webp?b7c8e3568cbbeb35e95e9e8e9c5d9a4f"
            imageAlt="Roselle Center for Healing team."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          {TEAM.map((m, i) => (
            <FeatureSplit
              key={m.name}
              eyebrow={m.role}
              title={m.name}
              body={m.bio}
              image={m.image}
              imageAlt={m.alt}
              reverse={i % 2 === 1}
              tone={i % 2 === 1 ? "dark" : "light"}
            />
          ))}

          <CtaBand
            tone="gold"
            eyebrow="Free 20-minute consultation"
            title="Meet our team in person."
            body="Schedule your first visit today and find the right practitioner for your wellness journey."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
