import { useLang } from "@/lib/LanguageContext";

function renderAnswer(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length === 1) return <span>{text}</span>;
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-extrabold text-[#1A1A1A]">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function Pains() {
  const { t, lang } = useLang();
  const p = t.pains;
  const isRTL = lang === "da";

  return (
    <section id="features" className="bg-white pt-16 pb-10 sm:pt-20 sm:pb-14" dir={isRTL ? "rtl" : undefined}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] mb-3">
            {p.title} <span className="text-[#FFC107]">{p.titleAccent}</span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">{p.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 max-w-[850px] mx-auto">
          {p.items.map(({ icon, q, a }, i) => (
            <div
              key={i}
              className={`bg-[#F9FAFB] rounded-[16px] p-6 ${isRTL ? "border-r-[5px]" : "border-l-[5px]"} border-[#FFC107]`}
            >
              <div className="flex gap-3 items-start mb-3.5">
                <span className="text-[22px] flex-shrink-0">{icon}</span>
                <h3 className="text-[17px] font-bold text-[#1A1A1A] italic leading-snug">{q}</h3>
              </div>
              <p className={`${isRTL ? "pr-[34px]" : "pl-[34px]"} text-[15px] text-[#374151] leading-relaxed`}>
                {renderAnswer(a)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
