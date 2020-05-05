import React, { Component } from 'react';
import logo from "../images/logo.png";
import "./NavBar.css";



class NavBar extends Component {

  constructor() {
    super()
    this.state = {
      name: "container",
      display:'none'
    }
  }
  
  Burger = () => {
    if (this.state.name === "container") {
      this.setState({
        name: "change",
        display:'block'
      }
      )
    }
    else if (this.state.name === "change") {
      this.setState({
        name: "container",
        display:'none'
      }
      )
    }
  }

  
  
  render() {
    return (
      <div>
        <div id="nav">
          {/* <a href="#"><img src={logo} alt="logo" className="sharkyLogo" /></a>   */}
          <div id="links" style={{display: this.state.display}} >
            <a href="#hours"><h2>Hours</h2></a>
            <a href="#specials"><h2>Specials</h2></a>
            <a href="#menu"><h2>Menu</h2></a>
            <a href="#footer"><h2>Location</h2></a>
          </div>
          <div className={this.state.name} onClick={this.Burger}>
          <div className="ham">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          </div>
        </div>
        <div className="default">
          <a href="#hours"><h2>HOURS</h2></a>
          <a href="#specials"><h2>SPECIALS</h2></a>
          <img src={logo} alt="logo" className="sharkyLogo" />
          <a href="#menu"><h2>MENU</h2></a>
          <a href="#footer"><h2>LOCATION</h2></a>
        </div>

  
        </div>
  

      </div>
    )
  }
  
}


export default NavBar