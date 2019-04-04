import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContent from './components/Maincontent/MainContent'
import Mainpage from './components/Mainpage/Mainpage'


export default (
  <Switch>
    <Route exact path='/' component={ Mainpage } />
    {/* <Route path='/docs/:category' component={Maincontent} /> 
    <Route path='/docs/:category/:topic' component={Maincontent} />  */}
    <Route path='/docs/:category/:topic?/:subtopic?' component={MainContent} /> 
  </Switch>
)