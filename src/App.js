import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isAuthenticated: false, 
      // user: null, 
      // token: ''
      user: {
        twitterId: '',
        displayName: '',
        reputation: 0,
        purchasedTweets: [],
        subscriptions: [],
        writtenTweets: []
      }
    };
  }

  componentDidMount() {
  // OAuth: Added function for Twitter users
     fetch('http://localhost:8080/auth/user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      }
     })
     .then(response => response.json())
     .then(response => {
      console.log('fetch response', response);
      if (response.user) {
        console.log('if statement');
        // We found a twitter user in the server session
        let twitterUser = {
          twitterId: response.user.twitterId,
          displayName: response.user.displayName
        }
        this.setState({ user: twitterUser });
      } else {
        console.log('else statement', response);
        // We did not find a user in the server session
        this.setState({ user: null })
      }
    })
  }

  render() {
    console.log('rendering now. state is', this.state);
    let message = <div>No one is logged in!</div>;
    if(this.state.user){
      message = (
        <div>
          Someone named {this.state.user.displayName} is logged in!
        </div>)
    }

    return (
      <div>
        <div>
          Is Someone Logged In?
          {message}
        </div>
        <Switch>
          <Route exact path='/' component={(props) => <Home />} />
          <Route path='/profile' component={(props) => <Profile user={this.state.user} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
