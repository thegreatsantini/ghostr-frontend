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
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(seededUsers => {
        this.setState({ users: seededUsers[0] });
      }).then(() => console.log(this.state.users))
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={(props) => <Home />} />
        <Route path='/profile' component={(props) => <Profile user={this.state.users} />} />
      </Switch>
    );
  }
}

export default App;
