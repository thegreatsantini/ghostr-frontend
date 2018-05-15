import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home';
import Profile from './componets/Profile';
import './App.css';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        twitterId:        ''
        ,handle:          ''
        ,pic:             ''
        ,reputation:      0
        ,purchasedTweets: []
        ,subscriptions:   []
        ,writtenTweets:   []
      }
    };
  }

  componentDidMount() {
  // OAuth: Added function for Twitter users
     fetch(SERVER_URL + '/auth/user', {
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
        // We found a twitter user in the server session
        // console.log('user found. response:', response);
        let twitterUser = {
          twitterId:        response.user.twitterId
          ,handle:          response.user.handle
          ,pic:             response.user.pic
          ,reputation:      response.user.reputation
          ,purchasedTweets: response.user.purchasedTweets
          ,subscriptions:   response.user.subscriptions
          ,writtenTweets:   response.user.writtenTweets
        }
        this.setState({ user: twitterUser });
      }
    });
  }

  render() {
    // console.log('rendering now. state is', this.state);
    // let message = <div>No one is logged in!</div>;
    // if(this.state.user.handle !== ''){
    //   message = (
    //     <div>
    //       Someone named {this.state.user.handle} is logged in!
    //     </div>)
    // }
    return (
      <div>
        <Switch>
          <Route exact path='/' component={(props) => <Home user={this.state.user} />} />
          <Route path='/profile' component={(props) => <Profile user={this.state.user} />} />
          <Route path='/browse' component={(props) => <Profile user={this.state.user} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
