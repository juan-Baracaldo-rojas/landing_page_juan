import React from 'react'
import "./Language.css"
import LanguageImg from "../../media/languages.png"

const Language = () => {
  return (
    <div className='language-container'>
        <div className='language-desc'>
            <h1>Lenguajes Conocidos</h1>
        </div>
        <div className='language-img'>
            <img src={LanguageImg} alt="lenguage"></img>
        </div>
    </div>

  )
}

export default Language