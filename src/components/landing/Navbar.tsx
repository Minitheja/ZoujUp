import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { type Lang } from "@/lib/i18n";

export function Navbar() {
  const { lang, t, setLanguage } = useLang();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: t.nav.home, to: "/", hash: "cta" },
    { label: t.nav.howItWorks, to: "/", hash: "how-it-works" },
    { label: t.nav.features, to: "/", hash: "difference" },
    { label: t.nav.faq, to: "/", hash: "faq" },
    { label: t.nav.contact, to: "/contact" },
  ];

  const languages: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideDesktop = desktopLangRef.current && !desktopLangRef.current.contains(target);
      const isOutsideMobile = mobileLangRef.current && !mobileLangRef.current.contains(target);
      
      // If we clicked outside both (or whichever one is present)
      if (isOutsideDesktop && isOutsideMobile) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLangSelect = (code: Lang) => {
    setLanguage(code);
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logo.png"
            alt="ZoujUp"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-[12px] object-cover"
          />
          <span className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-display">ZoujUp</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.hash}>
              <Link
                to={item.to}
                hash={item.hash}
                onClick={(e) => {
                  if (item.hash && (window.location.pathname === item.to || item.to === "/")) {
                    const el = document.getElementById(item.hash);
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", `${item.to}#${item.hash}`);
                    }
                  }
                }}
                className="text-base font-semibold text-[#1A1A1A] hover:text-[#FFC107] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Dropdown */}
          <div className="relative" ref={desktopLangRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#1A1A1A] hover:border-[#FFC107] hover:bg-[#FFF8E1] transition-all duration-200 cursor-pointer"
            >
              <Globe className="h-4 w-4 text-[#FFC107]" />
              <span className="uppercase">{lang}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-xl bg-white shadow-lg border border-[#E5E7EB] py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-[#FFF8E1] hover:text-[#FFC107] transition-colors cursor-pointer ${
                      lang === l.code ? "text-[#FFC107] bg-[#FFF8E1]/50" : "text-[#1A1A1A]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          

        </div>

        {/* Mobile right */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Dropdown — mobile */}
          <div className="relative" ref={mobileLangRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-xs font-bold text-[#1A1A1A] cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-[#FFC107]" />
              <span className="uppercase">{lang}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-xl bg-white shadow-lg border border-[#E5E7EB] py-1.5 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-[#FFF8E1] hover:text-[#FFC107] transition-colors cursor-pointer ${
                      lang === l.code ? "text-[#FFC107] bg-[#FFF8E1]/50" : "text-[#1A1A1A]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1A1A1A] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] shadow-lg">
          <ul className="container mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={(e) => {
                    setOpen(false);
                    if (item.hash && (window.location.pathname === item.to || item.to === "/")) {
                      const el = document.getElementById(item.hash);
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", `${item.to}#${item.hash}`);
                      }
                    }
                  }}
                  className="block py-3 px-2 text-base font-medium text-[#1A1A1A] hover:text-[#FFC107] transition-colors rounded-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      )}
    </header>
  );
}
