import React, { useContext } from 'react';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import './Header.css'; 

const Header = () => {
  
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);  



  return (
    <div className='HeaderContainer'>

      <h1 className='TituloPrincipal'>{t('header.titulo')}</h1>
      
    </div>
  )
}

export default Header