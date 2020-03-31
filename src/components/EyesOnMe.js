import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focusFunc = () => {
        console.log("Good!")
    }

    blurFunc = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div id="another">
            <button onFocus={this.focusFunc} onBlur={this.blurFunc}>Poop</button>
            </div>

        )
        }
}
