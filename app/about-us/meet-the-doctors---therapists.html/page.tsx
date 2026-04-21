"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";

/* ── Staff data ── */
const TEAM = [
  {
    name: "Dr. Tom Roselle, DC, PAK, PAc, DCCN, DCBCN",
    role: "Founder & Lead Chiropractor",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1067_80/webmgr/0g/5/2/rtr-bio-photo-2016.jpg.webp?60de3fe80a9047a9c27cf25f1300a844",
    alt: "Dr. Tom Roselle, DC Chiropractor, Applied Kinesiologist",
    bio: [
      'In 1972, Dr. R. Thomas Roselle graduated with a Bachelor\'s Degree from Kent State University. He went on to receive a Doctor of Chiropractic Degree from the National College of Chiropractic in Lombard, Illinois in 1977 and certifications for acupuncture and nutrition. Since 1977, he has practiced in the state of New York and Virginia.',
      'He has served on the Boards of Directors of the Northern Virginia Chiropractic Society and New York State Chiropractic Association, and held multiple local and state offices. He has taught at the National University of Health Sciences, the International College of Applied Kinesiology, Northern Virginia Community College and Jamestown Community College.',
      'Since 1983, Dr. Roselle has hosted a radio talk show first aired as Chiropractic Call-In, then Health Alternatives, followed by Total Health Concepts and now "Dr. Tom Roselle Live!\u00AE" that provides listeners with the latest information on integrative, holistic and wellness health care methods.',
      'Dr. Roselle is the founder of Caring For Others Ltd., a charity that provides alternative health care for the homeless or those living in poverty, and provides scholarships for students of alternative health care.',
    ],
    link: "https://www.drtomroselle.com/",
  },
  {
    name: "Dr. Harlan Browning, DC, MS, DIBAK",
    role: "Chiropractor & Sports Medicine Specialist",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b2975f81028e_RoselleHarlanB2013.png.webp?42f6d4562164e265a3fa2a454c0faa9b",
    alt: "Dr. Harlan Browning, DC Chiropractor, Sports Medicine Specialist, Applied Kinesiologist",
    bio: [
      'Dr. Harlan L. Browning, D.C., brings over 20 years of conditioning and clinical knowledge to Roselle Center for Healing. His treating philosophy is a culmination of his experience in strength and conditioning, rehabilitation, Chiropractic and clinical nutrition.',
      'He is a graduate of the National University of Health Sciences majoring both as a Doctor of Chiropractic and a Bachelors of Science in Human Biology. He holds a Masters of Science in Human Nutrition from the University of Bridgeport and a Bachelors of Science in Business Administration from Auburn University.',
      'Dr. Browning holds numerous post graduate honors including Diplomate and Fellowship status in Applied Kinesiology (DIBAK), Neurology (DCBCN), Clinical Nutrition (DCBCN) and Acupuncture (FIAMA).',
      'Additionally, Dr. Browning is a Certified Strength & Conditioning Specialist (CSCS), Certified Clinical Nutritionist (CCN) and a Certified Personal Trainer (ACE). He is a member of the International College of Applied Kinesiology, International and American Associations of Clinical Nutritionists, and the National Strength and Conditioning Association.',
      'Dr. Browning is actively involved in lecturing on sports medicine, neurology and clinical nutrition and currently serves on the board of advisors for The American Academies of Sports Practitioners and the International Board of Examiners for the International College of Applied Kinesiology. He is a licensed Chiropractic Physician in Virginia as well as a licensed acupuncturist.',
      'Before becoming a Chiropractic Physician, Dr. Browning owned and operated a personal training company in addition to working as strength and conditioning coach on the high school and college level.',
    ],
  },
  {
    name: "Dr. Scott Lamp, DC, CCSP",
    role: "Chiropractor & Sports Physician",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/804x1181_80/webmgr/0g/5/2/5b297626dbbd7_RoselleLamp2013.png.webp?3e8b003b5c11e453fefd078f261a127a",
    alt: "Dr. Scott Lamp, DC Chiropractor, Sports Medicine Specialist, Applied Kinesiologist",
    bio: [
      'Dr. Scott Lamp graduated from George Mason University in Northern Virginia in 1986 with a Bachelor of Science Degree in Biology. He went on to graduate Magna Cum Laude with a Doctor of Chiropractic Degree from Logan College of Chiropractic, St. Louis, Missouri in 1993. While attending Logan College of Chiropractic, Dr. Scott received special recognition for his work and dedication to the study of Ergonomics. In addition, he was part of an elite group of interns chosen to assist other students in expanding their knowledge in the areas of Anatomy, X-Ray and Ergonomics.',
      'Dr. Scott practiced as an associate in Alexandria, Virginia before opening Sterling Family Chiropractic Center with his wife in 1995. Since going into private practice, he continues to pursue his passion for learning by attending countless educational seminars and continuing to read and listen to the latest updates in the areas of Chiropractic, Nutrition and Wellness.',
      "Dr. Scott's continuing education has earned him the additional title of Certified Chiropractic Sports Physician. In addition, he has extensive knowledge and training in the areas of Applied Kinesiology and Nutrition and is currently pursuing his certification in Brimhall Wellness. Dr. Scott is also an Independent Consultant with Future Industrial Technologies which is a company that dedicates itself to Work-Injury Prevention.",
      'In March 2010, Dr. Scott joined Roselle Center for Healing to continue to further pursue his interests and passion in the alternative health and wellness field.',
    ],
  },
  {
    name: "Dr. Stephanie Pina, ND, L.AC, MSOM, FABORM, CLT",
    role: "Naturopathic Doctor & Acupuncturist",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b29766ca6d8f_RosellePina2013.png.webp?8c6c1d926a7a1f145769f3e90bedf45d",
    alt: "Dr. Stephanie Pina, Naturopathic Doctor and Acupuncturist",
    bio: [
      'Dr. Stephanie Pina graduated from the University of Tennessee, Knoxville with a Bachelor of Science. She obtained her Doctorate in Naturopathic Medicine from Southwest College of Naturopathic Medicine. There she became interested in Chinese medicine and returned to complete a Masters degree in Oriental Medicine from the Phoenix Institute of Herbal Medicine and Acupuncture. She also holds a Diplomate status in both Acupuncture and Oriental Medicine from the National Accrediting Board of Acupuncture and Oriental Medicine (NCCAOM.)',
      'Stephanie is a Fellow and Member of the American Board of Oriental Reproductive Medicine (ABORM), a specialty board accrediting practitioners with advanced training in Western and Eastern reproductive medicine. She has written articles for many national health magazines such as The Townsend Letter. Her goal is to educate people about the importance of being pro-active in their health.',
    ],
  },
  {
    name: "Dr. Qinglong Zhang, DC, DOM, MSOM, LAc",
    role: "Chiropractor & TCM Practitioner",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1040_80/webmgr/0g/5/2/Dr._Qinlong_Zhang_DC.png.webp?1fa05eccd8e44256e4f1c364fe761ce4",
    alt: "Dr. Qinglong Zhang, DC, DOM, MSOM, LAc",
    bio: [
      "Dr. Qinglong Zhang hails from Shanghai, China, and comes from a family of medical practitioners. After attending Shandong University, he graduated in 2007 with a bachelor's degree in Acupuncture, Moxibustion and Tui'na (Manipulation) of Traditional Chinese Medicine (TCM).",
      "Additionally, he received a master's degree in Orthopedics and Traumatology in 2010 from Shanghai University of TCM. Subsequently, he went on to work at the prestigious Shanghai Shuguang Hospital as a TCM practitioner.",
      'In June 2017, he received his Doctor of Chiropractic degree from the Palmer College of Chiropractic in Davenport, Iowa with Magna Cum Laude honors.',
      'Since moving to the Northern Virginia area, Dr. Zhang established recognition as a Virginia Licensed Acupuncturist and holds a Diplomate status from National Certification Commission of Acupuncture and Oriental Medicine (NCCAOM).',
      'Dr. Zhang has extensive experience and breadth in acupuncture, Chinese herbs, cupping and manual manipulation.',
      'He continues to pursue his studies in Applied Kinesiology.',
    ],
  },
  {
    name: "Dr. Jerry Cowart III, DC",
    role: "Chiropractor",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1068_80/webmgr/0g/5/2/jerry-cowart-200-x-267.png.webp?115853488b428ab4ed7dfdcf98ff3ca8",
    alt: "Dr. Jerry Cowart III, DC",
    bio: [
      "Dr. Jerry Cowart III graduated with a bachelor's degree in Biology and a minor in Spanish from Western Kentucky University. He went on to earn his doctorate degree in Chiropractic from Life University in Atlanta, GA.",
      'He is a professional member of the prestigious International College of Applied Kinesiology. Additionally, he has significant postgraduate education in Quantum Neurology, NET (neuro-emotional technique) and cranial-sacral techniques.',
      'Dr. Cowart has held many executive board offices and leadership positions with several organizations throughout his academic years. In addition, he was elected to the Phi Sigma Pi National Honors Fraternity where he facilitated the social, personal and academic growth of other members.',
      'Dr. Cowart has spent time volunteering to treat many indigent people from Latin America.',
      'In his free time Dr. Cowart enjoys dancing, hiking and exploring.',
    ],
  },
  {
    name: "R. Sue Roselle, MS, CNS",
    role: "Certified Nutritionist",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b297726672bc_RoselleSue2013.png.webp?8cd98ae804b85c13120e666fb263a1e7",
    alt: "R. Sue Roselle, MS, CNS, Certified Nutritionist",
    bio: [
      'R. Sue Roselle, MS, CNS, has worked as a Certified Nutritionist for Roselle Alternative Care since 1989.',
      'She completed her Bachelor of Science Degree at Kent State University graduating with honors. She then completed her Masters of Science degree in Human Nutrition from the University of Bridgeport, Connecticut.',
      'She is licensed by the National Institute of Nutritional Education and is a member of the Society of Certified Nutritionists and the Institute for Functional Medicine.',
      'Ms. Roselle is Certified by the American College of Nutrition.',
      'She has lectured widely to combined lay and professional audiences.',
      'Her thesis "Genistein and Diadzein, Soy Isoflavones: Their Effects on Breast Cancer," is one of the most comprehensive reviews of available research on the subject, she continues her research and study in many areas of functional medicine.',
    ],
  },
  {
    name: "Mary Jane Bembenek, MS, CNS, LDN",
    role: "Certified Nutrition Specialist",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1004_80/webmgr/0g/5/2/mary-jane-bembenek.jpg.webp?64d7791ad995a5a619e39e430dbc4b57",
    alt: "Mary Jane Bembenek, MS, CNS, LDN",
    bio: [
      'Mary Jane Bembenek, MS, CNS, LDN is a Certified Nutrition Specialist by the Board for Certification of Nutrition Specialists and a Licensed Nutritionist by the MD Department of Health. She earned her Master of Science in Nutrition and Integrative Health through Maryland University of Integrative Health (formerly Tai Sophia Institute).',
      "Mary Jane's graduate studies reawakened her passion for understanding medicine, nutrition, whole foods, cooking, health, and yoga while contributing to the well-being of others. Mary Jane is courageous, honest, analytical, and compassionate, a perceptive listener dedicated to accessing the needs of others and providing integrative, holistic, and nourishing solutions to enhance health and wellness outcomes. Through her belief that food matters and nutrition therapy can affect the recovery path of chronic diseases, she is inspired to cultivate sustainable transformation in others.",
      'Constantly striving to be present to enjoy life balancing work and play, Mary Jane is a CrossFit enthusiast, devoted Iyengar yoga practitioner, fiction reader and knitter. She is often in the kitchen cooking delicious, nourishing meals with her partner Mike and their Bichon, Reishi and Tex, a rescue from Hurricane Harvey.',
    ],
  },
  {
    name: "Dr. Leonard Poe, DC",
    role: "Chiropractor & Functional Medicine",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1040_80/webmgr/0g/5/2/Roselle_Poe_260x200.png.webp?8e43a9b1bb71dc31b1e149ba3773339a",
    alt: "Dr. Leonard Poe, DC",
    bio: [
      "Dr. Poe grew up in Charlotte, NC, and received his Bachelor's Degree from the Virginia Military Institute. He took part in an extensive Spanish immersion program in Bolivia while attending VMI. Upon graduation from VMI, Dr. Poe returned to Charlotte where he worked for the Charlotte-Mecklenburg Police Department.",
      'In 2004, Dr. Poe left law enforcement to pursue a career in chiropractic. He attended the Parker University in Dallas, TX, where he received his Doctor of Chiropractic. While attending Parker University he was selected to participate in a chiropractic residency internship abroad in Mexico City, Mexico and was responsible for treating patients at public clinics and hospitals and was present to assist in spinal procedures. Dr. Poe has a working knowledge of the Spanish language and culture due to his experience living in Mexico and Bolivia.',
      'Dr. Poe has been committed to the use of Functional Medicine, including Neurology, Endocrinology and Immunology in his approach to the treatment of patients. He is certified as a Professional Applied Kinesiologist and served on the Board of Directors for the International College of Applied Kinesiology.',
      'Dr. Poe includes chiropractic, physiotherapy, nutrition and acupuncture philosophy in the treatment of his patients to continually improve their health and wellness. To stay up to date with all the current medical information and techniques Dr. Poe frequently participates in continuing education seminars and is currently working toward advance certifications in nutrition, neurology and acupuncture.',
      "Dr. Poe is committed to finding and treating the causes of a patients problems. Dr. Poe's patient hours at the Roselle Center for Healing are: Monday, Wednesday from 7:00 am to 11:30 am and Friday from 7:00am to 9:00am",
    ],
  },
  {
    name: "Connie Kern, LAc, MSOM",
    role: "Acupuncturist & Chief Operating Officer",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1175_80/webmgr/0g/5/2/5b29780519c7e_RoselleConnie2013.png.webp?de01b87c97bb933b906740d40830a454",
    alt: "Connie Kern, LAc, MSOM",
    bio: [
      'Consuelo Kern received her undergraduate training from George Mason University and obtained her Master in Traditional Chinese Medicine (TCM) from Mid West College of Oriental Medicine, in Racine, Wisconsin.',
      'She also studied in Guangzhou, China where she completed one of her four internships before coming back to practice.',
      'Ms. Connie Kern has been with Roselle Center for Healing since 1986, serving as corporate supervisor and Chief Operating Officer.',
      'Ms. Kern also serves as a dedicated board member of Caring for Others, Ltd.',
    ],
    linkLabel: "Caring for Others, Ltd.",
    linkHref: "https://caringforothersltd.org/",
  },
  {
    name: "Derreth Painter, Well-Being Coach and ACCT Thermographer",
    role: "Well-Being Coach & Thermographer",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1068_80/webmgr/0g/5/2/dp-200-x-267.png.webp?643c4774e7174e24410449c7e3e057cc",
    alt: "Derreth Painter, Well-Being Coach and ACCT Thermographer",
    bio: [
      "Derreth has over 20 years' experience in forensic psychology and assessment, and 15+ years in natural healthcare principles and applications. She is passionate in encouraging others to be proactive in their own health and well-being. Whatever your well-being goals may be, Derreth can address the emotional side of healing by providing tools and perspective to help create the best version of yourself. Overcome obstacles (old and new), rediscover talents and purpose while refining your health and wellness journey.",
      'Derreth is also our certified ACCT Thermographer with the Thermography Center of Fairfax.',
    ],
    linkLabel: "Thermography Center of Fairfax",
    linkHref: "https://www.thermographycenters.com/",
  },
  {
    name: "Sybil McFarland, Community Outreach",
    role: "Community Outreach",
    image:
      "https://cdcssl.ibsrv.net/ibimg/smb/800x1040_80/webmgr/0g/5/2/Roselle_Sybil.png.webp?ddf75279a190675c28b5bdafa21852ec",
    alt: "Sybil McFarland, Community Outreach",
    bio: [
      'With 35+ years of experience in hospitality, Sybil McFarland has a unique perspective on customer patient care and providing quality beyond measure.',
      'Sybil is skilled in creating community outreach events for the Roselle Center for Healing, the Thermography Centers of Fairfax and Caring for Others, Ltd.',
    ],
  },
];

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function MeetTheDoctorsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Doctors &amp; Specialists</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Doctors & Specialists"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Team Members ── */}
          {TEAM.map((member, i) => {
            const isDark = i % 2 === 1;
            const imageLeft = i % 2 === 0;

            return (
              <section
                key={member.name}
                className={`${isDark ? "about-noise bg-fg" : "bg-bg"} py-section-py overflow-hidden relative`}
              >
                <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
                  <div className={`grid grid-cols-[1fr_1.4fr] gap-s10 items-start
                                   max-[900px]:grid-cols-1 max-[900px]:gap-s6
                                   ${!imageLeft ? "direction-rtl" : ""}`}
                    style={!imageLeft ? { direction: "rtl" } : undefined}
                  >
                    {/* Image */}
                    <RevealSection>
                      <div
                        className="w-full rounded-xl overflow-hidden"
                        style={!imageLeft ? { direction: "ltr" } : undefined}
                      >
                        <img
                          src={member.image}
                          alt={member.alt}
                          className="w-full rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    </RevealSection>

                    {/* Bio */}
                    <div style={!imageLeft ? { direction: "ltr" } : undefined}>
                      <RevealSection delay={0.1}>
                        <p className={`inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s2 font-sans ${
                          isDark ? "" : "text-accent"
                        }`}
                          style={isDark ? { color: "rgba(198,177,128,0.85)" } : undefined}
                        >
                          {member.role}
                        </p>
                        <h2 className={`text-fluid-2xl tracking-tight leading-[1.15] font-serif ${
                          isDark ? "text-bg" : "text-fg"
                        }`}>
                          {member.name}
                        </h2>
                      </RevealSection>

                      {member.bio.map((paragraph, j) => (
                        <RevealSection key={j} delay={0.15 + j * 0.03}>
                          <p
                            className="text-fluid-base leading-relaxed mt-s4"
                            style={{
                              color: isDark
                                ? "rgba(245,244,239,0.55)"
                                : "rgba(42,41,40,0.68)",
                            }}
                          >
                            {paragraph}
                          </p>
                        </RevealSection>
                      ))}

                      {member.link && (
                        <RevealSection delay={0.3}>
                          <a
                            href={member.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-sm mt-s4 transition-colors duration-200 ${
                              isDark
                                ? "text-accent hover:text-bg"
                                : "text-accent hover:text-fg"
                            }`}
                          >
                            Learn more about {member.name.split(",")[0]}
                            <span>&rarr;</span>
                          </a>
                        </RevealSection>
                      )}

                      {member.linkLabel && member.linkHref && (
                        <RevealSection delay={0.3}>
                          <a
                            href={member.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-sm mt-s4 transition-colors duration-200 ${
                              isDark
                                ? "text-accent hover:text-bg"
                                : "text-accent hover:text-fg"
                            }`}
                          >
                            {member.linkLabel}
                            <span>&rarr;</span>
                          </a>
                        </RevealSection>
                      )}

                      <RevealSection delay={0.35}>
                        <MagneticButton
                          className={`mt-s4 ${isDark ? "btn-primary-inverted" : "btn-primary"}`}
                          onClick={() =>
                            window.location.href = "/contact-staff-member.html"
                          }
                        >
                          Email {member.name.split(",")[0]}
                        </MagneticButton>
                      </RevealSection>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* ── Hours & Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">

                {/* Hours */}
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Hours of Operation
                  </h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day}
                        className="flex items-center justify-between py-3 text-sm"
                        style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span>
                        <span className="text-bg font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </RevealSection>

                {/* Location */}
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Merrifield Location In Fairfax, VA
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans"
                    style={{ color: "rgba(198,177,128,0.85)" }}>
                    Your Local Chiropractic Clinic
                  </p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">
                    Roselle Center For Healing
                  </p>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "rgba(198,177,128,0.85)" }}>Address</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                        8500 Executive Park Ave STE 300<br />Fairfax, VA 22031
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p>
                      <a href="tel:+17036987117"
                        className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">
                        (703) 698-7117
                      </a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                        (703) 698-5729
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "rgba(198,177,128,0.85)" }}>Email</p>
                      <a href="mailto:rosellecare@gmail.com"
                        className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">
                        rosellecare@gmail.com
                      </a>
                    </div>
                  </div>
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10
                                rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4
                                bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">
                      Free 20-Minute Consultation
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Call us today to schedule your free consultation and take the first step
                      toward better health.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary"
                      onClick={() => window.location.href = "tel:+17036987117"}
                    >
                      Call (703) 698-7117
                    </MagneticButton>
                    <MagneticButton
                      className="btn-primary"
                      onClick={() => window.location.href = "/appointment"}
                    >
                      Book an Appointment
                    </MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
