// Code EyesOnMe Component Here


import React, { Component } from 'react'

class EyesOnMe extends Component {

  logFocus = () => {
    console.log("Good!")
  }
  logBlur = () => {
    console.log("Hey! Eyes on me!")
  }


  render() {
    return (
      <button onFocus={this.logFocus} onBlur={this.logBlur} >FOCUS!</button>
    )
  }

}

export default EyesOnMe