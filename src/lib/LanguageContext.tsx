import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Lang } from "./i18n";

interface LanguageContextValue {
  lang: Lang;
  t: typeof translations[Lang];
  toggleLang: () => void;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function safeGetLang(): Lang {
  try {
    const saved = localStorage.getItem("zoujup-lang") as Lang;
    return (saved === "fr" || saved === "es" || saved === "da") ? saved : "en";
  } catch {
    return "en";
  }
}

function safeSetLang(value: Lang) {
  try {
    localStorage.setItem("zoujup-lang", value);
  } catch {
    // storage blocked — continue without persisting
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(safeGetLang);

  const setLanguage = useCallback((newLang: Lang) => {
    setLang(newLang);
    safeSetLang(newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      let next: Lang;
      if (prev === "en") next = "fr";
      else if (prev === "fr") next = "es";
      else next = "en";

      safeSetLang(next);
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
