import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import './Proyects.css'; 
import tracker from '../../image/TrackerLaptop.png'
import trackerMovile from '../../image/TrackerMovile.png'
import imperio from '../../image/ImperioTicketLaptop.png'
import imperioMovile from '../../image/ImperioTicketMovile.png'
import travelDevs from '../../image/TravelDevsLaptop2.png'
import travelDevsMovile from '../../image/TravelDevsMovile.png'


const Proyects = () => {
  
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);  


  // Estado para controlar si el offcanvas está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el offcanvas
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className='ProyectsContainer'>

      {/* <h1 className='TituloPrincipal'>{t('header.titulo')}</h1> */}

      <div className='ProyectContainer'>
        
        <div className='image-container'>
          <img src={tracker} alt="tracker laptop" className='trackerLaptop' />
          <img src={trackerMovile} alt="tracker movile" className='trackerMovile' />
        </div>


        {/* Div que contiene la información del proyecto */}
        <div className="project-info">
          <h3>Tracker</h3>
          <p>This is a detailed description of the project. It will slide up when you hover over the images.</p>
        </div>

        

      </div>

      <div className='ProyectContainer'>
        
        <div className='image-container'>
          <img src={imperio} alt="tracker laptop" className='trackerLaptop2' />
          <img src={imperioMovile} alt="tracker movile" className='trackerMovile2' />
        </div>


        {/* Div que contiene la información del proyecto */}
        <div className="project-info2">
          <h3>Imperio Ticket</h3>
          <p>This is a detailed description of the project. It will slide up when you hover over the images.</p>
        </div>

      </div>

      <div className='ProyectContainer'>
        
        <div className='image-container'>
          <img src={travelDevs} alt="tracker laptop" className='trackerLaptop' />
          <img src={travelDevsMovile} alt="tracker movile" className='trackerMovile' />
        </div>


        {/* Div que contiene la información del proyecto */}
        <div className="project-info">
            
          <div>
            <h3 className='proyectNameDevs'>Travel Devs</h3>
            <p className='proyectDevs'>{t('proyectos.descripcion')}:</p>
            <p className='proyectDevs'>{t('proyectos.descripcionDev')} </p>
            <p className='proyectDevs'>{t('proyectos.flujo')}</p>
            <p className='proyectDevs'>{t('proyectos.relevancias')}</p>
            <p className='proyectDevs'>{t('proyectos.responsive')}</p>
           
          </div>

          <div className='travelTechContainer'>

            <h5 className='techTitle'>{t('proyectos.tecnologias')}:</h5>

            <div className='logosContainer'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='logos'/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className='logos' />
            </div>
            <div className='logosContainer2'>  
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" className='logos' />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" className='logos' />
           
            </div>

          </div>

        </div>

        <div className="project-infoBajo">
          
          <a href="https://github.com/LeonardoRiera/CreaTuLanding-Riera.git" target='blank' className='gato'><i class="devicon-github-original gato"></i></a>
          
        </div>

      </div>

     
      
    </div>
  )
}

export default Proyects