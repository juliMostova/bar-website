import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
//import enJSON from './Translation.json';
import enJSON from './../Translation.json'


i18next
.use(initReactI18next)
.init({
  resources: {
    ...enJSON
  },
  lng: localStorage.getItem('i18nextLng') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
 },
 keySeparator: '.',
});

export default i18next;



