// Code Keypad Component Here


import React, { Component } from 'react'

class Keypad extends Component {

  logger = () => {
    console.log('Entering password...')
}

  render() {
    return (
      <input onKeyUp={this.logger} type="password" />
    )
  }

}

export default Keypad