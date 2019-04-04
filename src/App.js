import React, { Component } from 'react';
import './scss/App.scss';
import Navbar from './components/Navbar/Navbar'
import { HashRouter, Switch, Route } from 'react-router-dom'
import MainContent from './components/Maincontent/MainContent'
import Mainpage from './components/mainpage/Mainpage'
import Text_area from './components/Usernotes/Text_area'
import OpenFormDialog from './components/Auth/OpenFormDialog'




class App extends Component {

  render() {


    return (
      <div className='App'>
        {/* <OpenFormDialog /> */}
        {/* <Text_area /> */}
        <HashRouter>
          <>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Mainpage} />
              <Route path='/docs/:category/:topic?/:subtopic?' component={MainContent} />
            </Switch>
          </>
        </HashRouter>

      </div>

    );
  }
}

export default App;