import React from 'react';
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import "./footer.css";


function Footer() {
  return (
    <div id="footer" className="footer">
      <h1>LOCATIONS</h1>
      <div className="locations">
        <div id="east">
          <h2>SHARKY'S EAST</h2>
          
          <p> 545 Highland Ave</p>
          <p>Clifton, NJ 07011</p>
          <p>(973) 473-0713</p>
          <h3>
            <a href="https://www.facebook.com/sharkyswings44/" >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/sharkyswingsclifton/?hl=en" >
              <img src={Instagram} alt="Instagram" />
            </a>
          </h3>
        </div>
        <div id="west">
          <h2>SHARKY'S WEST</h2>
          
          <p>108 Boonton Ave</p>
          <p>Boonton, NJ 07005 </p>
          <p>(973) 917-4466</p>
          <h3>
            <a href="https://www.facebook.com/SharkysWest/" >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/sharkyswestnj/" >
              <img src={Instagram} alt="Instagram" />
            </a>
          </h3>
        </div>
        <div id="alpha">
          <h2>SHARKY'S ALPHA</h2>
          
          <p> 431 3rd Ave</p>
          <p> Alpha, NJ 08865</p>
          <p>(908) 777-3610</p>
          <h3>
            <a href="https://www.facebook.com/sharkysalpha/" >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/sharkyswingsalpha/" >
              <img src={Instagram} alt="Instagram" />
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}


export default Footer;

// social icon idea came from http://jaketrent.github.io/react-social-icons/