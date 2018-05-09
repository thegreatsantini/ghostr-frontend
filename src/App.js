import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users : []
    }
  }

  componentDidMount() {
    // fetch('http://localhost:8080/fe')
    //   .then(res => res.json())
    //   .then(data => {
    //     window.location = data.redirect;
    //   });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={(props) => <Home  />} />
        <Route path='/profile' component={(props) => <Profile />} />
      </Switch>
    );
  }
}

export default App;
