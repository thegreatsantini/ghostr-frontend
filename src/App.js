import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    let currentUser = this.state.users.map(user => {
      return <div key={user.id}>{user.username}</div>
    })
    return (
      <Switch>
        <div>
          <Route exact path='/' component={(props) => <Home user={currentUser} />} />
          <Route path='/profile' component={(props) => <Profile />} />
        </div>
      </Switch>

    );
  }
}

export default App;
