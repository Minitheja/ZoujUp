import { useLang } from "@/lib/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EMAIL = "contact@zoujup.com";

function renderAnswer(text: string) {
  const parts = text.split(EMAIL);
  if (parts.length === 1) return text;
  return (
    <>
      {parts[0]}
      <a
        href={`mailto:${EMAIL}`}
        className="text-[#1A1A1A] font-semibold underline underline-offset-2 hover:text-[#FFC107] transition-colors duration-200"
      >
        {EMAIL}
      </a>
      {parts[1]}
    </>
  );
}

export function FAQ() {
  const { t } = useLang();
  const f = t.faq;

  return (
    <section id="faq" className="pt-20 sm:pt-28 pb-0 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#FFC107]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-[#FFC107]/8 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
            {f.title}
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">{f.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {f.items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border rounded-2xl border-[#E5E7EB] bg-white/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#FFC107]/40 hover:shadow-xl hover:shadow-[#FFC107]/5 group"
            >
              <AccordionTrigger className="text-left font-bold text-[#1A1A1A] px-6 sm:px-8 py-5 sm:py-7 text-base sm:text-lg hover:no-underline data-[state=open]:bg-[#FFC107] data-[state=open]:text-black transition-all duration-300">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] px-6 sm:px-8 py-6 sm:py-8 text-base sm:text-lg leading-relaxed border-t border-[#F3F4F6] bg-gray-50/30 whitespace-pre-line">
                {renderAnswer(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
