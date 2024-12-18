import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LenguageSwitchStyle.css';

function LanguagesSwitcher() {
  const { i18n } = useTranslation();
 

  const changeLanguage = (lng) => {
    localStorage.setItem('i18nextLng', lng);
    console.log(lng)
    i18n.changeLanguage(lng).catch(err => {
      console.error('Failed to change language:', err);
    });
  };

  return (
    <div className='menu'>
      <button onClick={() => changeLanguage('es')}>
        <div className='es'>ES</div>
      </button>
      <div className="divider"></div>
      <button onClick={() => changeLanguage('en')}>
        <div className='en'>EN</div>
      </button>
    </div>
  );
}

export default LanguagesSwitcher;