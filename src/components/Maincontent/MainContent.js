import React, { Component } from 'react'
import axios from 'axios'
import CategoryHeader from './CategoryHeader'
import Sidebar from './Sidebar';
import ConditionalRenderingComponents from './ConditionalRenderingComponents'

export default class Main_content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      showSidebar: false
    }
  }


  componentDidMount() {
    this.categorySelector()
  }

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar })
  }

  // This method is responsible for selecting the category that the user clicked on from the mainpage icons

  categorySelector = () => {
    const { category } = this.props.match.params
    console.log({ category })
    axios.get(`/api/docs/${category}`)
      .then(res => {
        this.setState({
          category: res.data
        })
      })
  }

  // componentDidUpdate expects prevProps as an argument. Therefore the condition must be in componentDidUpdate instead of the categoryUpdater method

  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params
    if (category !== prevProps.match.params.category) {
      this.categoryUpdater()
    }
  }


  categoryUpdater = () => {
    const { category } = this.props.match.params
    axios.get(`/api/docs/${category}`)
      .then(res => {
        this.setState({
          category: res.data
        })
      })
  }


  render() {
    console.log(this.state.category)
    const { category, topic, subtopic } = this.props.match.params

    return (
      <div>
        <CategoryHeader
          category={category}
        />

        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
          category={category}
          topic={topic}
          subtopic={subtopic}
        />


        <ConditionalRenderingComponents
          {...this.props}
        />


      </div>
    )
  }
}










