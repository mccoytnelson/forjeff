import React from 'react'
import CategoryFind from './FindDocs/CategoryFind'
import TopicFind from './FindDocs/TopicFind'
import SubtopicFind from './FindDocs/SubtopicFind'

export default function ConditionalRenderingComponents(props) {

  const { category, topic, subtopic } = props.match.params

  if (category && topic && subtopic) {
    console.log('hit subtopic')
    return (
      <SubtopicFind />
    )
  } else if (category && topic) {
    console.log('hit topic')
    return (
      <TopicFind />
    )
  } else {
    console.log('hit category')
    return <CategoryFind />
  }
}