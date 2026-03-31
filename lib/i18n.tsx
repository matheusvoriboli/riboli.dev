"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "pt" | "en";

interface I18nContextValue {
  locale: Locale;
  toggle: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "pt",
  toggle: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "en") setLocale("en");
  }, []);

  const toggle = () => {
    const next: Locale = locale === "pt" ? "en" : "pt";
    setLocale(next);
    localStorage.setItem("locale", next);
  };

  return (
    <I18nContext.Provider value={{ locale, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
