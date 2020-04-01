// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {

    inputPasswordHandler = () => {
        return console.log('Entering password...')
    }
    
    render() {
        return (
        <div>
            <input type="password" onKeyUp={this.inputPasswordHandler}/>
        </div>
        )
    }
}

export default Keypad;
