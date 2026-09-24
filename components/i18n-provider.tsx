"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

import frMessages from "@/messages/fr.json";
import enMessages from "@/messages/en.json";

type Locale = "fr" | "en";

const messagesMap = {
  fr: frMessages,
  en: enMessages,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const savedLocale = localStorage.getItem("app_locale") as Locale;
    if (savedLocale && (savedLocale === "fr" || savedLocale === "en")) {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("app_locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesMap[locale]}
      >
        {children}
      </NextIntlClientProvider>
    </I18nContext.Provider>
  );
}

export function useLocaleContext() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLocaleContext doit être utilisé à l'intérieur de I18nProvider");
  }
  return context;
}