import React from 'react';
import hero from "../images/beer_hero.png";
import  "./banner.css";



function Banner () {


return (
  <div>
    <div className="banner">
      <div className="imgOverlay"></div>
    </div>
    <div className="text-banner">
        <p className="text-ban">BEERS, BUDS, BITES</p>
        <a href="https://www.grubhub.com/restaurant/sharkys-wings--raw-bar-108-boonton-avenue-boonton/1334154" target="_blank"><button className="ban-but">Order Now</button></a>
    </div>
  </div>
)

}

export default Banner