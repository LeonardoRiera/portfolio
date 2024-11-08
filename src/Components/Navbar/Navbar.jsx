import React, { useContext } from 'react';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Asegúrate de tener este archivo CSS
import triangulo from "../../image/triangulo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand  " href="#"><img src={triangulo} alt="logo" className='principalNavbar'/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link linksnavbar" aria-current="page" href="#">{t('navbar.about')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link linksnavbar" href="#">{t('navbar.projects')}</a>
            </li>
           
          </ul>
          
          {/* toogle */}
          <div className="toggle-container" onClick={toggleLanguage}>
            
            <span className="toggle-label">Es</span>
            <div className={`toggle ${language === 'en' ? 'active' : ''}`}>
              <span className="toggle-ball"></span>
            </div>
            <span className="toggle-label">En</span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

