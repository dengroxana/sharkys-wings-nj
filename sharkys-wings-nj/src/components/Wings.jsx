import React from "react";
import "./Wings.css";

function Wings() {
  return (
    <div className="menuList">
      <div className="wing-container">
        <div className="col">10 piece</div> <div className="dots"></div>{" "}
        <div className="col">$11.99</div>
      </div>
      <div className="wing-container">
        <div className="col">16 piece</div> <div className="dots"></div>{" "}
        <div className="col">$15.99</div>
      </div>
      <div className="wing-container">
        <div className="col">25 piece</div> <div className="dots"></div>{" "}
        <div className="col">$24.99</div>
      </div>
      <div className="wing-container">
        <div className="col">50 piece</div> <div className="dots"></div>{" "}
        <div className="col">$48.99</div>
      </div>
      <div className="wing-container">
        <div className="col">100 piece</div> <div className="dots"></div>{" "}
        <div className="col">$85.99</div>
      </div>
      <div className="sauces">
        <h2>Sauces</h2>
        <div className="sauceList">
          <div className="row">
            <div className="column">
              <ul>
                <div className="first">
                  <li>Mild</li>
                  <li>Med</li>
                  <li>Ex-Hot</li>
                  <li>On-Fire</li>
                  <li>Hell</li>
                  <li>BBQ</li>
                  <li>Teriyaki</li>
                  <li>Oriental</li>
                  <li>Honey Mustard</li>
                  <li>Caesar</li>
                </div>
                <div className="second">
                  <li>Maryland</li>
                  <li>Thai Chili</li>
                  <li>Old Bay</li>
                  <li>Blackened Lemon Pepper</li>
                  <li>Salt & Vinegar</li>
                  <li>Boom Boom</li>
                  <li>Bourbon</li>
                  <li>Honey BBQ</li>
                  <li>Honey Chipotle</li>
                  <li>Parmesan</li>
                </div>
                <div className="third">
                  <li>Honey Garlic</li>
                  <li>Raspberry</li>
                  <li>Sriracha</li>
                  <li>General Tso</li>
                  <li>Smokehouse Maple</li>
                  <li>Everything Bagel</li>
                  <li>Chipotle Cinnamon Dry Rub</li>
                  <li>Chili Lime</li>
                  <li>Peppercorn</li>
                  <li>Mango Habanero</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="additions">
        Add fresh garlic to your favorite sauce for additional cost <br />
        <br /> Blue cheese, celery, carrots or extra sauce for additional $0.50
      </p>
    </div>
  );
}
export default Wings;
