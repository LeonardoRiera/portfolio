import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json'; // Importa las traducciones en inglés
import es from './locales/es.json'; // Importa las traducciones en español

// Configuración de i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
      escapeValue: false // React ya maneja la seguridad en el HTML
    }
  });

export default i18n;
