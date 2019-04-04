import React, { Component } from 'react'


export default class SubtopicView extends Component {


  render() {
    const { subtopic } = this.props
    console.log(subtopic)
    return (
      <div className='subtopicView'>

      {!subtopic ? null : 
      <>
        <h1>
          { subtopic.subtopic }
        </h1>
        {subtopic.subtopic_description ? <><br />
        
        <p>
          { subtopic.subtopic_description }
        </p>
       
        <br /></> : null }
        <p>
          { subtopic.example }
        </p>
        <br />
        syntax
        <br />
        { subtopic.syntax }
        <br />
        {/* <br /> */ }
        { subtopic.syntax_explaination }
         <br />
        { subtopic.subtopic_description }
        {/* <br /> */ }
        { subtopic.example }
        </>
      }


      </div>
    )
  }
}