import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENTS = ["s.mcfarland@rosellecare.com", "Russ@rosellecare.com"];
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Roselle Center <onboarding@resend.dev>";

type Payload = {
  formType?: string;
  fields?: Record<string, unknown>;
  meta?: Record<string, unknown>;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stringify(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.map(stringify).join(", ");
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
}

function renderHtml(formType: string, fields: Record<string, unknown>, meta: Record<string, unknown>) {
  const rows = Object.entries(fields)
    .filter(([, v]) => stringify(v).trim() !== "")
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;font-weight:600;vertical-align:top;width:240px;">${escapeHtml(k)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e5e5;white-space:pre-wrap;">${escapeHtml(stringify(v))}</td>
        </tr>`,
    )
    .join("");

  const metaRows = Object.entries(meta)
    .map(
      ([k, v]) => `<tr>
        <td style="padding:6px 12px;border:1px solid #e5e5e5;background:#fafafa;font-size:12px;color:#555;">${escapeHtml(k)}</td>
        <td style="padding:6px 12px;border:1px solid #e5e5e5;font-size:12px;color:#555;">${escapeHtml(stringify(v))}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#222;">
    <h2 style="margin:0 0 16px;color:#0a1628;">New submission: ${escapeHtml(formType)}</h2>
    <p style="margin:0 0 16px;color:#555;">A new form was submitted on rosellecare.com.</p>
    <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows || `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;color:#888;">(no fields submitted)</td></tr>`}</table>
    ${metaRows ? `<h3 style="margin:24px 0 8px;color:#0a1628;font-size:14px;">Meta</h3><table style="border-collapse:collapse;width:100%;max-width:720px;">${metaRows}</table>` : ""}
  </body></html>`;
}

function renderText(formType: string, fields: Record<string, unknown>, meta: Record<string, unknown>) {
  const lines = [`New submission: ${formType}`, ""];
  for (const [k, v] of Object.entries(fields)) {
    const sv = stringify(v);
    if (sv.trim() === "") continue;
    lines.push(`${k}: ${sv}`);
  }
  if (Object.keys(meta).length) {
    lines.push("", "-- Meta --");
    for (const [k, v] of Object.entries(meta)) lines.push(`${k}: ${stringify(v)}`);
  }
  return lines.join("\n");
}

function pickReplyTo(fields: Record<string, unknown>): string | undefined {
  for (const [k, v] of Object.entries(fields)) {
    if (typeof v !== "string") continue;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return v.trim();
    if (/email/i.test(k) && v.trim()) return v.trim();
  }
  return undefined;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 });
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const formType = (body.formType || "Contact Form").toString().slice(0, 120);
  const fields = body.fields && typeof body.fields === "object" ? body.fields : {};
  const meta: Record<string, unknown> = {
    submittedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") || "",
    referer: req.headers.get("referer") || "",
    ...(body.meta || {}),
  };

  const replyTo = pickReplyTo(fields);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENTS,
      subject: `[Roselle] ${formType}`,
      html: renderHtml(formType, fields, meta),
      text: renderText(formType, fields, meta),
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception", err);
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 });
  }
}
