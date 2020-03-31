// Code EyesOnMe Component Here
import React from "react";

export default class EyesOnMe extends React.Component {
  focusing = () => {
    return console.log("Good!");
  };
  blurring = () => {
    return console.log("Hey! Eyes on me!");
  };
  render() {
    return (
      <button onFocus={this.focusing} onBlur={this.blurring}>
        Button
      </button>
    );
  }
}
