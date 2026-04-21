"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";

/* ── Types ── */
type SubLink = { label: string; href: string; children?: SubLink[] };
type NavLink = { label: string; href: string; children?: SubLink[] };
type NavEntry = { label: string; href: string; links?: NavLink[] };

/* ── Nav Data — matches live rosellecare.com sitemap exactly ── */
const NAV: NavEntry[] = [
  {
    label: "Home",
    href: "/",
    links: [
      { label: "Center Hours", href: "/about-us/center-hours.html" },
      { label: "Directions", href: "/contact-us/directions.html" },
    ],
  },
  {
    label: "New Patient Experience",
    href: "/new-patient-center.html",
    links: [
      { label: "Purpose & Mission", href: "/purpose-a-misson" },
      { label: "New Patient Center", href: "/new-patient-center.html" },
      { label: "Online Forms", href: "/online-forms.html" },
      { label: "Payment Options", href: "/new-patient-center/payment-options.html" },
      { label: "FAQ about Medicare", href: "/new-patient-information/faq-about-medicare.html" },
    ],
  },
  {
    label: "About",
    href: "/about-us.html",
    links: [
      { label: "Dr. Tom Roselle, DC", href: "https://www.drtomroselle.com/" },
      { label: "Doctors & Specialists", href: "/about-us/meet-the-doctors---therapists.html" },
      { label: "Testimonials", href: "/testimonials.html" },
    ],
  },
  {
    label: "Services",
    href: "/services.html",
    links: [
      { label: "Allergy Relief", href: "/allergy-relief" },
      { label: "Chronic Pain", href: "/chronic-pain" },
      {
        label: "Chiropractic",
        href: "/services/chiropractic.html",
        children: [
          { label: "Chiropractic Adjustments", href: "/chiropractic-adjustments" },
          { label: "Chiropractic Adjustments FAQs", href: "/chiropractic-adjustments-faqs" },
        ],
      },
      { label: "Sports Medicine & Rehabilitation", href: "/sports-medicine" },
      {
        label: "Acupuncture",
        href: "/services/acupuncture.html",
        children: [
          { label: "Acupuncture FAQs", href: "/acupuncture-faqs" },
          { label: "Benefits of Acupuncture", href: "/benefits-of-acupuncture" },
        ],
      },
      {
        label: "Applied Kinesiology",
        href: "/services/applied-kinesiology.html",
        children: [
          { label: "Kinesiology FAQs", href: "/kinesiology-faqs" },
        ],
      },
      { label: "Functional Medicine", href: "/functional-medicine" },
      { label: "Nutrition", href: "/services/nutrition.html" },
      { label: "Lower Back Pain", href: "/lower-back-pain" },
      { label: "Massage Therapy", href: "/services/massage-therapy.html" },
      { label: "Prenatal Chiropractic Care", href: "/prenatal-chiropractic-care" },
      { label: "Prenatal Chiropractic", href: "/prenatal-chiropractic" },
      { label: "Sciatica Treatment", href: "/sciatica-treatment" },
      { label: "Ultra Sound", href: "/ultra-sound" },
      { label: "Webster Technique", href: "/webster-technique" },
    ],
  },
  {
    label: "Health Education",
    href: "/education-lectures.html",
    links: [
      { label: "Health Care Orientation", href: "/health-care-orientation" },
      { label: "Teleworking: Ergonomics Survival Guide", href: "/teleworking-ergonomics-survival-guide" },
      { label: "Thyroid Assessment", href: "/thyroid-assessment" },
      { label: "Spine Simulator", href: "/spine-simulator.html" },
    ],
  },
  { label: "Ageless Health Store", href: "/istore" },
  {
    label: "Contact",
    href: "/contact",
    links: [
      { label: "Contact a Staff Member Directly", href: "/contact-staff-member.html" },
      { label: "Patient Feedback", href: "/contact-us/patient-feedback.html" },
    ],
  },
  {
    label: "Latest News",
    href: "/blog",
    links: [
      {
        label: "Community Content",
        href: "/articles/general",
        children: [
          {
            label: "About Chiropractic Care",
            href: "/articles/general/category/39542",
            children: [
              { label: "What is Chiropractic", href: "/articles/general/category/40985" },
              { label: "How Does it Work", href: "/articles/general/category/40986" },
              { label: "Who is Chiropractic For", href: "/articles/general/category/40988" },
              { label: "Vertebral Subluxation", href: "/articles/general/category/40989" },
              { label: "Wellness Resources", href: "/articles/general/category/40987" },
            ],
          },
          {
            label: "Common Conditions Treated",
            href: "/articles/general/category/39539",
            children: [
              { label: "Auto Accident Injuries", href: "/articles/general/category/40897" },
              { label: "Back and Shoulder Pain", href: "/articles/general/category/40996" },
              { label: "Body Pain", href: "/articles/general/category/40997" },
              { label: "Chronic Condition Relief", href: "/articles/general/category/40999" },
              { label: "Conditions Affecting Women", href: "/articles/general/category/40993" },
              { label: "Headaches", href: "/articles/general/category/40915" },
              { label: "Herniated Discs", href: "/articles/general/category/40998" },
              { label: "Improved Health", href: "/articles/general/category/41000" },
              { label: "Pediatric Ailments", href: "/articles/general/category/40991" },
              { label: "Repetitive Use Injuries", href: "/articles/general/category/40994" },
              { label: "Respiratory Function", href: "/articles/general/category/40992" },
            ],
          },
          {
            label: "Health & Wellness",
            href: "/articles/general/category/64024",
            children: [
              { label: "Healthy Thinking", href: "/articles/general/category/39628" },
              { label: "Life in Motion", href: "/articles/general/category/39543" },
              { label: "Wellness Lifestyle Tips", href: "/articles/general/category/39632" },
              { label: "Wellness Essentials", href: "/articles/general/category/39634" },
              { label: "Wellness Perspectives", href: "/articles/general/category/39631" },
              { label: "Get Positive", href: "/articles/general/category/39629" },
              { label: "Relaxation Techniques", href: "/articles/general/category/39630" },
              { label: "Treat Yourself Well", href: "/articles/general/category/40977" },
              { label: "Treat Others Well", href: "/articles/general/category/40978" },
              { label: "Eat Well", href: "/articles/general/category/40979" },
              { label: "At Home", href: "/articles/general/category/39639" },
              { label: "At Work", href: "/articles/general/category/39635" },
              { label: "Exercise", href: "/articles/general/category/39636" },
              { label: "Nutrition", href: "/articles/general/category/39637" },
              { label: "What You Wear", href: "/articles/general/category/39638" },
              { label: "Mental", href: "/articles/general/category/40981" },
              { label: "Spiritual", href: "/articles/general/category/40983" },
              { label: "Social", href: "/articles/general/category/40982" },
              { label: "Physical", href: "/articles/general/category/40980" },
            ],
          },
          {
            label: "Therapies & Techniques",
            href: "/articles/general/category/64025",
            children: [
              { label: "Techniques", href: "/articles/general/category/41001" },
              { label: "Therapies", href: "/articles/general/category/41002" },
            ],
          },
          {
            label: "Newsletter Library",
            href: "/articles/general/category/39807",
            children: [
              { label: "Back, Body & Joint Pain", href: "/articles/general/category/41052" },
              { label: "Healthy Tips", href: "/articles/general/category/41045" },
              { label: "Exercise & Fitness", href: "/articles/general/category/41046" },
              { label: "Injury Rehab & Prevention", href: "/articles/general/category/41057" },
              { label: "Kid's Health", href: "/articles/general/category/41043" },
              { label: "Illness Prevention", href: "/articles/general/category/41053" },
              { label: "Chronic Conditions", href: "/articles/general/category/41048" },
              { label: "Nutrition & Healthy Eating", href: "/articles/general/category/41042" },
              { label: "Breaking Bad Habits", href: "/articles/general/category/41056" },
              { label: "Senior Health", href: "/articles/general/category/41051" },
              { label: "Weight Loss", href: "/articles/general/category/41058" },
              { label: "Pregnancy & Parenting", href: "/articles/general/category/41044" },
              { label: "Wellness", href: "/articles/general/category/41072" },
              { label: "Mind-Body Connection", href: "/articles/general/category/41047" },
              { label: "Stress & Anxiety", href: "/articles/general/category/41049" },
              { label: "Life-Work Balance", href: "/articles/general/category/41055" },
              { label: "Staying Young", href: "/articles/general/category/41050" },
              { label: "Staying Motivated", href: "/articles/general/category/41054" },
            ],
          },
          { label: "Wellness4Kids", href: "/articles/general/category/39627" },
        ],
      },
    ],
  },
  {
    label: "More",
    href: "#",
    links: [
      { label: "Preferred Providers", href: "/about/preferred-providers.html" },
      { label: "Special Offers", href: "/special-offer.html" },
      {
        label: "Where is Your Pain?",
        href: "/conditions-treated",
        children: [
          { label: "Back Pain", href: "/back-pain" },
          { label: "Back Pain FAQs", href: "/back-pain-faqs" },
          { label: "Fibromyalgia", href: "/fibromyalgia" },
          { label: "Fibromyalgia FAQs", href: "/fibromyalgia-faqs" },
          { label: "Integrative Health", href: "/integrative-health" },
          { label: "Knee Pain", href: "/knee-pain" },
          { label: "Lower Back Pain FAQs", href: "/lower-back-pain-faqs" },
          { label: "Muscle Strains & Sprains", href: "/muscle-strains-a-sprains" },
          { label: "Neck Pain", href: "/neck-pain" },
          { label: "Neck Pain FAQs", href: "/neck-pain-faqs" },
          { label: "Rotator Cuff", href: "/rotator-cuff" },
          { label: "Sciatica", href: "/sciatica" },
          { label: "Shoulder Pain", href: "/shoulder-pain" },
          { label: "Whiplash", href: "/whiplash" },
        ],
      },
    ],
  },
];

