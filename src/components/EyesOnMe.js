// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component{
    focusHandler = () => {console.log('Good!')}
    blurHandler = () => {console.log('Hey! Eyes on me!')}
    render(){
        return(
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler} >
                Eyes on Me
                </button>
            </div>
        )
    }

}

export default EyesOnMe

