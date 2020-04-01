// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    onFocus = () => {
        console.log('Good!')
    }

    OnBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.onFocus} onBlur={this.OnBlur}></button>
            </div>
        )
    }
}

export default EyesOnMe;