/* ── Animation variants ── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: { opacity: 0, y: -4, scale: 0.97, transition: { duration: 0.15 } },
};

/* ── Dropdown Link (with hover flyout sub-menu via portal) ── */
function DropdownLink({ link, index }: { link: NavLink; index: number }) {
  const [subOpen, setSubOpen] = useState(false);
  const subTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number; side: "right" | "left" }>({ top: 0, left: 0, side: "right" });
  const [mounted, setMounted] = useState(false);
  const hasChildren = link.children && link.children.length > 0;
  const isExternal = link.href.startsWith("http");

  useEffect(() => { setMounted(true); }, []);

  const showSub = () => {
    if (subTimer.current) clearTimeout(subTimer.current);
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      const flyoutW = 240;
      if (window.innerWidth - rect.right >= flyoutW) {
        setPos({ top: rect.top, left: rect.right, side: "right" });
      } else {
        setPos({ top: rect.top, left: rect.left - flyoutW, side: "left" });
      }
    }
    setSubOpen(true);
  };
  const hideSub = () => {
    subTimer.current = setTimeout(() => setSubOpen(false), 150);
  };

  return (
    <div
      ref={rowRef}
      onMouseEnter={hasChildren ? showSub : undefined}
      onMouseLeave={hasChildren ? hideSub : undefined}
    >
      <motion.a
        href={link.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl group"
        style={{ color: "rgba(245,244,239,0.7)" }}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: index * 0.025,
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          backgroundColor: "rgba(245,244,239,0.07)",
          color: "rgba(245,244,239,1)",
        }}
      >
        <span className="text-sm font-medium">{link.label}</span>
        {hasChildren ? (
          <span className="text-accent text-xs leading-none">›</span>
        ) : (
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xs">
            {isExternal ? "↗" : "→"}
          </span>
        )}
      </motion.a>

      {/* Portal flyout — rendered at document.body so no parent overflow clips it */}
      {hasChildren && mounted && createPortal(
        <AnimatePresence>
          {subOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              style={{
                position: "fixed",
                top: pos.top,
                left: pos.left,
                width: 240,
                zIndex: 9999,
              }}
              onMouseEnter={showSub}
              onMouseLeave={hideSub}
            >
              <div
                className="shadow-[0_16px_40px_-4px_rgba(0,0,0,0.4)]"
                style={{
                  background: "var(--color-fg)",
                  borderRadius: pos.side === "right" ? "0 12px 12px 0" : "12px 0 0 12px",
                }}
              >
                <div className="p-2 max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain">
                  {link.children!.map((child) => (
                    <SubFlyoutLink key={child.label} item={child} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

/* ── Recursive sub-flyout link (handles deep nesting in flyouts) ── */
function SubFlyoutLink({ item }: { item: SubLink }) {
  const [subOpen, setSubOpen] = useState(false);
  const subTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number; side: "right" | "left" }>({ top: 0, left: 0, side: "right" });
  const [mounted, setMounted] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => { setMounted(true); }, []);

  const showSub = () => {
    if (subTimer.current) clearTimeout(subTimer.current);
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      const flyoutW = 240;
      if (window.innerWidth - rect.right >= flyoutW) {
        setPos({ top: rect.top, left: rect.right, side: "right" });
      } else {
        setPos({ top: rect.top, left: rect.left - flyoutW, side: "left" });
      }
    }
    setSubOpen(true);
  };
  const hideSub = () => {
    subTimer.current = setTimeout(() => setSubOpen(false), 150);
  };

  return (
    <div
      ref={rowRef}
      onMouseEnter={hasChildren ? showSub : undefined}
      onMouseLeave={hasChildren ? hideSub : undefined}
    >
      <a
        href={item.href}
        className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl group hover:bg-[rgba(245,244,239,0.07)] transition-colors"
        style={{ color: "rgba(245,244,239,0.7)" }}
      >
        <span className="text-sm font-medium group-hover:text-bg transition-colors">{item.label}</span>
        {hasChildren ? (
          <span className="text-accent text-xs leading-none">›</span>
        ) : (
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xs">→</span>
        )}
      </a>

      {hasChildren && mounted && createPortal(
        <AnimatePresence>
          {subOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              style={{
                position: "fixed",
                top: pos.top,
                left: pos.left,
                width: 240,
                zIndex: 10000,
              }}
              onMouseEnter={showSub}
              onMouseLeave={hideSub}
            >
              <div
                className="shadow-[0_16px_40px_-4px_rgba(0,0,0,0.4)]"
                style={{
                  background: "var(--color-fg)",
                  borderRadius: pos.side === "right" ? "0 12px 12px 0" : "12px 0 0 12px",
                }}
              >
                <div className="p-2 max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain">
                  {item.children!.map((child) => (
                    <SubFlyoutLink key={child.label} item={child} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

/* ── Desktop Dropdown (hover-triggered) ── */
function NavDropdown({ item }: { item: NavEntry }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  const isMega = item.links && item.links.length > 8;

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <a
        href={item.href}
        className="nav-link flex items-center gap-1"
        onClick={(e) => {
          if (!open) {
            e.preventDefault();
            show();
          }
        }}
      >
        {item.label}
        <motion.svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ opacity: 0.45 }}
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className={`absolute top-[calc(100%+12px)] z-50 ${
              isMega
                ? "left-0 min-w-[230px]"
                : "left-1/2 -translate-x-1/2 min-w-[230px]"
            }`}
            onMouseEnter={show}
            onMouseLeave={hide}
          >
            {/* Arrow */}
            <div
              className={`absolute -top-1.5 w-3 h-3 rotate-45 rounded-sm ${
                isMega ? "left-8" : "left-1/2 -translate-x-1/2"
              }`}
              style={{ background: "var(--color-fg)" }}
            />

            <div
              data-dropdown-panel
              className="relative rounded-2xl shadow-[0_24px_60px_-8px_rgba(42,41,40,0.35)]"
              style={{
                background: "var(--color-fg)",
                border: "1px solid rgba(245,244,239,0.08)",
              }}
            >
              {/* Gold top accent */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(198,177,128,0.5), transparent)",
                }}
              />

              <div className="p-2 max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain">
                {item.links!.map((l, i) => (
                  <DropdownLink key={l.label} link={l} index={i} />
                ))}
              </div>

              <div
                className="h-px w-full"
                style={{ background: "rgba(245,244,239,0.06)" }}
              />
              <div className="px-4 py-2">
                <p
                  className="text-xs"
                  style={{ color: "rgba(245,244,239,0.25)" }}
                >
                  Roselle Center · Fairfax, VA
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Nav ── */
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(
    null,
  );
  const [mobileDeepExpanded, setMobileDeepExpanded] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-s2 left-0 right-0 z-100 animate-nav-in`}
    >
      <div
        className={`w-full max-w-[1320px] mx-auto px-s4 h-nav-h rounded-xl
                      flex items-center justify-between relative transition-all duration-300
                      ${scrolled ? "nav-frosted" : "bg-card-bg backdrop-blur-sm"}`}
      >
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 bg-transparent border-none cursor-pointer p-0 font-serif text-xl font-medium text-fg no-underline transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Roselle Center — Home"
        >
          Roselle Center
        </a>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-1 ml-4">
          {NAV.map((item) =>
            item.links ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ),
          )}
          <div className="ml-3">
            <MagneticButton
              onClick={() => window.location.href = "/appointment"}
            >
              Book Now
            </MagneticButton>
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="xl:hidden absolute top-1/2 right-s3 -translate-y-1/2
                     w-10 h-10 border-none rounded-md cursor-pointer
                     flex items-center justify-center transition-colors duration-300 z-10"
          style={{
            background: mobileOpen ? "var(--color-fg)" : "transparent",
          }}
        >
          <motion.span
            animate={
              mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }
            }
            transition={{ duration: 0.3 }}
            className="block absolute w-[40%] h-0.5 rounded-sm"
            style={{
              background: mobileOpen
                ? "var(--color-card-bg)"
                : "var(--color-fg)",
            }}
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }
            }
            transition={{ duration: 0.3 }}
            className="block absolute w-[40%] h-0.5 rounded-sm"
            style={{
              background: mobileOpen
                ? "var(--color-card-bg)"
                : "var(--color-fg)",
            }}
          />
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="nav-menu-dropdown absolute top-[calc(100%+8px)] right-0
                         w-[300px] rounded-2xl p-s3 origin-top-right z-200
                         shadow-[0_20px_40px_-8px_rgba(42,41,40,0.35)]
                         max-h-[80vh] overflow-y-auto overscroll-contain"
            >
              <p className="text-xl text-bg mb-s3 font-serif font-medium px-1">
                Menu
              </p>

              <div className="flex flex-col gap-0.5">
                {NAV.map((item) =>
                  item.links ? (
                    /* ── Accordion section ── */
                    <div key={item.label}>
                      <button
                        onClick={() => {
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label,
                          );
                          setMobileSubExpanded(null);
                          setMobileDeepExpanded(null);
                        }}
                        className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl
                                   bg-transparent border-none cursor-pointer text-left"
                        style={{ color: "rgba(245,244,239,0.85)" }}
                      >
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                        <motion.span
                          animate={{
                            rotate:
                              mobileExpanded === item.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{ opacity: 0.4, fontSize: 10 }}
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.links!.map((l) => (
                              <div key={l.label}>
                                {l.children && l.children.length > 0 ? (
                                  /* ── Sub-accordion ── */
                                  <>
                                    <button
                                      onClick={() => {
                                        setMobileSubExpanded(
                                          mobileSubExpanded === l.label
                                            ? null
                                            : l.label,
                                        );
                                        setMobileDeepExpanded(null);
                                      }}
                                      className="flex items-center justify-between w-full px-3 py-2 text-xs rounded-lg
                                                 bg-transparent border-none cursor-pointer text-left"
                                      style={{
                                        color: "rgba(245,244,239,0.65)",
                                      }}
                                    >
                                      <span>{l.label}</span>
                                      <motion.span
                                        animate={{
                                          rotate:
                                            mobileSubExpanded === l.label
                                              ? 180
                                              : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                        style={{ opacity: 0.4, fontSize: 8 }}
                                      >
                                        ▼
                                      </motion.span>
                                    </button>

                                    <AnimatePresence>
                                      {mobileSubExpanded === l.label && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.15 }}
                                          className="overflow-hidden pl-3"
                                        >
                                          <a
                                            href={l.href}
                                            className="block px-3 py-1.5 text-xs rounded-lg"
                                            style={{
                                              color: "rgba(245,244,239,0.5)",
                                            }}
                                            onClick={() =>
                                              setMobileOpen(false)
                                            }
                                          >
                                            {l.label}
                                          </a>
                                          {l.children!.map((child) =>
                                            child.children && child.children.length > 0 ? (
                                              <div key={child.label}>
                                                <button
                                                  onClick={() =>
                                                    setMobileDeepExpanded(
                                                      mobileDeepExpanded === child.label
                                                        ? null
                                                        : child.label,
                                                    )
                                                  }
                                                  className="flex items-center justify-between w-full px-3 py-1.5 text-xs rounded-lg
                                                             bg-transparent border-none cursor-pointer text-left"
                                                  style={{
                                                    color: "rgba(245,244,239,0.5)",
                                                  }}
                                                >
                                                  <span>{child.label}</span>
                                                  <motion.span
                                                    animate={{
                                                      rotate:
                                                        mobileDeepExpanded === child.label
                                                          ? 180
                                                          : 0,
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{ opacity: 0.4, fontSize: 7 }}
                                                  >
                                                    ▼
                                                  </motion.span>
                                                </button>
                                                <AnimatePresence>
                                                  {mobileDeepExpanded === child.label && (
                                                    <motion.div
                                                      initial={{ height: 0, opacity: 0 }}
                                                      animate={{ height: "auto", opacity: 1 }}
                                                      exit={{ height: 0, opacity: 0 }}
                                                      transition={{ duration: 0.15 }}
                                                      className="overflow-hidden pl-3"
                                                    >
                                                      <a
                                                        href={child.href}
                                                        className="block px-3 py-1.5 text-xs rounded-lg"
                                                        style={{ color: "rgba(245,244,239,0.4)" }}
                                                        onClick={() => setMobileOpen(false)}
                                                      >
                                                        {child.label}
                                                      </a>
                                                      {child.children!.map((deep) => (
                                                        <a
                                                          key={deep.label}
                                                          href={deep.href}
                                                          className="block px-3 py-1.5 text-xs rounded-lg"
                                                          style={{ color: "rgba(245,244,239,0.4)" }}
                                                          onClick={() => setMobileOpen(false)}
                                                        >
                                                          {deep.label}
                                                        </a>
                                                      ))}
                                                    </motion.div>
                                                  )}
                                                </AnimatePresence>
                                              </div>
                                            ) : (
                                              <a
                                                key={child.label}
                                                href={child.href}
                                                className="block px-3 py-1.5 text-xs rounded-lg"
                                                style={{
                                                  color: "rgba(245,244,239,0.5)",
                                                }}
                                                onClick={() => setMobileOpen(false)}
                                              >
                                                {child.label}
                                              </a>
                                            ),
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  /* ── Simple link ── */
                                  <a
                                    href={l.href}
                                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="block px-3 py-2 text-xs rounded-lg"
                                    style={{
                                      color: "rgba(245,244,239,0.55)",
                                    }}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {l.label}
                                  </a>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* ── Simple top-level link ── */
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2.5 rounded-xl text-sm font-medium no-underline"
                      style={{ color: "rgba(245,244,239,0.85)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>

              <div
                className="mt-s3 pt-s2"
                style={{ borderTop: "1px solid rgba(245,244,239,0.1)" }}
              >
                <a
                  href="tel:+17036987117"
                  className="text-sm no-underline"
                  style={{ color: "rgba(245,244,239,0.5)" }}
                >
                  (703) 698-7117
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
