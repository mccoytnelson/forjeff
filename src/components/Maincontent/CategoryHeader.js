import React, { Component } from 'react'

export default class CategoryHeader extends Component {
 

  render() {
    return (
      <div className='categoryHeader'>
        
        <h1>Welcome to { this.props.category }</h1>
      </div>
    )
  }
}

