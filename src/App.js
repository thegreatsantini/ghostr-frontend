import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
<<<<<<< HEAD
// import Home from './componets/Home';
import LandingPage from './componets/LandingPage';
=======
import Header from './componets/partials/Header';
import Home from './componets/Home';
>>>>>>> 4c1d274e0973318de8db5205b27acb70f3d97594
import Profile from './componets/Profile';
import Browse from './componets/Browse';
import './App.css';
// import Header from './componets/partials/Header';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        twitterId: ''
        , handle: ''
        , pic: ''
        , reputation: 0
        , purchasedTweets: []
        , writtenTweets: []
        , subscriptions: []
        , followers: []
      },
      input: ''
    };
  }

  updateUser = () => {
    // console.log('update user');
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
        // console.log('fetch response', response);
        if (response.user) {
          // We found a twitter user in the server session
          // console.log('user found. response:', response);
          let twitterUser = {
            twitterId: response.user.twitterId
            , handle: response.user.handle
            , pic: response.user.pic
            , reputation: response.user.reputation
            , purchasedTweets: response.purchasedTweets
            , subscriptions: response.user.subscriptions
            , writtenTweets: response.writtenTweets
            , followers: response.followers
          }
          this.setState({ user: twitterUser });
          // console.log(this.state.user.writtenTweets);
        }
      });
  }

  handleSearch = (val) => {
    // console.log(val);
    this.setState({ input: val })
  }

  componentDidMount() {
    this.updateUser();
  }

  render() {
    return (
      <div>
        <Header
                user={this.state.user}
                handleSearch={this.state.handleSearch}
                filter ={this.filter} 
                />
        <Switch>
<<<<<<< HEAD
          <Route exact path='/' component={() => <LandingPage user={this.state.user} />} />
          <Route path={`/user/${this.state.user.handle}`} component={() => <Profile
=======
          <Route exact path='/' component={() => <Home user={this.state.user} />} />
          <Route path='/profile' component={() => <Profile
>>>>>>> 4c1d274e0973318de8db5205b27acb70f3d97594
            user={this.state.user}
            updateUser={this.updateUser}
            handleSearch={this.handleSearch} />} />
          <Route path='/browse' component={() => <Browse
            user={this.state.user}
            updateUser={this.updateUser}
            handleSearch={this.handleSearch} />} />
<<<<<<< HEAD
          {/* <Route  path='/logout' /> */}
=======
>>>>>>> 4c1d274e0973318de8db5205b27acb70f3d97594
        </Switch>
      </div>
    );
  }
}

export default App;
