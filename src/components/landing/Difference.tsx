import { useLang } from "@/lib/LanguageContext";
import { AlertCircle, MessageSquareOff, Star } from "lucide-react";

const icons = [AlertCircle, MessageSquareOff, Star];

export function Difference() {
  const { t } = useLang();
  const d = t.difference;

  return (
    <section id="difference" className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-transparent relative scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-[#1A1A1A]">
            {d.title} <span className="text-[#FFC107]">{d.titleAccent}</span>
          </h2>
          {d.subtitle && (
            <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">{d.subtitle}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="space-y-8 sm:space-y-10">
            {d.items.map((item, i) => {
              const Icon = icons[i];
              // Split number and text (e.g. "1. " and "Text")
              const parts = item.title.match(/^(\d+\.)\s*(.*)$/);
              const num = parts ? parts[1] : "";
              const content = parts ? parts[2] : item.title;

              return (
                <div
                  key={i}
                  className="flex gap-5 sm:gap-6 items-start bg-white p-6 sm:p-8 rounded-[24px] border border-[#E5E7EB] shadow-sm hover:border-[#FFC107] transition-all duration-300"
                >
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#F8F9FA] border border-[#E5E7EB] shadow-sm transition-colors duration-200">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#FFC107]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#1A1A1A] flex items-start">
                      {num && <span className="text-[#1A1A1A] mr-2 shrink-0">{num}</span>}
                      <span>{content}</span>
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed text-base sm:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Text / Quote */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#111111] rounded-[20px] p-5 sm:p-6 transform hover:scale-[1.01] transition-all duration-300 shadow-xl">
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF] text-center leading-relaxed italic">
              "{d.footerText}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
