import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Difference } from "@/components/landing/Difference";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { useLang } from "@/lib/LanguageContext";
import { useState } from "react";
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
        
        <section
          id="cta"
          className="min-h-screen flex items-center justify-center bg-[#FFC107] relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl relative z-10 py-20">
            {status === "success" ? (
              <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <CheckCircle2 className="h-14 w-14 text-[#FFC107]" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-6">
                  {lang === "en" ? "You're on the list!" : lang === "fr" ? "Vous êtes sur la liste !" : "¡Estás en la lista!"}
                </h2>
                <p className="text-[#111111] text-xl opacity-90 max-w-md mx-auto leading-relaxed">
                  {lang === "en" 
                    ? "Thank you for joining ZoujUp. We'll reach out as soon as we're ready for you." 
                    : lang === "fr" 
                    ? "Merci d'avoir rejoint ZoujUp. Nous vous contacterons dès que nous serons prêts." 
                    : "Gracias por unirte a ZoujUp. Nos pondremos en contacto contigo tan pronto como estemos listos."}
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[#111111] font-bold underline hover:opacity-70 transition-opacity"
                >
                  {lang === "en" ? "Back to form" : lang === "fr" ? "Retour au formulaire" : "Volver al formulario"}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6 sm:mb-8">
                  {c.title}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 justify-center items-center max-w-md mx-auto"
                >
              <div className="w-full flex flex-col gap-3">
                <div className="relative w-full">
                  <select
                    name="Native Language"
                    required
                    className="w-full appearance-none rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111] text-base cursor-pointer"
                    defaultValue=""
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
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="relative w-full">
                  <select
                    name="Practice Language"
                    required
                    className="w-full appearance-none rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111] text-base cursor-pointer"
                    defaultValue=""
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
                  className="w-full rounded-[12px] px-5 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111] text-base"
                />
              </div>
              
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#111111] px-8 py-4 text-white font-bold shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-black transition-colors duration-200 text-base"
              >
                {c.button}
              </button>
              
              <p className="text-[11px] sm:text-xs text-[#111111]/60 italic mt-4 leading-tight text-center">
                {lang === "en" ? (
                  <>
                    By joining, you agree to our{" "}
                    <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
                      Privacy Policy
                    </Link>
                    . We will never share your email.
                  </>
                ) : lang === "fr" ? (
                  <>
                    En vous inscrivant, vous acceptez notre{" "}
                    <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
                      Politique de Confidentialité
                    </Link>
                    . Nous ne partagerons jamais votre e-mail.
                  </>
                ) : (
                  <>
                    Al unirte, aceptas nuestra{" "}
                    <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
                      Política de Privacidad
                    </Link>
                    . Nunca compartiremos tu correo electrónico.
                  </>
                )}
              </p>
            </form>
            <p className="mt-5 sm:mt-6 text-[#111111] opacity-80 font-medium italic text-sm sm:text-base text-center">
              {c.note}
            </p>
          </>
        )}
      </div>
    </section>

    <Hero />
    <Process />
    <Difference />
    <FAQ />

    {/* Get in Touch Section */}
    <section id="contact" className="pt-10 pb-20 sm:pb-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
            Get in <span className="text-[#FFC107]">Touch</span>
          </h2>
          <p className="text-[#6B7280] text-lg sm:text-xl leading-relaxed">
            Have questions or feedback? We'd love to hear from you. 
            Our team is here to support your language learning journey.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] hover:border-[#FFC107] transition-all duration-300 text-center shadow-sm">
            <div className="h-12 w-12 bg-white rounded-[12px] flex items-center justify-center border border-[#E5E7EB] mb-6 shadow-sm mx-auto">
              <Mail className="h-6 w-6 text-[#FFC107]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Email Us</h3>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              For general inquiries, support, or partnership opportunities, reach out to us at:
            </p>
            <a 
              href="mailto:zoujup@gmail.com"
              className="text-xl sm:text-2xl font-bold text-[#1A1A1A] hover:text-[#FFC107] transition-colors"
            >
              zoujup@gmail.com
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
