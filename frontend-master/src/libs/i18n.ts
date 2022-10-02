import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: "en-US",
    supportedLngs: ["en-US", "pt-BR"],
    load: "all",
    preload: ["en-US", "pt-BR"],

    ns: ["common", "pages"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export { i18n };
