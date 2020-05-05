import React, { Component } from "react";
import "./BarMenu.css";
import SharkyTizers from "./SharkyTizers";
import Wings from "./Wings";
import Fries from "./Fries";
import RawBar from "./RawBar";

class BarMenu extends Component {
  constructor() {
    super();
    this.state = {
      showWings: true,
      showSharkytizers: false,
      showFries: false,
      showRawBar: false,
    };
  }

  clickWings = () => {
    this.setState({
      showWings: true,
      showSharkytizers: false,
      showFries: false,
      showRawBar: false,
    });
  };

  clickSharkytizers = () => {
    this.setState({
      showWings: false,
      showSharkytizers: true,
      showFries: false,
      showRawBar: false,
    });
  };

  clickFries = () => {
    this.setState({
      showWings: false,
      showSharkytizers: false,
      showFries: true,
      showRawBar: false,
    });
  };
  clickRawBar = () => {
    this.setState({
      showWings: false,
      showSharkytizers: false,
      showFries: false,
      showRawBar: true,
    });
  };

  render() {
    return (
      <>
        <div id="menu" className="barMenu">
          <h2>Bar Menu</h2>
          <div className="clickMenu">
            <p>
              <a
                href="http://www.sharkyswingsnj.com/west/printmenu.php"
                target="_blank"
              >
                Click Here </a>To See Our Full Dine-In Menu
            </p>
          </div>
          <div className="buttonMenu">
            <button className={this.state.showWings ? "active" : "nActive"} onClick={this.clickWings}>Wings</button>

            <button className={this.state.showSharkytizers ? "active" : "nActive"} onClick={this.clickSharkytizers}>Sharky-Tizers</button>

            <button className={this.state.showFries ? "active" : "nActive"}  onClick={this.clickFries}>Fries</button>

            <button className={this.state.showRawBar ? "active" : "nActive"}  onClick={this.clickRawBar}>Raw Bar</button>
          </div>
        </div>
        <div className="menuItems">
          {this.state.showWings ? <Wings /> : null}
          {this.state.showSharkytizers ? <SharkyTizers /> : null}
          {this.state.showFries ? <Fries /> : null}
          {this.state.showRawBar ? <RawBar /> : null}
        </div>
      </>
    );
  }
}

export default BarMenu;
