import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Landing from './site/components/Landing';
import About from './site/components/About';
import Survey from './site/components/Survey';
import ProfilePage from './site/components/ProfilePage';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Survey' component={Survey}/>
            <Route exact path='/Profile' component={ProfilePage}/>
        </Switch>
        </BrowserRouter>

    );
  }
}

export default App;
