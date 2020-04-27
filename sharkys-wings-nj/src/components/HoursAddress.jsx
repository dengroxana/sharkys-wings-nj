import React from "react";
import "./HoursAddress.css";

function HoursAddress() {
  return (
    <>
    <div id="hours"></div>
    <div className="hoursBg">
      <div className="info">
        <div className="hours">
          <h2>Hours</h2>
          <p>Sunday - Thursday:<br />11am - Close</p>
          <p>Friday - Saturday:<br />11am - 2am</p>
        </div>
        <div className="address">
          <h2>Address</h2>
          <p>108 Boonton Ave.<br />Boonton, NJ 07005</p>
          <p>(973)-917-4466</p>
        </div>
      </div>
      </div>
      </>
  );
}
export default HoursAddress;
