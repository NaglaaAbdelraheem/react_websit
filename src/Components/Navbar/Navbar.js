import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';



const Nav =()=>{
    return(
    <>
    <nav>
    <a href="#" className="logo"><img src={('./images/logo.png')} /></a>
    <a href="#" className="login"><img src={('./images/Vector.svg')} /></a>
    
    </nav>
    </>
    );
}
export default Nav;
