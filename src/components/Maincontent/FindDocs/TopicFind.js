import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TopicView from '../ComponentViews/TopicView'

class TopicFind extends Component {


  render() {
    const { docs } = this.props
    const { topic } = this.props.match.params
    console.log(docs.find(i => i.topic === topic))
    
    // filter using this.props.match.params
    // const filteredDocs = docs.filter(doc => {
    // })
    const TopicDoc = docs.find(i => i.topic === topic);
    console.log(333333333, TopicDoc)
    console.log(22222222, this.props)
    return (
      <div>
        <TopicView 
        topic={TopicDoc}
        
        />
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    docs: reduxState.docs
  }
}

export default withRouter(connect(mapStateToProps)(TopicFind))

