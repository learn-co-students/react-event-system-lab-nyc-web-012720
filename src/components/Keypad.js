import React, { Component } from 'react';

export default class Keypad extends Component {

    keyFunc = () => {
        console.log('Entering password...')
    }

   render() {
       return (
           <div id="pass">
               <input onKeyUp={this.keyFunc} type="password" />
           </div>
       )
   } 

}
