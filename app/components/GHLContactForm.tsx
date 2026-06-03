import Script from "next/script";

type GHLContactFormProps = {
  /** Iframe height in px. Default 720. */
  height?: number;
  /** Optional eyebrow label above the form. */
  eyebrow?: string;
  /** Optional headline above the form. */
  title?: string;
  /** Optional subtitle/description. */
  subtitle?: string;
  /** Visual variant for the surrounding card. */
  variant?: "dark" | "light";
  /** Extra classes for the outer wrapper. */
  className?: string;
};

/**
 * Embedded GoHighLevel "Contact Form" used across the site (except the
 * dedicated Appointment Request page, which has its own form).
 */
export default function GHLContactForm({
  height = 720,
  eyebrow,
  title,
  subtitle,
  variant = "dark",
  className = "",
}: GHLContactFormProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`p-s6 rounded-2xl max-sm:p-s5 relative overflow-hidden ${className}`}
      style={
        isDark
          ? {
              background: "#091321",
              boxShadow:
                "0 24px 60px rgba(10,22,40,0.18), 0 0 0 1px rgba(245,244,239,0.06)",
            }
          : {
              background: "#ffffff",
              border: "1px solid rgba(42,41,40,0.08)",
              boxShadow: "0 24px 60px rgba(10,22,40,0.08)",
            }
      }
    >
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-30%",
          right: "-20%",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(198,177,128,0.18) 0%, transparent 65%)",
        }}
      />
      <div className="relative">
        {(eyebrow || title || subtitle) && (
          <div className="mb-s5">
            {eyebrow && (
              <div className="flex items-center gap-3 mb-s2">
                <span
                  className="w-6 h-px"
                  style={{ background: "rgba(198,177,128,0.6)" }}
                />
                <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium">
                  {eyebrow}
                </p>
              </div>
            )}
            {title && (
              <h3
                className={`text-fluid-2xl tracking-tight leading-tight ${
                  isDark ? "text-bg" : "text-fg"
                }`}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                className="mt-s3 text-sm leading-relaxed max-w-[60ch]"
                style={{
                  color: isDark
                    ? "rgba(245,244,239,0.65)"
                    : "rgba(42,41,40,0.7)",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#f5f4ef",
            border: "1px solid rgba(198,177,128,0.25)",
            boxShadow:
              "0 12px 30px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/opdAHE0wiqjAcA3BG5XU"
            style={{
              width: "100%",
              height: `${height}px`,
              border: "none",
              borderRadius: "16px",
              display: "block",
            }}
            id="inline-opdAHE0wiqjAcA3BG5XU"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Form"
            data-layout-iframe-id="inline-opdAHE0wiqjAcA3BG5XU"
            data-form-id="opdAHE0wiqjAcA3BG5XU"
            title="Contact Form"
          />
        </div>
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
