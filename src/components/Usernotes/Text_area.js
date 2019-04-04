import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { createNote } from '../../ducks/actions'

class Text_area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note_category: '',
      note_topic: '',
      note_subtopic: '',
      note: '',
      user_notes: []
    }
  }

  onInputChange(input, val) {
    this.setState({
      [ input ]: val
    })
  }

  onClickSave() {
    this.props.createNote()
  }

  render() {
    const { user_notes } = this.state
    return (
      <div className='textarea_border'>
        <div>
          <input
            className='title_text_area' placeholder='Category'
            value={ user_notes }
            onChange={ e => this.onInputChange('user_notes', e.target.value) }
          ></input>
          <input placeholder='Topic'></input>
          <input placeholder='Subtopic'></input>
        </div>
        <br />
        <textarea placeholder='Write a note you fool.. ¯\_(ツ)_/¯'>
        </textarea>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    user_notes: reduxState.user_notes,
    note_category: reduxState.note_category,
    note_topic: reduxState.note_topic,
    note_subtopic: reduxState.note_subtopic,
    note: reduxState.note
  }
}

const mapDispatchToProps = { createNote }

export default connect(mapStateToProps, mapDispatchToProps)(Text_area)