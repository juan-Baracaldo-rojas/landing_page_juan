import React from 'react';
import "./Navbar.css";
import Logo from "../../media/Logo_2.png"
const Navbar = ({ isScrolling}) => {
    const toTheTop= () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop}>
            <img src={Logo} alt="Logo"></img>
        </div> 
    </nav>
  )
}

export default Navbar;