import React from 'react'

export default class Keypad extends React.Component {

    render () {
        return <input type="password" onKeyUp={(event) => {console.log('Entering password...', event)}}/>
    }
}