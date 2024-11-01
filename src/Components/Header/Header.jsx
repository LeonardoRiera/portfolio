import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import './Header.css'; 



const Header = () => {
  
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);  

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      setIsActive(true); // Activa el efecto cuando se carga el componente
  }, []);

 



  return (

    <div className='HeaderContainer'>


      
    
       
    </div>
  );
}

export default Header