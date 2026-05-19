import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Pains } from "@/components/landing/Pains";
import { Process } from "@/components/landing/Process";
import { Founder } from "@/components/landing/Founder";
import { Difference } from "@/components/landing/Difference";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { useLang } from "@/lib/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
// ... (rest of Route config remains the same)
  head: () => ({
    meta: [
      { title: "ZoujUp — Structured Language Practice for Darija, French, English & Spanish" },
      {
        name: "description",
        content:
          "Master Moroccan Arabic (Darija), French, English, and Spanish through structured 10-minute sessions. No random chats, no dating vibe—just real language practice.",
      },
      { property: "og:title", content: "ZoujUp — Stop Studying, Start Speaking" },
      {
        property: "og:description",
        content: "Structured language practice with real partners. No dating vibes, no small talk.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { lang, t } = useLang();
  const c = t.cta;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const COUNTER_TARGET = 47;
  const [counterVal, setCounterVal] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const counterSectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = counterSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const step = COUNTER_TARGET / 60;
          const interval = setInterval(() => {
            current += step;
            if (current >= COUNTER_TARGET) {
              current = COUNTER_TARGET;
              clearInterval(interval);
            }
            setCounterVal(Math.floor(current));
            setBarWidth((current / 100) * 100);
          }, 20);
        }
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    ["/assetsrc/EnglishApp.svg", "/assetsrc/FrenchApp.svg", "/assetsrc/SpanishApp.svg", "/assetsrc/DarijaApp.svg"].forEach((src) => {
      new Image().src = src;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mdabdveb", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <section
          id="cta"
          className="min-h-screen flex items-center justify-center bg-[#FFC107] relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">

              {/* Left column — mobile app image */}
              {status !== "success" && (
                <div className="flex items-center justify-center h-full">
                  <img
                    src={lang === "fr" ? "/assetsrc/FrenchApp.svg" : lang === "es" ? "/assetsrc/SpanishApp.svg" : lang === "da" ? "/assetsrc/DarijaApp.svg" : "/assetsrc/EnglishApp.svg"}
                    alt="ZoujUp mobile app"
                    className="h-[38vh] sm:h-[52vh] lg:h-[85vh] w-auto drop-shadow-2xl"
                  />
                </div>
              )}

              {/* Right column — form / success */}
              <div className={status === "success" ? "lg:col-span-2 flex justify-center" : ""}>
            {status === "success" ? (
              <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center text-center">
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <CheckCircle2 className="h-14 w-14 text-[#FFC107]" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-6">
                  {lang === "en" ? "You're on the list!" : lang === "fr" ? "Vous êtes sur la liste !" : lang === "da" ? "!نت فالقائمة" : "¡Estás en la lista!"}
                </h2>
                <p className="text-[#111111] text-xl opacity-90 max-w-md mx-auto leading-relaxed">
                  {lang === "en"
                    ? "Thank you for joining ZoujUp. We'll reach out as soon as we're ready for you."
                    : lang === "fr"
                    ? "Merci d'avoir rejoint ZoujUp. Nous vous contacterons dès que nous serons prêts."
                    : lang === "da"
                    ? "شكراً على انضمامك لـ ZoujUp. غادي نتواصلو معك ملي نكونو مستعدين."
                    : "Gracias por unirte a ZoujUp. Nos pondremos en contacto contigo tan pronto como estemos listos."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[#111111] font-bold underline hover:opacity-70 transition-opacity"
                >
                  {lang === "en" ? "Back to form" : lang === "fr" ? "Retour au formulaire" : lang === "da" ? "ارجع للفورم" : "Volver al formulario"}
                </button>
              </div>
            ) : (
              <div className="max-w-[480px] mx-auto w-full bg-white rounded-[20px] px-6 py-7 shadow-[0_12px_40px_rgba(0,0,0,0.12)] text-left">
                <p className="text-[22px] font-black text-center mb-1.5 text-[#1A1A1A]">{c.title}</p>
                <div className="bg-gradient-to-br from-[#FCD53F] to-[#F5C414] text-[#1A1A1A] px-4 py-3 rounded-[10px] font-bold text-sm text-center my-1 mb-4 leading-snug shadow-[0_4px_12px_rgba(252,213,63,0.3)]">
                  {c.benefit}
                </div>
                <p className="text-sm text-[#6B7280] text-center mb-5">{c.lead}</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                  <div className="relative w-full">
                    <select
                      name="Native Language"
                      required
                      className="w-full appearance-none rounded-[10px] px-4 py-3.5 text-[#1A1A1A] bg-[#F9FAFB] border-[1.5px] border-transparent focus:outline-none focus:border-[#F5C414] text-[15px] font-semibold cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>{c.nativeLang}</option>
                      {c.langOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <select
                      name="Practice Language"
                      required
                      className="w-full appearance-none rounded-[10px] px-4 py-3.5 text-[#1A1A1A] bg-[#F9FAFB] border-[1.5px] border-transparent focus:outline-none focus:border-[#F5C414] text-[15px] font-semibold cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>{c.practiceLang}</option>
                      {c.langOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <input
                    name="Email"
                    type="email"
                    placeholder={c.placeholder}
                    required
                    className="w-full rounded-[10px] px-4 py-3.5 text-[#1A1A1A] bg-[#F9FAFB] border-[1.5px] border-transparent focus:outline-none focus:border-[#F5C414] text-[15px] font-semibold"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-[10px] bg-[#1A1A1A] py-4 text-white font-extrabold text-base hover:bg-black transition-colors mt-1"
                  >
                    {c.button}
                  </button>
                </form>
                <p className="text-[12px] text-[#6B7280] text-center mt-3.5 italic leading-snug">
                  {c.legalStart}{" "}
                  <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] font-semibold underline hover:text-black">
                    {c.legalLinkText}
                  </Link>
                  {c.legalEnd}
                </p>
              </div>
            )}
              </div>

            </div>
          </div>
        </section>

        {/* Counter section */}
        <section ref={counterSectionRef} className="bg-[#1A1A1A] text-white text-center py-12 px-5">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">
            <span className="text-[#FCD53F]">{counterVal}</span>{" "}
            {t.counter.titleSuffix}
          </h2>
          <p className="text-[#9CA3AF] mb-7 text-[15px] max-w-md mx-auto">
            {t.counter.subtitle}
          </p>
          <div className="w-full max-w-[500px] mx-auto h-3.5 bg-[#2D2D2D] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FCD53F] to-[#FFB800] rounded-full transition-[width] duration-1000 ease-out"
              style={{ width: `${barWidth}%` }}
            />
          </div>
          <p className="mt-3.5 font-bold text-[#FCD53F] text-sm">
            {COUNTER_TARGET}{t.counter.percentSuffix}
          </p>
        </section>

    <Pains />
    <Process />
    <Founder />
    {/* <Difference /> */}
    <FAQ />

    {/* Get in Touch Section */}
    <section id="contact" className="pt-10 pb-20 sm:pb-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
            {t.contact.title}{lang !== "es" && " "}<span className="text-[#FFC107]">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-[#6B7280] text-lg sm:text-xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] hover:border-[#FFC107] transition-all duration-300 text-center shadow-sm">
            <div className="h-12 w-12 bg-white rounded-[12px] flex items-center justify-center border border-[#E5E7EB] mb-6 shadow-sm mx-auto">
              <Mail className="h-6 w-6 text-[#FFC107]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{t.contact.cardTitle}</h3>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              {t.contact.cardDesc}
            </p>
            <a
              href="mailto:contact@zoujup.com"
              className="text-xl sm:text-2xl font-bold text-[#1A1A1A] hover:text-[#FFC107] transition-colors"
            >
              contact@zoujup.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</div>
);
}
