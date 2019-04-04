import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/actions'


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  onRegister = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    try {
      let res = await axios.post('/api/auth/register', user)
      // console.log(res)
      this.setState({
        username: '',
        password: '',
        email: ''
      })
      this.props.upload_data(res.data)
      this.props.toggleLogout()
      this.props.toggleRegister()
    } catch (err) {
      console.log(err)
      alert('Username has been taken')
    }
  }

  onInputChange(input, val) {
    this.setState({
      [ input ]: val
    })
  }

  render() {
    const { username, password, email } = this.state
    return (
      <div>
        <h5>Register</h5>
        <input placeholder='Username..'
          value={ username }
          onChange={ e => this.onInputChange('username', e.target.value) }></input>
        <input placeholder='Password..'
          value={ password }
          type='password'
          onChange={ e => this.onInputChange('password', e.target.value) }></input>
        <input placeholder='Email..'
          value={ email }
          onChange={ e => this.onInputChange('email', e.target.value) }></input>
        <div>
          <button onClick={ this.onRegister }>Register</button>  
          <p>or</p>
          <button onClick={ () => {this.props.toggleLogin();this.props.toggleRegister()} }>Login</button>
        </div>
      </div>
    )
    
  }
}


const mapDispatchToProps = (dispatch) => ({ upload_data })

export default connect('', mapDispatchToProps)(Register)