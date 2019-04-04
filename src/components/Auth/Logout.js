import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/actions'



class Logout extends Component {
  // Logout is responsible for rendering the login component if a user clicks logout 

  onLogout = async () => {
    await axios.post('/api/auth/logout')
    this.props.upload_data({
      id: 0,
      username: '',
      email: ''
    })
    this.props.toggleLogin()
    this.props.toggleLogout()
  }


  render() {
    return (
      <div>
        <h5>Logout</h5>
        <button onClick={ this.onLogout }>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ upload_data })

export default connect('', mapDispatchToProps)(Logout)