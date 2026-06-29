import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useLang } from "@/lib/LanguageContext";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ZoujUp" },
      {
        name: "description",
        content:
          "Get in touch with the ZoujUp team. We're here to help you with your language practice journey.",
      },
    ],
  }),
  component: ContactPage,
});

type Status = "idle" | "loading" | "success" | "error";

const LANG_OPTIONS = [
  "Moroccan Arabic (Darija)",
  "French",
  "English",
  "Spanish",
  "Other",
];

const CHEVRON_SVG = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ContactPage() {
  const { t } = useLang();
  const c = t.contact;

  const [nativeLanguage, setNativeLanguage] = useState("");
  const [practiceLanguage, setPracticeLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nativeLanguage, practiceLanguage, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = Array.isArray(data.message)
          ? data.message.join(", ")
          : (data.message ?? "Something went wrong.");
        throw new Error(msg);
      }

      // API returns { ok: true, next: "..." } on success
      if (data.ok === false) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Unable to submit. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />

        <main className="pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                {c.title}{" "}
                {c.titleAccent && (
                  <span className="text-[#FFC107]">{c.titleAccent}</span>
                )}
              </h1>
              <p className="text-[#6B7280] text-lg sm:text-xl leading-relaxed">
                {c.subtitle}
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-6">
              {/* Contact Form Card */}
              <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] hover:border-[#FFC107] transition-all duration-300">
                <div className="h-12 w-12 bg-white rounded-[12px] flex items-center justify-center border border-[#E5E7EB] mb-6 shadow-sm">
                  <Mail className="h-6 w-6 text-[#FFC107]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                  {c.cardTitle}
                </h2>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  {c.cardDesc}
                </p>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-[12px] px-6 py-8 text-center">
                    <p className="text-green-800 font-bold text-lg mb-1">
                      Message sent!
                    </p>
                    <p className="text-green-700 text-sm">
                      We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Native language */}
                    <div className="relative">
                      <select
                        required
                        value={nativeLanguage}
                        onChange={(e) => setNativeLanguage(e.target.value)}
                        className="w-full appearance-none rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#FFC107] text-base cursor-pointer"
                      >
                        <option value="" disabled>
                          I speak fluently…
                        </option>
                        {LANG_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        {CHEVRON_SVG}
                      </div>
                    </div>

                    {/* Practice language */}
                    <div className="relative">
                      <select
                        required
                        value={practiceLanguage}
                        onChange={(e) => setPracticeLanguage(e.target.value)}
                        className="w-full appearance-none rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#FFC107] text-base cursor-pointer"
                      >
                        <option value="" disabled>
                          Language I want to practice…
                        </option>
                        {LANG_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        {CHEVRON_SVG}
                      </div>
                    </div>

                    {/* Email */}
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-white border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#FFC107] text-base"
                    />

                    {/* Error */}
                    {status === "error" && (
                      <p className="text-red-600 text-sm font-medium">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center rounded-[12px] bg-[#1A1A1A] px-8 py-4 text-white font-bold hover:bg-black transition-colors duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending…" : "Send message"}
                    </button>
                  </form>
                )}
              </div>

              {/* Fallback email link */}
              <p className="text-center text-sm text-[#6B7280]">
                Or email us directly at{" "}
                <a
                  href="mailto:zoujup@gmail.com"
                  className="font-semibold text-[#1A1A1A] hover:text-[#FFC107] transition-colors"
                >
                  zoujup@gmail.com
                </a>
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
