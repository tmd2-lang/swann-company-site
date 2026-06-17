import { useState, type FormEvent } from "react";
import { motion } from "motion/react";

export type LeakReviewFormData = {
  name: string;
  email: string;
  practice: string;
  website: string;
  consultsPerMonth: string;
  leaking: string;
  budget: string;
  timeline: string;
};

type ContactFormProps = {
  className?: string;
  tone?: "light" | "dark";
};

const BUDGET_OPTIONS = ["", "Under $8k", "$8k–$12k", "$12k–$20k", "$20k+"];
const TIMELINE_OPTIONS = ["", "ASAP", "1–2 months", "3+ months", "Just researching"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ className = "", tone = "light" }: ContactFormProps) {
  const [form, setForm] = useState<LeakReviewFormData>({
    name: "",
    email: "",
    practice: "",
    website: "",
    consultsPerMonth: "",
    leaking: "",
    budget: "",
    timeline: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dark = tone === "dark";
  const labelCls = dark ? "text-eyebrow opacity-70" : "text-eyebrow text-muted-foreground";
  const inputCls = dark
    ? "mt-3 w-full bg-transparent text-lg md:text-xl text-background placeholder:text-background/35 outline-none"
    : "mt-3 w-full bg-transparent text-lg md:text-xl text-foreground placeholder:text-muted-foreground outline-none";
  const borderCls = dark ? "border-background/25" : "border-foreground/15";
  const successSub = dark ? "text-background/70" : "text-muted-foreground";

  const emailValid = EMAIL_RE.test(form.email.trim());
  const ready =
    form.name.trim().length > 0 &&
    emailValid &&
    form.practice.trim().length > 0 &&
    form.leaking.trim().length > 0;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ready || submitting) return;

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
    if (!endpoint) {
      setError("Form endpoint is not configured yet. Email hello@swannco.co and we'll respond within two business days.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          practice: form.practice.trim(),
          website: form.website.trim(),
          consultsPerMonth: form.consultsPerMonth.trim(),
          leaking: form.leaking.trim(),
          budget: form.budget,
          timeline: form.timeline,
          _subject: `Leak review · ${form.practice.trim()}`,
        }),
      });

      if (!res.ok) throw new Error("submit_failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Try again or email hello@swannco.co directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={className}>
        <p className="text-display text-3xl md:text-4xl">Thank you, {form.name.split(" ")[0] || "friend"}.</p>
        <p className={`mt-4 leading-relaxed ${successSub}`}>
          Your leak review request is in. Expect a reply within two business days.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={submit}
      className={`space-y-6 ${className}`.trim()}
      noValidate
    >
      {(
        [
          { key: "name", label: "Your name", placeholder: "Dr. Mara Lin", required: true },
          { key: "email", label: "Email", placeholder: "hello@clinic.com", type: "email", required: true },
          { key: "practice", label: "Practice / clinic name", placeholder: "Lumen Skin Studio", required: true },
          { key: "website", label: "Website URL", placeholder: "yoursite.com" },
          {
            key: "consultsPerMonth",
            label: "Roughly how many consults/bookings per month right now?",
            placeholder: "e.g. 40–60",
          },
        ] as const
      ).map(({ key, label, placeholder, type, required }) => (
        <label key={key} className={`block border-b ${borderCls} pb-4`}>
          <span className={labelCls}>
            {label}
            {required ? " *" : ""}
          </span>
          <input
            type={type ?? "text"}
            required={required}
            value={form[key]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            placeholder={placeholder}
            className={inputCls}
          />
        </label>
      ))}

      <label className={`block border-b ${borderCls} pb-4`}>
        <span className={labelCls}>What&apos;s the main thing you think is leaking? *</span>
        <textarea
          required
          rows={4}
          value={form.leaking}
          onChange={(e) => setForm((f) => ({ ...f, leaking: e.target.value }))}
          placeholder="Booking path, mobile friction, weak treatment pages, trust buried too low…"
          className={`${inputCls} resize-none`}
        />
      </label>

      <div className="grid gap-6 md:grid-cols-2">
        <label className={`block border-b ${borderCls} pb-4`}>
          <span className={labelCls}>Budget range (optional)</span>
          <select
            value={form.budget}
            onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
            className={`${inputCls} cursor-pointer`}
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt || "empty"} value={opt}>
                {opt || "Select…"}
              </option>
            ))}
          </select>
        </label>
        <label className={`block border-b ${borderCls} pb-4`}>
          <span className={labelCls}>Timeline (optional)</span>
          <select
            value={form.timeline}
            onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))}
            className={`${inputCls} cursor-pointer`}
          >
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt || "empty"} value={opt}>
                {opt || "Select…"}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && <p className="text-sm text-lake">{error}</p>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={!ready || submitting}
          data-cursor="hover"
          className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-opacity hover:bg-lake disabled:opacity-40"
        >
          {submitting ? "Sending…" : "Book a leak review"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </motion.form>
  );
}
