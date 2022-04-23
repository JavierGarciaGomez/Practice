import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div>
      <div className="">Escoge el idioma</div>
      <button onClick={() => i18n.changeLanguage("es")}>Español</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </div>
  );
};
