// Header.jsx

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Header.css';
import triangulo from '../../image/triangulo.png';

const Header = () => {
 
  return (
    <div className="HeaderContainer">

      <div class="container">
    
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
