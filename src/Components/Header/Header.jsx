import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../Contexts/LanguageContext.jsx';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import './Header.css';
import circulo from '../../image/circulo.png';
import triangulo from '../../image/triangulo.png'  
import caminante from '../../image/caminante.png'



const Header = () => {
  
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);  


  const [scrollY, setScrollY] = useState(0);
  // Actualiza el estado cuando haces scroll
  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aplica la rotación basada en la posición de scroll
  const styles = useSpring({
    transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.2}deg)` // Ajusta el valor para cambiar la velocidad de rotación
  }); 



  return (

    <div className='HeaderContainer'>

      {/* <img src={triangulo} alt="" className='red'  /> */}
      
      <animated.img
                src={triangulo} 
                alt="Triángulo"
                style={styles}
                className="red"
       />


    
       
    </div>
  );
}

export default Header