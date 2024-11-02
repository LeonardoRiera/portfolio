import React from 'react'
import './Footer.css'
import circulo from '../../image/circulo.png'

const Footer = () => {
  return (
    <div className='footerContenedor'>

        <div className='row'>
        
            <div className="col12">
                <p className='contactame'>Contactame!</p>
            </div>

        </div>

        <div className='row'>

            <div className="col-4">
                <img src={circulo} alt="" className='circuloFooter' />
            </div>

            <div className="col-4"></div>

            <div className="col-4 tercerContainer">

                <p className='footerTitulo'>Leo</p>

            </div>

        </div>
       

    </div>
  )
}

export default Footer