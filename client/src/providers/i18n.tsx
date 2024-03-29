import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: ["auth", "common"],
    defaultNS: "auth",
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
      crossDomain: false,
    },
  });

export default i18n;
