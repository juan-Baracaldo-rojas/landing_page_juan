import React from 'react'
import mision_vision from "../../media/mision_vision.jpeg"
import "./Mision.css"
const Mision = () => {
  return (
    <div className="mision-vision-container">
      <div className='mision-vision-img'>
        <img src={mision_vision} alt="mision_vision" ></img>
      </div>
      <div className='mision-vision-desc'>
        
      <h3 id='first_title' >Mision</h3> 
          <p>Ayudar a la mayor cantidad de personas con sus problemas
            mediante soluciones tecnologicas de buena calidad en el transcurso 
            del proceso para ser uno de los mejores 
            Programadores de Colombia, respetando siempre mis 
            valores y los de los demas.                 
          </p>
      <h3 className='titles'>Valores</h3>
          <h4>RESPESTO, FAMILIA, LEALTAD, SINCERIDAD.</h4>
      <h3 className='titles'>Vision</h3>
          <p id='fin'>
            Ser un ingeniero reconocido por mi buen trabajo  
            siendo uno de los mejores programadores de Colombia,
            generando valor a las personas en mi camino, 
            adaptandose ante los posibles cambios.
          </p>
      </div>
    </div>
              
  )
}
// TODO redactar mision y vision
// TODO buscar imagenes mision y vision
// TODO crear un logo y vision


export default Mision