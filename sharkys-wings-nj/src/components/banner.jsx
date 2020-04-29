import React from 'react';
import hero from "../images/beer_hero.png";
import  "./banner.css";



function Banner () {


return (
  <div>
    <div className="banner">
      <div className="imgOverlay"></div>
      <div className="text-banner">
        <p className="text-ban">BEERS, BUDS, BITES</p>
        <button className="ban-but">Order Now</button>
    </div>
    </div>
  </div>
)

}

export default Banner