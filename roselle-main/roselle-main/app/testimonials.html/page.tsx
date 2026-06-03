"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import Contact from "@/app/components/Contact";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import CtaBand from "@/app/components/templates/CtaBand";


const TESTIMONIALS = [
  {
    name: "G. Thompson, Northern Virginia",
    text: "I am happy to give a review for this wonderful organization. Dr. Lamp is an amazing chiropractor with many skills and abilities. Dr. Pina has helped me through many aches and pains over the years, too! Things that I have gone to Kaiser for, my doctor would have suggested Tylenol. I treasure both of these wonderful healers.",
  },
  {
    name: "Daphne K., Northern Virginia",
    text: "I have a history of skin cancer, melanoma, and squamous cell carcinoma. My older sister has stage four melanoma which is what brought me to the Roselle Center for Healing. I worked with Derreth Painter and had a thermography scan done. It showed a very small red spot on my back. Derreth said with my history that I should get it checked out right away, so I took the thermography scan to my dermatologist. My doctor said that they do not do anything unless they see it on the top of the skin. He said the thermography was very interesting and agreed to take me in for a biopsy it came back as melanoma cancer. It was the size of a pea on the scan! My dermatologist asked keep a copy for reference and for more information in the Thermography Centers for his patients with a similar history. Thank you to the Roselle Center for Healing, the Thermography and Derreth Painter!!",
  },
  {
    name: "Karen Y., Northern Virginia",
    text: "I love the Roselle Healing Center & everyone who works there!! I started there 15 years ago from a bad case of food poisoning. Sue helped me tremendously!! I continued going for adjustments & acupuncture over the years. Dr Lamp has been awesome & Dr Pina!!! I am now seeing Dr Roselle for a new health situation. He has been so caring & patient. He knows his stuff!! The office gals are wonderful! They are caring & respectful. I have recommended The Roselle Center to my friends & family.",
  },
  {
    name: "M.V., Northern Virginia",
    text: "About a year and a half ago, I was lucky enough to find the Roselle Center and meet Dr. Zhang, and all the great staff members who worked there. I started my treatment after the terrible effects I had when I started taking a thyroid hormone. Thanks to Dr. Zhang and his excellent acupuncture and chiropractic treatment, I was able to heal and regain my normal life. I was very lucky to find Dr. Zhang, he is an excellent doctor and person who, with his knowledge, ability, skills, and positivity, is an example of a medical professional and what someone who is in charge of the difficult task of healing people should be. I was also lucky enough to meet Mary Jane, an excellent nutritionist and person who guided me very well with my healing process. I am very grateful because dr. Zhang and Mary Jane have been my great physical and psychological support in recovering my health.",
  },
  {
    name: "C.P., Merrifield, VA",
    text: "The Roselle Center for Healing is a great place to improve your health because the medical providers are so caring and knowledgeable and the customer service staff are very friendly, helpful and professional. I have been seeing the providers here for over 10 years who have helped me overcome various health issues including knee problems with chiropractic services from Dr Browning, stress relief with acupuncture from Dr Pina and nutritional counseling from Annabeth. I highly recommend this practice to all my friends.",
  },
  {
    name: "Kathleen W., Fairfax, VA",
    text: "I had a wonderful experience at Roselle Center and the timing of this feedback could not be better. Although I am retired and cannot afford to visit too often as in the past, it was necessary to see my doctor, Dr. Lamp. He muscled tested me to make sure my vitamins were necessary and good for my body which is very helpful for me to keep down the cost of vitamins. But most of all, I owe Dr. Lamp a big thank you for adjusting my right side so I am now able to walk better. He has magic hands. He also noticed on my blood test from my military doctor that my A-1C was slightly low which may be causing my dizziness and maybe vertigo. He now has me on a small dose of copper to be taken far away from the multi vitamin which has zinc. He will follow up in about a month and maybe thereafter. He is a doctor who really cares. Thank you so much Dr. Lamp!",
  },
  {
    name: "KL CC, 5-Star Google+ Review",
    text: "My journey to the Roselle Center started when I was seeking thermography during a perceived health crisis. Derreth was the answer to my prayers. She is so compassionate and truthful. I left my first appointment feeling equipped and empowered. I was so inflamed that she suggested I seek chiropractic care at the Roselle Center and she made 3 suggestions at the Roselle Center. I intuitively selected Dr. Zhang and I am so glad that I did. Dr. Zhang is often smiling, he is so caring and his skillset as both a chiropractor and acupuncturist provides so much depth to my care. He listens, he always takes his time and our time together is collaborative. His skills naturally confirm and guide his plan of treatment. For example, I remember coming in feeling stressed and he confirmed the location and quality of the stress based on muscle testing and confirmed it with his knowledge of acupuncture and the meridians. I am always happy to see Dr. Zhang because he does not provide \"cookie cutter\" treatments. He meets me where I am each time I have an appointment. I am 90% less inflamed within a few months of seeing Dr. Zhang consistently. A deep bow of gratitude to Derreth for empowering me, to Dr. Zhang for his healing presence and to Miss Tricia at the front desk for always greeting me with a smile during my early morning appointments.",
  },
  {
    name: "Lisa J., 5-Star Google+ Review",
    text: "When I think of Dr. Zhang, the descriptive words that immediately come to mind are genuine laughter, profound expertise, joyful heart and abundant wisdom. This is the kind of doctor that I would want for anyone who wants to be seen and heard and to be treated with kindness and respect. I first met Dr. Zhang five months ago while in the midst of recovering from a car accident that occurred eight months prior. Suffering from significant whiplash, Western medicine was able to help me recover about 80% of the use of my head, neck, and shoulder areas, but I could not get any further and still with persistent headaches as a result of the accident. This perhaps would be satisfactory for someone to \"get through\" their day, but certainly not to live a full and meaningful life in the way that I was used to. After the initial evaluation, Dr. Zhang said without a doubt that he could help me as long as I could prioritize the time that he needed to support me on this healing journey, which I committed to doing so. In addition to the plethora of Eastern medicine techniques that Dr. Zhang brings to the table, he also has an intuitive awareness of my concerns, some of which I may not even be fully aware of. However, because Dr. Zhang is so attuned to what the body is holding, it is obviously clear to him what treatment measures need to be taken moving forward.....and then he proceeds with ease and confidence. I am grateful and happy to report that I continue to make significant strides and feel more like my younger self every day! There may be an occasional headache every now and then because healing is not always \"linear\"; it does go \"sideways\" from time to time. And when it does, I know that I am in excellent hands with Dr. Zhang in getting me back. Without a doubt, I enthusiastically recommend Dr. Zhang! Also, I would be remiss not to say how well-received I have been each and every time I have walked into the Roselle Center for Healing. Whether it is the friendly and personal staff at the front desk, the other fabulous practitioners and staff who happen to be in the hallway, or even Dr. Roselle, himself, who always makes a point to say \"hello\" even though I am not his patient; they all acknowledge and make me feel seen. After all, isn't this what we all want and need as human beings? Thank you, Roselle Center for Healing. You truly have made a difference in my life!",
  },
  {
    name: "Larry M., Fairfax, VA",
    text: "Hey Dr. Tom Roselle, Scott Lamp, and Dr. Jerry Cowart III, Wow, your class on Disease, Dysfunction, and Pain was an absolute blast! You brought the excitement of the amusement park to life with your engaging explanations. Your skills as good listeners and truthful communicators are like the guides who make sure everyone's enjoying the rides safely. You're not just doctors \u2013 you're the navigators of this exhilarating journey called health. Your ability to turn complex medical concepts into relatable adventures is truly remarkable. It's like you're unlocking secret levels of knowledge and sharing them with us, making the whole health journey feel like an exciting game. Your class left us all feeling empowered and ready to tackle any challenges that come our way. The way you blend science and empathy is like the perfect mix of thrills and heartwarming moments in a blockbuster movie. Thank you for being the superheroes of health education, and for making us feel like we're on the coolest ride of our lives. Keep spreading the excitement and knowledge \u2013 you're making a real difference in the amusement park of our well-being! Keep rocking, Larry M.",
  },
  {
    name: "Greg O., 5-Star Google+ Review",
    text: "Dr. Lamp has a plethora of expertise to apply when I have health issues. I highly recommend his chiropractic services.",
  },
  {
    name: "Amanda S., 5-Star Google+ Review",
    text: "I went to the Roselle Center for Healing because I was having issues with tremors from my chronic illness. I was also dealing with high anxiety and lots of fatigue. After seeing Dr. Z I have been feeling so much better! I have less anxiety, my energy levels have increased, and I hardly tremor anymore and when I do, Dr. Z has taught me different tricks in order to get the tremors to stop on my own! My boyfriend sees Dr. Z as well and he has come a long way since starting treatment. When he first started seeing Dr. Z he could hardly get out of bed and doing daily tasks was extremely difficult for him. Now, his energy levels have greatly improved and he is able to live more of a full life since he started seeing Dr. Z. I highly recommend working with Dr. Z!",
  },
  {
    name: "Sankuri J., 5-Star Google+ Review",
    text: "Dr. Qinglong Zhang is an excellent acupuncturist and chiropractor. He is very knowledgeable, explains things clearly and gives great health tips. I definitely recommend him! Thank you!",
  },
  {
    name: "Angela F., 5-Star Google+ Review",
    text: "I'm so pleased with my experience working with Dr. Zhang. His kind and caring approach combined with his deep knowledge and understanding of acupuncture and chiropractic techniques, have calmed my nervous system, improved my hormonal and metabolic functioning, and put me on the path to a full recovery from health issues I've been struggling with for almost 15 years. I highly recommend Dr. Zhang. He's the best!!!",
  },
  {
    name: "Taylor H., 5-Star Google+ Review",
    text: "My family and I have been seeing Dr. Harlan Browning for decades. For all his healing properties, we can't help but recommend him to everyone we meet. From joints to bones to brains, Dr. Browning has helped us to navigate healthier habits and practices throughout our lives. On top of this, the staff is always so warm and welcoming with every interaction, the process within each visit transparent, and the healing endless.",
  },
  {
    name: "Bessie S., 5-Star Google+ Review",
    text: "Dr. Zhang chiropractor/acupuncturist/Chinese medicine and more! He is a very personable, intelligent, observant and professional doctor. The Roselle Healing center is just that.... a place where you come to get HEALED not have symptoms relieved with drugs that have more side effects than the good they do. The whole staff is awesome, friendly and professional.",
  },
  {
    name: "Roy N., 5-Star Google+ Review",
    text: "Here is a review my wife, Darlene, wanted me to post: I've been seeing Dr. Lamp off and on for a little over three years now. He is nothing less than amazing! I have had several issues he's taken care of, but recently he fixed the hiatal hernia that was causing me extreme discomfort and burning in the upper part of my stomach after every meal. He gently pulled my stomach down and away from my esophagus, aligning things the way they should be (a hiatal hernia is when part of your stomach pokes up through your esophagus -- not a good thing to have). I feel great now and can eat basically anything I want without heartburn or discomfort (and no antacids, thank goodness). From the first day I met Dr. Lamp, I've always thought of him as a genius . . . he's extremely knowledgeable (so much knowledge, it's a wonder his head doesn't explode), very personable, and caring. I'm so glad I found The Roselle Center for Healing and, especially, Dr. Lamp!! All of the staff - including office staff - are skilled, compassionate, and helpful. I highly recommend the Roselle Center for those seeking healing and growth in wellness.",
  },
  {
    name: "Sophia D., 5-Star Google+ Review",
    text: "I am extremely grateful to be under the care of Dr.Lamp and Sue Roselle! Dr.Lamp has helped me immensely in recovering from a multitude of injuries, from which I am steadily getting back on my feet, and him and Sue have guided me through a methylation process & nutrition regimen that has drastically improved my once debilitating menstrual cycle and low energy / fatigue. In just a few months of their care, I now experience close to no menstrual discomfort and my energy levels are steady thanks to their guidance regarding a diet that works best for my particular needs. I have had negative experiences with other doctors in the past and am extremely grateful to receive very holistic, non-pharmaceutical help from them. They are extremely knowledgeable in addition to being very caring and compassionate as I share my journey with them. I feel very taken care of and loved in this place. The staff are all very friendly as well, it is a joy to be in the Roselle Center altogether. Blessed to have found this place!",
  },
  {
    name: "JB G., 5-Star Google+ Review",
    text: "Dr. Lamp is the best doctor have ever had. He has tremendous knowledge and cares so much for his patients. So fortunate to have found him and to gain health for me and my family. Also, Dr. Zhang is a very talented acupuncturist- I believe in the ability of acupuncture to do wonders to the body's healing.",
  },
  {
    name: "Jean B., 5-Star Google+ Review",
    text: "Dr. Lamp is awesome! He addresses my issues, brings a lot of passion to what he does and is an encyclopedia of information. I think everyone would do well to see him but hope they don't so I can continue to get on his schedule. Dr. Zhang is a very talented acupuncturist who helped me overcome health challenges -- highly recommended!",
  },
  {
    name: "Layla R., 5-Star Google+ Review",
    text: "I cannot say enough good things about this place. It's a beautiful and peaceful office as soon as you walk through the door. Dr. Pina was so informative and explained things so thoroughly. I was happy to come back for multiple acupuncture sessions. They were relaxing and everyone was so kind. She was so nice...I love this center!",
  },
  {
    name: "Sandra E., Fairfax, VA",
    text: "I highly recommend the Roselle Center for Healing for anyone with a chronic disease or seeking to improve their health. After meeting Dr. Tom Roselle, DC at a Town Hall meeting, I made an appointment for a spinal cord/brain injury that resulted in Autonomic Dysfunction (POTS). For the last ten years, I was fainting/passing out many times a day, had liable blood pressure, gastroparesis, neuropathy and severe pain. My first appointment was with Dr. Tom Roselle, DC. His understanding of dysfunction of the body and its causes are exceptional. He took the time that was needed, explained the diagnosis and treatment plan in detail. I also saw Dr. Scott Lamp, Sue Roselle for nutrition, and Dr. Stephanie Pina for acupuncture-all very knowledgeable. The staff is welcoming and professional. The waiting room is calm and comfortable. My health has significantly improved because of the Roselle Center for Healing. I was bedridden. I no longer pass out. I needed IV's and now I can eat and enjoy food. I used a walker and now I walk unaided. This past weekend, I hiked four miles! My many thanks to the Roselle Center for Healing-you have changed my life!",
  },
  {
    name: "Personal Training and Pilates Staff LIFETIME Fitness, Reston, VA",
    text: "Thank you for facilitating Dr. Browning's lecture on Postural Analysis and Muscle Testing. We are very appreciative of having him here to share his knowledge and expertise.",
  },
  {
    name: "Barbara M., Fairfax, VA - Facebook Review",
    text: "Dr. Matt Adams is taking great care of me as we work out all the kinks! Staff is helpful and I truly feel so much better!",
  },
  {
    name: "Kamran N., Arlington, VA - Yelp Review",
    text: "I have been having health issues for the past 5 years, seeing many different conventional and non-conventional doctors, and no one could give me a diagnosis, and non of their treatments worked. a friend referred me to Dr. Miller. Thank god I did, he has improved my health to almost 100%. he is very knowledgeable, most of all care to get to the root of the problem, professional, honest. I cant say enough about him. I have referred multiple people to him and all have thanked me for it, and all have gotten great result. I am a health care provider and I have referred my patients to him also. definitely recommend him.",
  },
  {
    name: "Jessica G., Reston, VA - Yelp Review",
    text: "I originally came in due to my shoulder and back area hurting so much I couldn't even brush my hair. My doctor is great at what he does! While my shoulder wasn't 100% that first visit, I was able to bend in the ways needed to brush my hair AND turn my head without wanting to cry out in pain. He really helped alleviate my pain AND restore movement without the use of pharmaceuticals. If you want to take a more natural and holistic approach to your health care, I definitely recommend coming here. Another plus to the Roselle Center is the office staff. The ladies are pleasant and professional. I have had to deal with rude office staff nearly everywhere else. Bonus to the Roselle Center - aesthetically pleasing care and treatment.",
  },
  {
    name: "Shad M., Bethesda, MD - Yelp Review",
    text: "I followed my chiropractor here from his previous practice. Although, it's a bit of a hike to get here from where I live, I cannot imagine going to a different person. Dr. Brice Miller is amazing. My mom recommended I go to him a few years ago, and since then many of my family and friends have seen him. He's helped me with lower back issues, my sprained ankle, skin issues, digestion, and many other things you wouldn't naturally think a chiropractor can help with. I feel great every time I leave his sessions.",
  },
  {
    name: "Natalya A., Washington, DC - Facebook Review",
    text: "Great company with amazing doctors and staff. Thank you Dr. B for fixing my back.",
  },
  {
    name: "Tara H., Katherine L., and the entire Personal Training and Pilates Staff LIFETIME Fitness Reston, VA",
    text: "Thank you for facilitating Dr. Browning's lecture on Postural Analysis and Muscle Testing. We are very appreciative of having him here to share his knowledge and expertise.",
  },
  {
    name: "Martha M., Patient Since 2010",
    text: "The Roselle Center For Healing doctors know what they are doing and the staff is very professional. I have been their patient for four years and highly recommend them. They are the best!!",
  },
  {
    name: "David S., Patient Since 2013",
    text: "Personal, comprehensive health review and follow-up treatments carefully explained by doctors each step of the process is the main reason I choose to continue with treatment at the Roselle Center for Healing.",
  },
  {
    name: "Mark A., Patient Since 2013",
    text: "I have been working with Dr. Roselle and his associates for several months now. I came in seeking relief from several chronic conditions that have hampered my life, including sleep problems, asthma, etc. In the past, I have been disappointed with the medical profession's tendency to treat symptoms, rather than addressing the overall health of the individual. At the Roselle Center, I've found all of the healing professionals to remain true to the integrative nature of their practice, working to restore balance and vitality to the whole body. I've been kept apprised of, and received thoughtful answers to any questions regarding the contribution of every aspect of my care. And I'm very happy to say that I'm seeing improvement in a number of areas of concern, and will continue my work with the Center staff to seek additional healing. All of the staff - including office staff - are skilled, compassionate, and helpful. I highly recommend the Roselle Center for those seeking healing and growth in wellness.",
  },
  {
    name: "Spencerita M., Patient Since 2012",
    text: "I started coming to the center in January. I got the feeling at first that I was in a mill that would do what they needed to do, take my money and say good bye. Over the months as my mind has cleared I can see that there is improvement. I still can't drive my car, can't walk but I feel better. My goals are to drive myself to the Center and to stop having to wear incontinence supplies. To date tat has not happened but there is hope.",
  },
  {
    name: "Andrew C., Fairfax, Virginia",
    text: "I've battled knee problems for over 20 years through surgery and a variety of braces. After just a few sessions with Dr. Adams, my knees feel better than they have since the 1980's. They no longer \"click\", and I have a much broader range of motion than has been possible for many years.",
  },
  {
    name: "Angela H., Fairfax, Virginia",
    text: "I slept wrong over the weekend and my neck was hurting really bad. I called at 6:40 am and the center gave me an appointment for 7:30 am. Dr. Adams adjusted my neck and suggested ultrasound that Natalie administered expertly. I feel much better than I did when I arrived this morning. Before I left home, I was very uncomfortable and I screamed because of the pain I felt in my neck. I couldn't do what I normally do this morning. I really appreciate Roselle Healing Center!",
  },
  {
    name: "Charles D., Washington D.C.",
    text: "My wife has been seeing Dr. Roselle on a regular basis for over 11 years. As with every appointment my wife had had at the Roselle Center, it went well. The office staff is always cordial and accommodating. For Wednesday's appointment, my wife saw Dr. Poe as her chiropractor and Stephanie for acupuncture. Dr. Poe and Stephanie are very friendly in a family like manner.",
  },
  {
    name: "Julia S., Fairfax, VA",
    text: "Dr. Roselle is my Chiropractor. He is excellent, and he has helped me a whole lot. He stays up to date, he teaches, and he actually has a radio show. He has conferences in the spring and in the fall, where he invites new people as well as the old people, and he has really helped me out tremendously. He has a marvelous sense of humor, his office is very nice, and he is just fantastic, I highly recommend him.",
  },
  {
    name: "Gary W., Herndon, VA",
    text: "I am an adult over 50 who has suffered from migraines my entire life. I went in after visiting a booth. Within 6 months I was migraine free. I have felt healthier and had more energy. Very professional and I have never had a doctor ask so many questions before determining what the problem is and how they are going to treat it. They ask everything and get right down to the details. They are not just concerned with just one issues. If I go in and say that my back hurts they will ask me how I have been walking, how I have been sleeping, and what I have been eating. They treat the whole body, not just the symptoms. They rarely do pills, they have organic supplements.",
  },
  {
    name: "Jeffrey M., Washington, D.C. - Yelp Review",
    text: "I go to Dr. Scott Lamp, DC and I love this place. He treats the patient as a whole and doesn't try to sell anything you don't need. I highly recommend! The staff is super nice and amazing too.",
  },
  {
    name: "Jo-Ann S., Reston, VA",
    text: "I have had issues with my neck and upper back for several years. I also suffer from headaches due to TMJ. Dr. Browning used chiropractic and kinesiology to help me. I started to go to Dr. Browning over a year ago. At first, I went a few times per week but that quickly changed as I felt better. I now go one time per month. Dr. Browning is the only chiropractor has really helped me. He listens well and works on the areas that are hurting. Chiropractic is not an overnight success. It took many visits to work through my issues, but now I just go for monthly adjustments.",
  },
  {
    name: "Billie & Reagan D., Facebook Review",
    text: "Congratulations Dr. Tom and staff. Our lives are much richer because of you and your knowledge, skill and compassion.",
  },
  {
    name: "Lawrence S., Google+ Review",
    text: "I am a referring physician and patient of Dr. Harlan Browning. I have referred scores of patients and they are unanimously thrilled with him and excellent results they have achieved. Dr. Browning is a leader in his field and a fine person. He is a D.C. of the highest level.",
  },
  {
    name: "Rebecca F., Montgomery Village, MD - Yelp Review",
    text: "I have been going to Dr. Lamp for a few months now, after having an endoscopy and discovering that I had Barrett's. I did not want to just take meds and put out the fire, but I wanted a contribution to help my body heal itself. That is what I am experiencing with Dr. Lamp. I needed my adrenals and thyroid addressed as well, which are taken into consideration one thing at a time, which to me makes good sense. That front desk staff and support staff are so cordial and willing to help in every way possible to make the process comfortable and understandable.",
  },
  {
    name: "Martha M., Facebook Review",
    text: "Coming to Roselle Center for Healing changed my health and my life! I've been a patient for more than two years. You are the best!",
  },
  {
    name: "Spencer M., Written Review",
    text: "I started coming to the center in January. I got the feeling at first that I was in a mill that would do what they needed to do, take my money and say good bye. Over the months as my mind has cleared I can see that there is improvement. I still can't drive my car, can't walk but I feel better. My goals are to drive myself to the Center and to stop having to wear incontinence supplies. To date tat has not happened but there is hope.",
  },
  {
    name: "Maria S., Google+ Review",
    text: "Life changing. My treatments are very helpful and effective. Dr. Tom Roselle and his professional staff are very friendly and experienced. The office is calming and relaxing. My CMT is uniquely qualified in therapeutic, sports injury massage & diverse techniques in stress reduction...and the deep tissue massage therapy is the best massage therapy treatment I have ever had!!! I also want to point out that the center's free health lectures are very educational and informative. They help me keep proactive with my daily health and wellness.",
  },
  {
    name: "Jane A., Falls Church, VA",
    text: "I receive care frequently. I have an unusual muscle disorder and my doctor works hard with me to find treatments to help alleviate the pain. What I really appreciate is the practice as a whole; they work together so they work nutrition, massage and acupuncture with chiropractic so they combine the best of things and if something doesn't work they are willing to let go and move on the next thing. They are wonderful. I've been seeing them for two years now. It's a multidisciplinary approach. A team of professionals and they work well together. Generally, you find specialists outside not talking to each other, but these people really do work together. They refer you to other specialists within the practice and they actually pay attention. They make me feel better and the regular doctors don't. They are also very patient about explaining what they are doing and why they are doing it. They also have free health care classes for people who come there on a routine basis because they want people to understand what they are doing.",
  },
  {
    name: "Mark A., Written Review",
    text: "I have been working with Dr. Roselle and his Associates for several months now. I came in seeking relief from several chronic conditions that have hampered my life, including sleep problems, asthma, etc. In the past, I have been disappointed with the medical profession's tendency to treat symptoms, rather than addressing the overall health of the individual. At the Roselle Center, I've found all of the healing professionals to remain true to the integrative nature of their practice, working to restore balance and vitality to the whole body. I've been kept apprised of, and received thoughtful answers to any questions regarding the contribution of every aspect of my care. And I'm very happy to say that I'm seeing improvement in a number of areas of concern, and will continue my work with the Center staff to seek additional healing. All of the staff - including office staff - are skilled, compassionate, and helpful. I highly recommend the Roselle Center for those seeking healing and growth in wellness.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Testimonials · Fairfax, VA"
            title="Real stories from real patients."
            subtitle="We value our patients' experience at Roselle Center for Healing. Read what they have to say about their journey to better health with us."
            crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us.html" }, { label: "Testimonials" }]}
            image="/services/testimonials.jpg"
            imageAlt="Patient testimonials."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Read Google Reviews", href: "https://www.google.com/maps/place/Roselle+Center+for+Healing" }}
          />

          <ContentBlock
            eyebrow="Share your experience"
            title="Tell us about your visit."
            body="If you are currently a patient, please feel free to complete our Client Experience Questionnaire. It's in Adobe Acrobat format and requires the free Acrobat Reader to view."
          >
            <div className="mt-s6 flex flex-wrap gap-s4">
              <a href="https://www.rosellecare.com/storage/app/media/_SHARED/Client_Experience_Questionnaire.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-accent underline underline-offset-4 hover:text-fg transition-colors">Download &amp; print questionnaire</a>
            </div>
          </ContentBlock>

          {/* ── Testimonials Grid ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-3 gap-s6 max-lg:grid-cols-2 max-md:grid-cols-1">
                {TESTIMONIALS.map((t, i) => (
                  <RevealSection key={i} delay={Math.min((i % 3) * 0.08, 0.16)}>
                    <div className="h-full flex flex-col bg-card-bg rounded-2xl p-s6 shadow-[0_2px_20px_rgba(42,41,40,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(42,41,40,0.1)]">
                      <div className="flex items-center gap-3 mb-s4">
                        <div className="w-10 h-10 rounded-full bg-fg flex items-center justify-center shrink-0">
                          <span className="text-bg text-sm font-semibold font-serif">{t.name.charAt(0)}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-fg leading-snug font-sans">{t.name}</h3>
                      </div>
                      <div className="flex gap-0.5 mb-s3">
                        {[...Array(5)].map((_, s) => (
                          <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>
                        &ldquo;{t.text.length > 280 ? t.text.slice(0, 280).trimEnd() + "..." : t.text}&rdquo;
                      </p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Share your experience" title="We'd love to hear from you." body="Contact Roselle Center for Healing in Fairfax, VA to share your experience or schedule an appointment today." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />


          <Contact />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
