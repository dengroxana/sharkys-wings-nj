import React from 'react';
import logo from "../images/logo.png";
import  "./NavBar.css";



function NavBar () {


return (
    <div id="nav">
    <a href="#hours"><h2>Hours</h2></a>
    <a href="#menu"><h2>Menu</h2></a>
    <a href="#"><img src={logo} alt="logo" class="sharkyLogo"/></a>
    <a href="#specials"><h2>Specials</h2></a>
    <a href="#footer"><h2>Location</h2></a>
    </div>
)

}

export default NavBar