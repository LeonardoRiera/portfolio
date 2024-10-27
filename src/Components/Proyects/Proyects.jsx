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

      
      {/* tracker */}
      <div className='ProyectContainer'>
        
        <div className='image-container'>
          <img src={tracker} alt="tracker laptop" className='trackerLaptop' />
          <img src={trackerMovile} alt="tracker movile" className='trackerMovile' />
        </div>


        {/* Div que contiene la información del proyecto */}
        <div className="project-info">
          <div>
            <h3 className='proyectNameTracker'>Tracker</h3>
            <p className='proyectDevs1'>{t('tracker.descripcion')}:</p>
            <p className='proyectDevs'>{t('tracker.descripcionDev')} </p>
            <p className='proyectDevs'>{t('tracker.flujo')}</p>
            <p className='proyectDevs'>{t('tracker.relevancias')}</p>
            <p className='proyectDevs'>{t('tracker.responsive')}</p>
           
          </div>
          <hr />
          <div className='travelTechContainer'>

            <h5 className='techTitle'>{t('proyectos.tecnologias')}:</h5>

            <div className='logosContainer'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg " className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" className='logos' />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" className='logos' />
    
            </div>
            

          </div>
        </div>

        <div className="project-infoBajo">
          
          <a href="https://github.com/LeonardoRiera/trackLanding.git" target='blank' className='gatoTracker'><i class="devicon-github-original gatoTracker"></i></a>
          
        </div>
        
      </div>



      {/* imperio tickets */}
      <div className='ProyectContainer'>
        
        <div className='image-container'>
          <img src={imperio} alt="tracker laptop" className='trackerLaptop2' />
          <img src={imperioMovile} alt="tracker movile" className='trackerMovile2' />
        </div>


        {/* Div que contiene la información del proyecto */}
        <div className="project-info2">
          <div>
            <h3 className='proyectNameImperio'>Imperio Ticket</h3>
            <p className='proyectDevs1'>{t('imperioTickets.descripcion')}:</p>
            <p className='proyectDevs'>{t('imperioTickets.descripcionDev')} </p>
            <p className='proyectDevs'>{t('imperioTickets.flujo')}</p>
            <p className='proyectDevs'>{t('imperioTickets.relevancias')}</p>
            <p className='proyectDevs'>{t('imperioTickets.responsive')}</p>
          </div>
          <hr />
          <div className='travelTechContainer2'>

            <h5 className='techTitle'>{t('proyectos.tecnologias')}:</h5>

            <div className='logosContainer3'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='logos'/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className='logos' />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className='logos' />
            </div>
            <div className='logosContainer4'>  
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" className='logos' />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" className='logos' />
           
            </div>

          </div>

        </div>

        <div className="project-infoBajo">
          
          <a href="https://github.com/LeonardoRiera/IMPERIOtickets.git" target='blank' className='gatoImperio'><i class="devicon-github-original gatoImperio"></i></a>
          
        </div>
        

      </div>




      {/* travel devs */}
      <div className='ProyectContainer'>
        
        <div className='image-container'>
          <img src={travelDevs} alt="tracker laptop" className='trackerLaptop' />
          <img src={travelDevsMovile} alt="tracker movile" className='trackerMovile' />
        </div>


        {/* Div que contiene la información del proyecto */}
        <div className="project-info">
            
          <div className='proyectsTextContain'>
            <h3 className='proyectNameDevs'>Travel Devs</h3>
            <p className='proyectDevs1'>{t('proyectos.descripcion')}:</p>
            <p className='proyectDevs'>{t('proyectos.descripcionDev')} </p>
            <p className='proyectDevs'>{t('proyectos.flujo')}</p>
            <p className='proyectDevs'>{t('proyectos.relevancias')}</p>
            <p className='proyectDevs'>{t('proyectos.responsive')}</p>
           
          </div>
          <hr />
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