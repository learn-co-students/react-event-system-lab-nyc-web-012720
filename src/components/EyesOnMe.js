// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor(props) {
    super(props);
  }

  focusHandler = (event) => {
      console.log('Good!')
  }

  blurHandler = (event) => {
    console.log('Hey! Eyes on me!')
}

  render() {
    return (
      <div>
          <button type="button"
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}>>
          Click Me!
          </button>
      </div>
    );
  }
}
EyesOnMe.propTypes = {

};
EyesOnMe.defaultProps = {

};

