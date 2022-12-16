import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return <div className='cover-container'>
    <video className='video' src={coverVideo} autoPlay loop muted >   </video>
        <h1>Desarrollador Python</h1>
        <h2>Juan Manuel Baracaldo Rojas</h2>
        <p>Proyectos | Mision | Vision | Biografia | Datos </p>

  </div>;
};

export default Cover;