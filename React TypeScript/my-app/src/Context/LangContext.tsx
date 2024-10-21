import React, { createContext, ReactNode, useState } from "react";

enum Language {
  ENGLISH = "en",
  DEUTSCH = "de",
}

export const LangContext = createContext<
  { language: Language; toggleLang: () => void } | undefined
>(undefined);

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>(Language.ENGLISH);

  const toggleLang = (): void => {
    setLang((prevLang) =>
      prevLang === Language.ENGLISH ? Language.DEUTSCH : Language.ENGLISH
    );
  };

  return (
    <LangContext.Provider value={{ language: lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
