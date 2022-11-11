import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  }

  render() {
    const { keys } = this.state;

    return (
      <div className='App'>
        <div className='pad'>
          {keys.map((key, index) => (
              <Button text={key} key={index}/>
          ))}
        </div>
      </div>
    )
  }
}

const Button = (props) => (
  <div className='button'>
    {props.text}
  </div>
);

