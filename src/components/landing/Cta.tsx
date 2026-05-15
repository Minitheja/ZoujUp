import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/LanguageContext";

export function Cta() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <section
      id="cta"
      className="min-h-screen flex items-center justify-center bg-[#FFC107] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl relative z-10 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6 sm:mb-8">
          {c.title}
        </h2>
        <form
          action="https://formspree.io/f/zoujup@gmail.com"
          method="POST"
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
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
          <p className="text-[11px] sm:text-xs text-[#111111]/60 italic mt-2 leading-tight">
            HELLO_TEST_123
          </p>
        </form>
        <p className="mt-5 sm:mt-6 text-[#111111] opacity-80 font-medium italic text-sm sm:text-base">
          {c.note}
        </p>
      </div>
    </section>
  );
}

