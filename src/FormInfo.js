import React, { Component } from 'react'

export class FormInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: 'fullname'
       
    }
  }
  


  
  render() {
    return (
      <div className='App' >
        <h3>{this.props.message}</h3>
        
        

        
      </div>
    )
  }
}

export default FormInfo;
