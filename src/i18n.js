import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  },
  lng: 'en', // ma langue par default
  fallbackLng: 'en', // langue par def si la translation est pas dispo
  interpolation: {
    escapeValue: false, // React gère l'échapement par default
  },
});

export default i18n;
