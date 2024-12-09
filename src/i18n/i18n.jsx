import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import es from './es.json';


// Ініціалізація мов
i18n
.use(LanguageDetector)// Автоматичне визначення мови
.use(initReactI18next)// Інтеграція з React
.init({
  resources: {
   en:{translation:en},
   es:{translation:es},
  },
  lng: "en", // Мова за замовчуванням
  fallbackLng: "en", // Якщо мова не знайдена, буде використовуватись ця
  interpolation: {
    escapeValue: false, // React уже захищає від XSS
  },
});

export default i18n;