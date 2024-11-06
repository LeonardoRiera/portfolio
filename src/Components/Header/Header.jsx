// Header.jsx

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Header.css';
import triangulo from '../../image/triangulo.png';

const Header = () => {
 
  return (
    <div className="HeaderContainer">
      <div className='col-6 textoHeaderContainer'>
        <p className='portfolioTitulito'>Portfolio</p>
        <h1 className='textoPrincipal'><span className='hache'>H</span>ola! Soy<br /> <span className='nombre'>Leonardo</span><span className='apellido'> Riera</span></h1>
        <p className='profesion'>Programador <span className='profesionPropia'>FRONTEND</span> y <span className='profesionPropia'>DISEÑADOR GRÁFICO</span> </p>
        <p className='cvBoton'>Descargar Cv</p>
      </div>

      <div class="col-6 container">
    
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
