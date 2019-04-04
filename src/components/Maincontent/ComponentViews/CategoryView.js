import React, { Component } from 'react'


export default class SubtopicView extends Component {


  render() {
    const { category } = this.props
    console.log(category)
    return (
      <div className='categoryView'>
        {category.category}
        <br />
        { category.category_description }
      </div>
    )
  }
}