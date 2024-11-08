import React, { useContext } from 'react';
import './Footer.css'
import circulo from '../../image/circulo.png'
import triangulo from "../../image/triangulo.png";
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);




  return (
    <div className='footerContenedor'>

       
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

        <div className='row'>

          <div className="col12 linksContainerFooter">

            <a href="https://www.linkedin.com/in/leonardo-gabriel-riera-92567a283" className='links' target="blank" ><i class="bi bi-linkedin linksLogo"></i></a>
            <a href="https://github.com/LeonardoRiera" className='links' target="blank" ><i class="bi bi-github linksLogo"></i></a>
            <a href="mailto:leonardogabrielriera@gmail.com" className='links'><i class="bi bi-envelope linksLogo"></i></a>

          </div> 
          <div className="col12 botonContenedorFooter ">

            <p className='cvBoton2'>{t('headerTexts.descarga')}</p>

          </div>

            


            
        </div>

    </div>
       

   
  )
}

export default Footer