import React, { Component } from "react";

class Keypad extends Component {
  handleEvent = () => {
    console.log("Entering password...");
  };

  render() {
    console.log("hi");
    return (
      <div>
        <input type="password" onKeyUp={this.handleEvent}></input>
      </div>
    );
  }
}

export default Keypad;
