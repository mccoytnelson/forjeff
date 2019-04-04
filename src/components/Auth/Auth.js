import React, { Component } from 'react'
import axios from 'axios'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/actions'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showLogout: false,
      showRegister: false
    }
  }
  
// Auth is in control of what is being rendered based on if a user is logged in or logged out

  

  toggleLogin = () => {
    this.setState({showLogin: !this.state.showLogin});
  }
  toggleLogout = () => {
    this.setState({showLogout: !this.state.showLogout});
  }
  toggleRegister = () => {
    this.setState({showRegister: !this.state.showRegister});
  }


  componentDidMount() {
    this.checkForUser()
  }

  checkForUser = async () => {
    console.log('hit')
    const { id } = this.props
    if (!id) {
      try {
        let res = await axios.get('/api/auth/current-user')
        this.props.upload_data(res.data)
        this.toggleLogin()
        this.toggleLogout()
      } catch (err) {
        this.toggleLogin()
        console.log(err)
      }
    }
  }
  

  

  render(){
    return(
      <div className='auth'>
        {this.props.username === '' 
        ?
          <div>
            {this.state.showLogin && 
              <Login 
                toggleLogin={this.toggleLogin} 
                toggleRegister={this.toggleRegister} 
                toggleLogout={this.toggleLogout}
              />
            }
            {this.state.showRegister && <Register 
            toggleLogin={this.toggleLogin}
            toggleRegister={this.toggleRegister}
            toggleLogout={this.toggleLogout}/>}
          </div>
        :
          <div>
            {this.state.showLogout && <Logout 
            toggleLogin={this.toggleLogin}
            toggleLogout={this.toggleLogout}/>}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    id: reduxState.id,
    username: reduxState.username
  }
}

const mapDispatchToProps = (dispatch) => ({ upload_data })


export default connect(mapStateToProps, mapDispatchToProps)(Auth)