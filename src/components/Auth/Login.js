import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { upload_data } from '../../ducks/actions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: ''
    }
  }

  // Login is responsible for displaying the login and register if a user is not logged in

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onInputChange(input, val) {
    this.setState({
      [ input ]: val
    })
  }

  onLogin = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/api/auth/login', user)
      console.log(res.data)
      this.props.upload_data(res.data)
      this.props.toggleLogin()
      this.props.toggleLogout()
      console.log(res)
    } catch (err) {
      console.log(err)
      alert('incorrect username or password')
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <Button onClick={this.onLogin}>Login</Button>
        <Button onClick={this.onLogin}>Register</Button>
        {/* <Dialog>
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Content text
        </DialogContentText>
            <TextField
              onChange={ e => this.onInputChange('username', e.target.value) }
              autoFocus
              margin="dense"
              label="Username"
              type="email"
              value={ username }
              fullWidth>

            </TextField>
          </DialogContent>
        </Dialog> */}


{/**
* ! below is functionality for original login / register
*/}

        {/* <h5>Login</h5>
        <input placeholder='Username..'
          value={ username }
          onChange={ e => this.onInputChange('username', e.target.value) }></input>
        <input placeholder='Password..'
          value={ password }
          type='password'
          onChange={ e => this.onInputChange('password', e.target.value) }></input>

        <div>
          <button onClick={ this.onLogin }>Login</button>
          <p>or</p>
          <button onClick={ () => { this.props.toggleLogin(); this.props.toggleRegister() } }>Register</button>
        </div> */}

      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({ upload_data })

export default connect('', mapDispatchToProps)(Login)