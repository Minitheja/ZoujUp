import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "./i18n";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // Persist preference across reloads
    const saved = localStorage.getItem("zoujup-lang") as Lang;
    return (saved === "fr" || saved === "es") ? saved : "en";
  });

  const setLanguage = useCallback((newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("zoujup-lang", newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      let next: Lang;
      if (prev === "en") next = "fr";
      else if (prev === "fr") next = "es";
      else next = "en";
      
      localStorage.setItem("zoujup-lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
