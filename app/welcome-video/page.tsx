import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Welcome Video | Roselle Center for Healing",
  description:
    "Watch our welcome video to learn about Roselle Center for Healing — our team, philosophy, and what to expect at your first visit.",
  alternates: { canonical: "/welcome-video" },
};

export default function WelcomeVideoPage() {
  return (
    <>
      <Nav />
      <main className="relative z-1 bg-bg">
        <section className="pt-[calc(var(--spacing-nav-h)+2.5rem)] pb-s10 max-md:pt-[calc(var(--spacing-nav-h)+1.5rem)] max-md:pb-s8">
          <div className="w-full max-w-[1040px] mx-auto px-s6 max-md:px-s4">
            <div className="mb-s5 max-md:mb-s4 text-center">
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-s2"
                style={{ color: "#6b5414" }}
              >
                New Patient Experience
              </p>
              <h1
                className="font-semibold leading-tight"
                style={{
                  color: "#091321",
                  fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
                }}
              >
                Welcome to Roselle Center for Healing
              </h1>
            </div>

            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                aspectRatio: "16 / 9",
                background: "#091321",
                boxShadow:
                  "0 30px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(198,177,128,0.18)",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/157681369?title=0&byline=0&portrait=0"
                title="Welcome to Roselle Center for Healing"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>

            <p
              className="mt-s3 text-center text-xs"
              style={{ color: "rgba(42,41,40,0.55)" }}
            >
              Video hosted on Vimeo ·{" "}
              <a
                href="https://vimeo.com/157681369"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent"
              >
                Open on Vimeo
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
