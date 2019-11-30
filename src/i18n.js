import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationVI from './locales/vi/translation.json';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      vi: {
        translation: translationVI,
      },
    },
    lng: 'vi',
    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });
  
export default i18n;
