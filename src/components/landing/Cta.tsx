import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

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
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Cta() {
  const { t } = useLang();
  const c = t.cta;

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
    <section
      id="cta"
      className="min-h-screen flex items-center justify-center bg-[#FFC107] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl relative z-10 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6 sm:mb-8">
          {c.title}
        </h2>

        {status === "success" ? (
          <div className="max-w-md mx-auto bg-white/80 rounded-[16px] px-8 py-10">
            <p className="text-[#111111] font-bold text-xl mb-2">{c.alert}</p>
            <p className="text-[#111111]/70 text-sm">{c.note}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 justify-center items-center max-w-md mx-auto"
          >
            <div className="w-full flex flex-col gap-3">
              {/* Native language select */}
              <div className="relative w-full">
                <select
                  required
                  value={nativeLanguage}
                  onChange={(e) => setNativeLanguage(e.target.value)}
                  className="w-full appearance-none rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111] text-base cursor-pointer"
                >
                  <option value="" disabled>
                    {c.nativeLang}
                  </option>
                  {c.langOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  {CHEVRON_SVG}
                </div>
              </div>

              {/* Practice language select */}
              <div className="relative w-full">
                <select
                  required
                  value={practiceLanguage}
                  onChange={(e) => setPracticeLanguage(e.target.value)}
                  className="w-full appearance-none rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111] text-base cursor-pointer"
                >
                  <option value="" disabled>
                    {c.practiceLang}
                  </option>
                  {c.langOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  {CHEVRON_SVG}
                </div>
              </div>

              {/* Email input */}
              <input
                type="email"
                placeholder={c.placeholder}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111] text-base"
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <p className="text-red-700 text-sm font-medium w-full text-left">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#111111] px-8 py-4 text-white font-bold shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-black transition-colors duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "..." : c.button}
            </button>
          </form>
        )}

        <p className="mt-5 sm:mt-6 text-[#111111] opacity-80 font-medium italic text-sm sm:text-base">
          {c.note}
        </p>
      </div>
    </section>
  );
}

