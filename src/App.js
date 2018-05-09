import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';

class App extends Component {
  state = { 
    user: [],
    userName: '' 
  }

  componentDidMount() {
    // fetch('http://localhost:8080/users')
    //   .then(res => res.json())
    //   .then(users => {
    //     //this.setState({ users });
    //     console.log(users);
    //   })
    //   .then(data => console.log(data));

    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => {
        console.log('data from twitter', data);
        if(data && data.redirect){
          fetch(data.redirect)
          .then(twitterResults => {
            console.log("user info\n", twitterResults);
            this.setState({ userName: twitterResults.user.screen_name })
          })
        }
      });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' component={(props) => <Home />} />
        <Route path='/profile' component={(props) => <Profile />} />
      </Switch>
    );
  }
}

export default App;
