"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ne";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (en: string, ne: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("eform_nepal_lang") as Language;
    if (saved === "en" || saved === "ne") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("eform_nepal_lang", newLang);
  };

  const toggleLang = () => {
    const next = lang === "en" ? "ne" : "en";
    setLang(next);
  };

  const t = (en: string, ne: string) => {
    return lang === "ne" ? (ne || en) : en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
