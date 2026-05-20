import { useLang } from "@/lib/LanguageContext";

interface CtaMidProps {
  variant?: "mid1" | "mid3";
}

export function CtaMid({ variant = "mid1" }: CtaMidProps) {
  const { t } = useLang();
  const c = variant === "mid3" ? t.ctaMid3 : t.ctaMid1;

  return (
    <section className="bg-[#FCD53F] py-9 px-5 text-center">
      <div className="max-w-[600px] mx-auto">
        <p className="text-[22px] font-extrabold text-[#1A1A1A] mb-[18px]">
          {c.headline}
        </p>
        <a
          href="#cta"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("cta");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-block bg-[#1A1A1A] text-white px-9 py-[18px] rounded-[12px] font-bold text-[17px] hover:-translate-y-0.5 transition-transform duration-150"
        >
          {c.button}
        </a>
      </div>
    </section>
  );
}
