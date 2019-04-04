import React, { Component } from 'react'
import Auth from '../Auth/Auth'
import Idp_web_docs from '../../icons/idp_web-docs.png'
// import everyoneCanCode from '../../icons/everoneCanCode.jpg'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to='/'><img className='logo' src={ Idp_web_docs } alt='Elephant Logo'></img></Link>
        {/* <img className='banner' src={everyoneCanCode} alt='banner'></img> */}
        <p className='title'>
          idp_web_docs
          <span className='subtitle'>Welcome Scrub</span>
        </p>
        <Auth />

      </div>
    )
  }
}
