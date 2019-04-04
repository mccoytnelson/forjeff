import React, { Component } from 'react'


export default class SubtopicView extends Component {


  render() {
    console.log( 'topic view props',this.props)
    const { topic } = this.props
    console.log(topic, topic.topic_description)
    return (
      <div className='topicView'>
        <p>
        {topic.topic}
        </p>
       <br />
        { topic.topic_description }



      </div>
    )
  }
}