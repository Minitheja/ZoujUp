import { useLang } from "@/lib/LanguageContext";

function renderBold(text: string) {
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

export function Founder() {
  const { t, lang } = useLang();
  const f = t.founder;
  const isRTL = lang === "da";

  return (
    <section id="about" className="bg-white pt-16 pb-14 sm:pt-20 sm:pb-20" dir={isRTL ? "rtl" : undefined}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">

          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-start">
            <div
              className="w-full max-w-[280px] aspect-square rounded-[24px] flex items-center justify-center text-white font-black text-[64px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              style={{ background: "linear-gradient(135deg, #FCD53F 0%, #FF8800 100%)" }}
            >
              J
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-4 tracking-tight">
              {f.title}
            </h2>
            <p className="text-[16px] text-[#4B5563] mb-4 leading-relaxed">{f.p1}</p>
            <p className="text-[16px] text-[#4B5563] mb-6 leading-relaxed">{renderBold(f.p2)}</p>
            <p className="text-[18px] font-extrabold text-[#1A1A1A] mt-6 mb-4">{f.signature}</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jihane-el-farri-aa6244b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-full px-4 py-2 hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                {f.linkedin}
              </a>
              <a
                href="https://www.instagram.com/jihaneforward?igsh=ZTY4NXU3OW5oemZ5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-full px-4 py-2 hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                {f.instagram}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
