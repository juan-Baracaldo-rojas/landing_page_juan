import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Juan Manuel Baracaldo Rojas</h1>
            <i class="fa-sharp fa-solid fa-location-dot"> Sogamoso, Boyaca</i>
        </div>
        <div className='footer-contact'>
        <i class="fa-solid fa-phone"> Contactame</i>
            <p>Y comencemos a trabajar</p>
        </div>
        <div className='footer-sns'>
            <div className='desing-by' id="desing">Design By Juan Manuel Baracaldo Rojas</div>
            
            <div className='sns-links'>
                <a href="https://www.linkedin.com/in/jm-baracaldo/" target="_blank" rel='noreferrer' >
                    <i class="fab fa-linkedin-in linkedin"></i>
                </a>
                <a href="https://github.com/juan-Baracaldo-rojas" target="_blank" rel='noreferrer'>
                    <i class="fab fa-github github"></i>
                </a>
                
            </div>
        </div>
        </footer>
  )
}

export default Footer