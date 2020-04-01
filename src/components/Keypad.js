// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  constructor(props) {
    super(props);
  }

  
keyUpFunction = (event) => {
    console.log('Entering password...')
}

render() {
  return (
    <div><input onKeyUp={this.keyUpFunction} type="password" /></div>
  );
}
}

Keypad.propTypes = {

};
Keypad.defaultProps = {

};

