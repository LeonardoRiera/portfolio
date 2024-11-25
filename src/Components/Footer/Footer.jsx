import React, { useContext, useEffect } from 'react';
import './Footer.css'
import circulo from '../../image/circulo.png'
import triangulo from "../../image/triangulo.png";
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // Inicializa todos los tooltips en el componente usando JavaScript de Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }, [language]);



  return (
    <div className='footerContenedor' id='footer'>
     
      <div className='row footerPrincipal'>

          <div className="col-3 primerContainer">
              <img src={triangulo} alt="logoFooter" className='logoFooter'/> 
          </div>

          <div className="col-6 titulofooterContainer">

              <p className='contactame'>{t('footer.contacto')}</p>
              <img src={circulo} alt="" className='circuloFooter' />
              <img src={circulo} alt="" className='circuloFooter2' />

          </div>

          <div className="col-3 tercerContainer">

            <img src={triangulo} alt="logoFooter" className='logoFooter'/> 

          </div>

      </div>

      <div className='row contactosFooter'>

        <div className='col-6 linksContainer'>

          <a href="https://www.linkedin.com/in/leonardo-gabriel-riera-92567a283" className='links' target="blank" ><i class="bi bi-linkedin linksLogo"></i></a>
          <a href="https://github.com/LeonardoRiera" className='links' target="blank" ><i class="bi bi-github linksLogo"></i></a>
          <a href="mailto:leonardogabrielriera@gmail.com" className='links'><i class="bi bi-envelope linksLogo"></i></a>

        </div>
      
        <div className="col-6 botonContenedorFooter ">

          <a className='cvBoton2'
          href="../../public/CV_LeonardoRiera.pdf"    
          download="CV-LeonardoRiera.pdf"
          >         
            
            {t('headerTexts.descarga')}

          </a>

        </div>
          
      </div>

      
      <div className='row'>
        <div className='col-12 finalContainer'>

          
          <hr  className='linea'/>
          

          <div>
            <a href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={t(`footer.toolTip`)}
              rel="noopener noreferrer"
            >
              <img src={triangulo} alt="logoFooter" className='logoFooter2'/>
            </a> 
          </div>

          
          <hr  className='linea'/>
          

        </div>
      </div>

    </div>
       

   
  )
}

export default Footer