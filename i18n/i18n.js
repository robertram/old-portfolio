import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esHome from '../src/i18n/es.json';
import enHome from '../src/i18n/en.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    home: enHome,
  },
  es: {
    home: esHome,
  }
};

const namespaces = ['home'];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: namespaces,
    debug: false
  });

export default i18n;

