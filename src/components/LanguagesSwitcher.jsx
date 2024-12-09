import React from 'react';
import './LenguageSwitchStyle.css';
import { useTranslation } from 'react-i18next';


function LanguagesSwitcher() {

    const { i18n } = useTranslation();


const changeLanguage = (lang)=>{
i18n.changeLanguage(lang)
};

  return (
    <div className='menu'>
      <button onClick={()=>changeLanguage('es')}>
        <div className='es'>ES</div>
      </button>
      <div className="divider"></div>
      <button onClick={()=>changeLanguage('en')}>
        <div className='en'>EN</div>
      </button>
    </div>
  )
}

export default LanguagesSwitcher;
