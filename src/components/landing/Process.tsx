import { Sparkles, MicVocal, Target } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const icons = [Sparkles, MicVocal, Target];

export function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section
      id="how-it-works"
      className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-transparent relative scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-[#1A1A1A]">
            {p.title} <span className="text-[#FFC107]">{p.titleAccent}</span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">{p.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Steps */}
          <div className="space-y-8 sm:space-y-10">
            {p.steps.map(({ title, desc }, i) => {
              const Icon = icons[i];
              // Split number and text (e.g. "1. " and "Text")
              const parts = title.match(/^(\d+\.)\s*(.*)$/);
              const num = parts ? parts[1] : "";
              const content = parts ? parts[2] : title;

              return (
                <div
                  key={title}
                  className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start bg-white p-6 sm:p-8 rounded-[24px] border border-[#E5E7EB] shadow-sm hover:border-[#FFC107] transition-all duration-300 text-center sm:text-left"
                >
                  <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-[16px] bg-[#F8F9FA] border border-[#E5E7EB] shadow-sm transition-colors duration-200">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFC107]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#1A1A1A] flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-0">
                      {num && <span className="text-[#1A1A1A] sm:mr-2 shrink-0">{num}</span>}
                      <span>{content}</span>
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-base sm:text-lg">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
