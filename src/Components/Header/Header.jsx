// Header.jsx
import React, { useContext } from 'react';
import './Header.css';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="HeaderContainer">
      <div className='col-sm-12 col-md-6 textoHeaderContainer fade-in'>
        <p className='portfolioTitulito'>Portfolio</p>
        <h1 className='textoPrincipal'><span className='hache'>H</span>{t('headerTexts.saludo')}<br /><span className='nombre'>Leonardo</span><span className='apellido'>Riera</span></h1>
        <p className='profesion'>{t('headerTexts.profesion')} <span className='profesionPropia'>FRONTEND</span>  {t('headerTexts.y')} <span className='profesionPropia'>{t('headerTexts.diseño')}</span> </p>
        <a className='cvBoton'
          href="/CV_LeonardoRiera.pdf"   
          download="CV_LeonardoRiera.pdf"  
          
        >
          {t('headerTexts.descarga')}
        </a>
      </div>

      <div class="col-sm-12 col-md-6 container">
    
        <div class="box">
          <div class="card" id="front">LEONARDO</div>
          <div class="card" id="back">RIERA</div>
          <div class="card" id="left">FRONTEND</div>
          <div class="card" id="right">DISEÑO</div>
          <div class="card" id="top">DEVELOPER</div>
          <div class="card" id="bottom">REACT</div>

        </div>

      </div>

    </div>
  );
};

export default Header;
