import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, TriangleAlert, UploadCloud } from "lucide-react";
import { emailjsConfig, site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_FILE_MB = 5;

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const validate = (data: FormData) => {
    const errors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) errors.name = "Full name is required.";
    if (!email) errors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
    if (!phone) errors.phone = "Phone number is required.";
    else if (!/^[+\d][\d\s-]{7,15}$/.test(phone)) errors.phone = "Enter a valid phone number.";
    if (!message) errors.message = "Please describe your requirement.";

    return errors;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);
    setFileName(null);
    if (!file) return;
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File must be smaller than ${MAX_FILE_MB}MB.`);
      e.target.value = "";
      return;
    }
    setFileName(file.name);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);

    // Honeypot: bots tend to fill every field, humans never see this one.
    if (String(data.get("company_website") || "").length > 0) {
      setStatus("success");
      return;
    }

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const configured =
      emailjsConfig.serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
      emailjsConfig.templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
      emailjsConfig.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

    if (!configured) {
      // eslint-disable-next-line no-console
      console.warn(
        "EmailJS is not configured yet — add your serviceId, templateId and publicKey in src/data/site.ts to enable live email delivery."
      );
    }

    setStatus("submitting");
    try {
      if (configured) {
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          { publicKey: emailjsConfig.publicKey }
        );
      } else {
        await new Promise((res) => setTimeout(res, 800));
      }
      setStatus("success");
      formRef.current.reset();
      setFileName(null);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Enquiry submission failed:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-accent/40 bg-accent/10 p-6 text-center sm:p-8"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
        <h3 className="mt-4 font-display text-xl text-fg">Thank you!</h3>
        <p className="mt-2 text-muted">
          Your enquiry has been received. Our team will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="w-full space-y-5">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input type="hidden" name="submitted_at" value={new Date().toLocaleString("en-IN")} />
      <input type="hidden" name="to_email" value={site.email} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <Field label="Full Name" name="name" required error={fieldErrors.name} />
        <Field label="Company Name" name="company" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <Field label="Email Address" name="email" type="email" required error={fieldErrors.email} />
        <Field label="Phone Number" name="phone" type="tel" required error={fieldErrors.phone} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <Field label="Industry" name="industry" />
        <Field label="Product / Service" name="product_service" />
      </div>

      <Field label="Project Location" name="project_location" />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">
          Requirement / Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full min-w-0 resize-y bg-base border border-border focus:border-accent px-4 py-3 text-fg placeholder:text-muted/60 outline-none transition-colors"
          placeholder="Tell us about your panel or automation requirement..."
        />
        {fieldErrors.message && <p className="mt-1.5 text-xs text-accent">{fieldErrors.message}</p>}
      </div>

      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-fg mb-2">
          Upload File <span className="text-muted font-normal">(optional, max {MAX_FILE_MB}MB)</span>
        </label>
        <label
          htmlFor="attachment"
          className="flex flex-col items-start gap-3 border border-dashed border-border px-4 py-3 cursor-pointer hover:border-accent/60 transition-colors sm:flex-row sm:items-center"
        >
          <UploadCloud className="h-5 w-5 shrink-0 text-muted" />
          <span className="w-full text-left text-sm text-muted break-words sm:truncate">
            {fileName ?? "Drawings, specifications or reference documents"}
          </span>
        </label>
        <input id="attachment" name="attachment" type="file" onChange={handleFileChange} className="hidden" />
        {fileError && <p className="mt-1.5 text-xs text-accent">{fileError}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2.5 border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-fg">
          <TriangleAlert className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
          <span>
            Something went wrong sending your enquiry. Please try again, or email us directly at{" "}
            <a href={site.emailHref} className="underline">{site.email}</a>.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 bg-[#0E5079] text-on-accent px-8 py-3.5 font-semibold hover:bg-accent-strong transition-colors disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-fg mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full min-w-0 bg-base border border-border focus:border-accent px-4 py-3 text-fg placeholder:text-muted/60 outline-none transition-colors"
      />
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  );
}
