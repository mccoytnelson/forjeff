// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// import Login from './Login'
// import Logout from './Logout'
// import Register from './Register'

// export default class FormDialog extends React.Component {
//   state = {
//     open: false,
//     showLogin: false,
//     showLogout: false,
//     showRegister: false
//   };

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   toggleLogin = () => {
//     this.setState({ showLogin: !this.state.showLogin });
//   }
//   toggleLogout = () => {
//     this.setState({ showLogout: !this.state.showLogout });
//   }
//   toggleRegister = () => {
//     this.setState({ showRegister: !this.state.showRegister });
//   }

//   render() {
//     const { username, password } = this.state
//     return (
//       <div>
//         {/* <Button variant="outlined" color="primary" onClick={ this.handleClickOpen }>
//           Login
//         </Button>
//         <Dialog
//           open={ this.state.open }
//           onClose={ this.handleClose }
//           aria-labelledby="form-dialog-title"
//         >
//           <DialogTitle id="form-dialog-title">Login</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Login to idp_web_docs to create and save your notes!
//             </DialogContentText>
//             <TextField
//               onChange={ e => this.onInputChange('username', e.target.value) }
//               autoFocus
//               margin="dense"
//               label="Username"
//               type="email"
//               value={ username }
//               fullWidth
//             />
//             <TextField
//               onChange={ e => this.onInputChange('password', e.target.value) }
//               autoFocus
//               margin="dense"
//               label="Password"
//               type="password"
//               value={ password }
//               fullWidth
//             />
//           </DialogContent>

//           <DialogActions>
//             <Button onClick={ this.handleClose } color="primary">
//               Cancel
//             </Button>
//             <Button onClick={ this.handleClose } color="primary">
//               Login
//             </Button>
//             <DialogContentText>
//               OR
//           </DialogContentText>
//             <Button color="primary">
//               Register
//             </Button>
//           </DialogActions>
//         </Dialog> */}
//         <div className='auth'>
//           { this.props.username === ''
//             ?
//             <div>
//               { this.state.showLogin &&
//                 <Login
//                   toggleLogin={ this.toggleLogin }
//                   toggleRegister={ this.toggleRegister }
//                   toggleLogout={ this.toggleLogout }
//                 />
//               }
//               { this.state.showRegister && <Register
//                 toggleLogin={ this.toggleLogin }
//                 toggleRegister={ this.toggleRegister }
//                 toggleLogout={ this.toggleLogout } /> }
//             </div>
//             :
//             <div>
//               { this.state.showLogout && <Logout
//                 toggleLogin={ this.toggleLogin }
//                 toggleLogout={ this.toggleLogout } /> }
//             </div>
//           }
//         </div>
//       </div>
//     );
//   }
// }