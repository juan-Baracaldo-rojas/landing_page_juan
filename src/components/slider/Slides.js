import React from "react";
import Proyecto_1 from "../../media/Proyecto_1.jpg"
import Proyecto_2 from "../../media/Proyecto_2.jpg"
import Proyecto_3 from "../../media/Proyecto_3.jpg"
import Proyecto_4 from "../../media/Proyecto_4.jpg"
const slidesInfo=[
    {
        href:"https://github.com/juan-Baracaldo-rojas/Pagina-continentes",
        src:Proyecto_1,
        alt:"Proyecto 1",
        desc:"8 Nov 2021 - 30 Nov 2021"
    },
    {
        href:"https://github.com/juan-Baracaldo-rojas/EJEMPLO_EPS",
        src:Proyecto_2,
        alt:"Proyecto 2",
        desc:"11 May 2021 - 30 Nov 2021"
    },
    {
        href:"https://github.com/juan-Baracaldo-rojas/buscador-precios",
        src:Proyecto_3,
        alt:"Proyecto 3",
        desc:"11 May 2021 - 30 Nov 2021"
    },
    {
        href:"https://github.com/juan-Baracaldo-rojas/Landing-Page-JM",
        src:Proyecto_4,
        alt:"Proyecto 3",
        desc:"11 Sep 2021 - 30 Nov 2021"
    },
]
const slides=slidesInfo.map(slide =>(
    <div className='slide-container'>
        <a href={slide.href}><img src={slide.src} alt={slide.alt}></img></a>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides