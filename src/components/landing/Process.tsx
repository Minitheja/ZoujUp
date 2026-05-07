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
                  className="flex gap-4 sm:gap-6 items-start bg-white p-6 sm:p-8 rounded-[20px] border border-[#E5E7EB] shadow-sm hover:border-[#FFC107] transition-all duration-300"
                >
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[12px] bg-[#F8F9FA] border border-[#E5E7EB] shadow-sm transition-colors duration-200">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#FFC107]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1.5 text-[#1A1A1A] flex items-start">
                      {num && <span className="text-[#1A1A1A] mr-2 shrink-0">{num}</span>}
                      <span>{content}</span>
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">{desc}</p>
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
