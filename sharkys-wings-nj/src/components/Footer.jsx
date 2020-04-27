import React from 'react';
import { SocialIcon } from 'react-social-icons';
import  "./footer.css";


function Footer() {
    return (
      <div id="footer" class="footer">
      <h1>LOCATIONS</h1>
        <div class="locations">
            <div id="east">
            <h2>SHARKY'S EAST</h2>
               <p> 545 Highland Avenue</p>
               <p>Clifton, NJ 07011</p>
               <p>(973) 473-0713</p>
                <h3>
                <SocialIcon url="https://www.facebook.com/sharkyswings44/" />
                <SocialIcon url="https://www.instagram.com/sharkyswingsclifton/?hl=en" />
                </h3>
                </div>
                <div id= "west">
                  <h2>SHARKY'S WEST</h2>
                  <p>108 Boonton Ave</p>
                  <p>Boonton, NJ 07005 </p>
                  <p>(973) 917-4466</p>
                  <h3>
                  <SocialIcon url="https://www.facebook.com/SharkysWest/" />
                  <SocialIcon url="https://www.instagram.com/sharkyswestnj/" />
                  </h3>
                </div>
                <div id="alpha">
            <h2>SHARKY'S ALPHA</h2>
            <p> 431 3rd Avenue</p>
            <p> Alpha, NJ 08865</p>
            <p>(908) 777-3610</p>
            <h3>
            <SocialIcon url="https://www.facebook.com/sharkysalpha/" />
            <SocialIcon url="https://www.instagram.com/sharkyswingsalpha/" />
            </h3>
                </div>
            </div>
            </div>
    );
  }


export default Footer;

// social icon idea came from http://jaketrent.github.io/react-social-icons/