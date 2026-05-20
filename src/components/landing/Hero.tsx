import { useLang } from "@/lib/LanguageContext";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10 flex items-center justify-center bg-[#FFC107]"
    >
      <div className="container mx-auto relative z-10 px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">

          {/* Pill badge */}
          <span className="inline-block bg-[#1A1A1A] text-[#FCD53F] px-4 py-2 rounded-full font-bold text-xs tracking-[0.5px] uppercase mb-2">
            {h.pill}
          </span>

          {/* H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1A1A1A] max-w-4xl mx-auto leading-[1.05]">
            {h.headline1}
            <br />
            <span
              style={{ WebkitTextStroke: "2px #1A1A1A", WebkitTextFillColor: "white" }}
            >
              {h.headline2a}
            </span>
            <br />
            <span
              style={{ WebkitTextStroke: "2px #1A1A1A", WebkitTextFillColor: "white" }}
            >
              {h.headline2b}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#1A1A1A] font-bold max-w-2xl mx-auto leading-relaxed">
            {h.subheadline}
          </p>

        </div>
      </div>
    </section>
  );
}
