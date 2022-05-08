import React from "react";
import logo from "./logo.svg";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import { Welcome } from "./components/Welcome";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import { LanguageSelector } from "./components/LanguageSelector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  // .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "es"],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: global_en,
      es: global_es,
    },

    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection: {
      order: ["navigator", "localStorage", "htmlTag", "cookie", "sessionStorage", "path", "subdomain"],
    },

    react: { useSuspense: false },
  });

console.log({ ...i18n });

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <LanguageSelector />
      <Welcome />
    </div>
  );
}

export default App;
