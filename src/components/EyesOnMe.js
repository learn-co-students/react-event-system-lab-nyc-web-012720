import React from 'react'

export default class EyesOnMe extends React.Component{

    render() {
        return(
            <button
                onFocus={event => {console.log('Good!', event)}}
                onBlur={event =>{console.log('Hey! Eyes on me!', event)}}
            >
            </button>
        )
    }
}