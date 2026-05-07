import { useLang } from "@/lib/LanguageContext";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10 flex items-center justify-center bg-transparent"
    >
      <div className="container mx-auto relative z-10 px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] max-w-4xl mx-auto leading-[1.1]">
            {h.headline1} <span className="text-[#FFC107]">{h.headline2}</span>
          </h1>

          <div className="space-y-4 pt-2">
            <p className="text-xl sm:text-2xl text-[#1A1A1A] font-semibold">{h.subheadline}</p>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              {h.body.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br className="hidden sm:block" />}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-6 items-center">
            {/* CTA */}
            <a
              href="/#cta"
              className="inline-flex items-center justify-center gap-3 rounded-[16px] bg-[#FFC107] px-10 py-5 text-[#111111] font-extrabold shadow-soft hover:bg-[#E0A800] hover:shadow-glow transition-all duration-300 w-full sm:w-max text-lg"
            >
              {h.cta}
            </a>
            {/* Social proof strip */}
            <div className="space-y-2 max-w-xl border-l-4 border-[#FFC107] pl-6 py-2 text-left mx-auto">
              <p className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug">{h.earlyAccessTitle}</p>
              <p className="text-sm sm:text-base text-[#6B7280]">{h.earlyAccessSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
