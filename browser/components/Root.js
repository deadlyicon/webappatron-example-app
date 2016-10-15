import React, { Component } from 'react'
import reactPng from '../images/react.png'

export default class Root extends Component {
  render(){
    return <div>
      <ReactImage />
    </div>
  }
}


const ReactImage = () => (
  <div className="react-image" >
    <img src={reactPng} />
  </div>
)
