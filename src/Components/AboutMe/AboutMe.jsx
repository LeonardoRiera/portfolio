import React, { useContext } from 'react';
import './AboutMe.css';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import bubble from '../../image/bubble.svg'
import RoutMap from '../RoutMap/RoutMap.jsx';


const AboutMe = () => {

  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);


  return (
    <div className='aboutMeContainer' id='aboutMe'>

      <div className='row principalRow'>

        <div className='col-sm-12 col-md-6 stackContainer'>

          <div className='stackImagen'>

            <RoutMap />

          </div>

          <div className='stackTexto'>

            <div className='frontend'>

              <p className='frontTitle'>{t('aboutMe.frontend')}</p>

              <div className='frontLogos'>

                <i class="devicon-react-original colored"></i>  
                <i class="devicon-javascript-plain colored"></i>              
                <i class="devicon-css3-plain colored"></i>              
                <i class="devicon-bootstrap-plain colored"></i>             
                <i class="devicon-sass-original colored"></i>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='imageAbout' />              
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className='imageAbout' />

              </div>

            </div>


            <div className='diseñador'>

              <p className='frontTitle'>{t('aboutMe.diseño')}</p>

              <div className='diseñoLogos'>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" className='imageAbout' />                
                <i class="devicon-illustrator-plain colored"></i>             
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" className='imageAbout' />

              </div>             
    
            </div>


            <div className='otros diseñador'>

              <p className='frontTitle'>{t('aboutMe.otras')}</p>

              <div className='otrosLogos'>
                <i class="devicon-git-plain colored"></i>               
                <i class="devicon-github-original"></i>
                <img src={bubble} alt="logo de bubble" className='imageAbout2' />
              </div>

            </div>

            <div className='idiomas diseñador'>

              <p className='frontTitle'>{t('aboutMe.idioma')}</p>
              
              <div className='idiomasCont'>

                <p className='idiomasGral'>{t('aboutMe.idioma2')} </p>

                <div className='estrellas'>

                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>

                </div>

              </div>

              <div className='idiomasCont'>

                <p className='idiomasGral'>{t('aboutMe.idioma3')} </p>

                <div className='estrellas'>

                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                
                </div>

              </div>

              <div className='idiomasCont'>

                <p className='idiomasGral'>{t('aboutMe.idioma4')}</p>

                <div className='estrellas'>

                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                 
                </div>

              </div>

            </div>
            
          </div>

        </div>

        <div className='col-sm-12 col-md-6 aboutFotoContainer'>

          <div className='aboutFoto'>

            <img src="" alt="mi foto" />

          </div>

          <div className='aboutTexto'>

            <h3 className='titulo'>{t('aboutMe.titulo')}</h3>
            <p className='textoAboutMe'>{t('aboutMe.desarrollo')}</p>
            <a className='botone' href="#proyectos"><p className='cvBoton3'>{t('aboutMe.boton')}</p></a>
          </div>

        </div>

      </div> 
       
    </div>
  )
}

export default AboutMe