import React from 'react'
import './Faja.css'
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

const Faja = () => {
    const { t, i18n } = useTranslation();

  return (
    <div className='contenedorPrincipal'>
        <div className='fajaContainer'>

            <Marquee direction="left" speed={100} gradient={false} className="marquee">
            
                <span className="marquee-item">{t(`faja.web`)}</span>
                <span className="dot">•</span>
                <span className="marquee-item">{t(`faja.movile`)}</span>
                <span className="dot">•</span>
                <span className="marquee-item">{t(`faja.grafic`)}</span>
                <span className="dot">•</span>
            
            </Marquee>
        </div>
    </div>
  )
}

export default Faja;
