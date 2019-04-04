import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryView from '../ComponentViews/CategoryView'


class CategoryFind extends Component {


  render() {
    const { docs } = this.props
    const { category } = this.props.match.params
    
    const CategoryDoc = docs.find(i => i.category === category);

    return (
      <div>
        <CategoryView
          category={ CategoryDoc }

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

export default withRouter(connect(mapStateToProps)(CategoryFind))

