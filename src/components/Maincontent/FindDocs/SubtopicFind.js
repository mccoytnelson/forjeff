import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SubtopicView from '../ComponentViews/SubtopicView'


class SubtopicFind extends Component {


  render() {
    const { docs } = this.props
    const { subtopic } = this.props.match.params

    const SubtopicDoc = docs.find(i => i.subtopic === subtopic);
    
    return (
      <div>
        <SubtopicView 
        subtopic={SubtopicDoc}
        
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


export default withRouter(connect(mapStateToProps)(SubtopicFind))