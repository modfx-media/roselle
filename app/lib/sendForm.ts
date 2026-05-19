/**
 * Client-side helpers for submitting contact forms to /api/contact.
 * Resend delivers messages to the configured Roselle recipients.
 */

export type SubmitResult = { ok: boolean; error?: string };

export async function submitContactForm(
  formType: string,
  fields: Record<string, unknown>,
  meta?: Record<string, unknown>,
): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, fields, meta }),
    });
    const data = (await res.json().catch(() => ({}))) as SubmitResult;
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || `Request failed (${res.status}).` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Network error." };
  }
}

/**
 * Serialize an HTMLFormElement into a flat label→value map.
 * Uses the input's `name` when present; otherwise falls back to the
 * nearest <label> text within the same wrapper, then the input's
 * `placeholder` or `id`. Radios/checkboxes are aggregated.
 */
export function serializeForm(form: HTMLFormElement): Record<string, string> {
  const out = new Map<string, string[]>();
  const controls = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      "input, textarea, select",
    ),
  );

  let unnamed = 0;

  for (const el of controls) {
    if (el.disabled) continue;
    if (el instanceof HTMLInputElement) {
      if (el.type === "submit" || el.type === "button" || el.type === "reset" || el.type === "hidden") continue;
      if ((el.type === "radio" || el.type === "checkbox") && !el.checked) continue;
    }

    const raw = (el as HTMLInputElement).value ?? "";
    const value = typeof raw === "string" ? raw.trim() : String(raw);
    if (!value) continue;

    const key = resolveKey(el) || `Field ${++unnamed}`;
    const arr = out.get(key) ?? [];
    arr.push(value);
    out.set(key, arr);
  }

  const result: Record<string, string> = {};
  for (const [k, vs] of out) result[k] = vs.length > 1 ? vs.join(", ") : vs[0];
  return result;
}

function resolveKey(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string {
  if (el.name) return prettify(el.name);

  // <label for="id">
  if (el.id) {
    const lbl = el.ownerDocument.querySelector(`label[for="${cssEscape(el.id)}"]`);
    const t = lbl?.textContent?.trim();
    if (t) return cleanLabel(t);
  }

  // Wrapping label
  const wrapping = el.closest("label");
  if (wrapping) {
    const t = labelTextWithoutControl(wrapping, el);
    if (t) return cleanLabel(t);
  }

  // Nearest label inside the same field wrapper
  const wrapper = el.closest("div, fieldset, section");
  if (wrapper) {
    const lbl = wrapper.querySelector("label, span");
    const t = lbl?.textContent?.trim();
    if (t) return cleanLabel(t);
  }

  if ((el as HTMLInputElement).placeholder) return cleanLabel((el as HTMLInputElement).placeholder);
  if (el.id) return prettify(el.id);
  return "";
}

function labelTextWithoutControl(label: Element, control: Element): string {
  const clone = label.cloneNode(true) as Element;
  clone.querySelectorAll("input, textarea, select").forEach((n) => n.remove());
  return clone.textContent?.trim() || control.getAttribute("value") || "";
}

function cleanLabel(s: string): string {
  return s.replace(/\s+/g, " ").replace(/[*:]+\s*$/, "").trim();
}

function prettify(s: string): string {
  return s
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}

function cssEscape(s: string): string {
  if (typeof window !== "undefined" && (window as unknown as { CSS?: { escape?: (v: string) => string } }).CSS?.escape) {
    return (window as unknown as { CSS: { escape: (v: string) => string } }).CSS.escape(s);
  }
  return s.replace(/([\s"'\\#.:>+~*^$|?=\[\]()/])/g, "\\$1");
}
