import React, { Component } from 'react';
import Home from './componets/Home'
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    let currentUser = this.state.users.map(user => {
      return <div key={user.id}>{user.username}</div>
    })
    return (
      <div className="App">
        <Home user={currentUser}/>
      </div>
    );
  }
}

export default App;
