import React from 'react'
import about_me from "../../media/about_me.jpeg"
import "./About.css"
const about = () => {
  return (
    <div className='about-container'>
       
        <div className='about-desc'>
            <h3>Hola Soy Juan</h3>
            <p id="inicio"> Soy una persona apasionada a la programación desde que la conocí 
            en la universidad donde realice algunas páginas web, entre otros proyectos con 
            lenguajes como Python y Java como verás en mi portafolio, también he trabajado con 
            frameworks como Django y React, he aprendido sobre sistemas distribuidos, 
            bases de datos relacionales y no relacionales, inteligencia artificial, machine learning,
            estadística, metodología de trabajo, la mayoría de mi trabajo ha sido en Python y en 
            el desarrollo de páginas web.</p>
            <p id="fin"> Soy tambien un adicto a la mejora continua desde que conoci la filosofia del 
                estoicismo, filosofia que recomiendo y resalto como una de las 
                mejores formas de pensar. <strong>TE LA RECOMIENDO!!</strong></p>
        </div>
        <div className='about-img'>
            <img src={about_me} alt='about'></img>
        </div>
        
    </div>
  )
}

export default about