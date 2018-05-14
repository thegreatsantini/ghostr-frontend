import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';

import axios from 'axios';


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
    axios.get('http://localhost:8080/users/jiffy').then(response => {
      let newReputation = this.state.user.reputation + response.data.reputation;
      this.setState(
        this.state.user = {
        twitterId : response.data.twitterId,
        displayName: response.data.displayName,
        reputation: newReputation,
        purchasedTweets: response.data.purchasedTweets,
        subscriptions: response.data.subscriptions,
        writtenTweets:response.data.writtenTweets
      })
    })
  }
  
  // onSuccess = (response) => {
  //   console.log('success');
  //   const token = response.headers.get('x-auth-token');
  //   response.json().then(user => {
  //     if (token) {
  //       this.setState({isAuthenticated: true, user: user, token: token});
  //     }
  //   });
  // };

  // onFailed = (error) => {
  //   console.log('fail');
  //   alert(error);
  // };

  // logout = () => {
  //   this.setState({isAuthenticated: false, token: '', user: null})
  // };
  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' component={(props) => <Home />} />
          <Route path='/profile' component={(props) => <Profile user={this.state.user} />} />
        </Switch>
      </div>
    );
  }


  // render() {
  //   let content = !!this.state.isAuthenticated ?
  //   (
  //     <div>
  //       <p>Authenticated</p>
  //       <div>
  //         {this.state.user.email} {/* change email to name */}
  //       </div>
  //       <div>
  //         <button onClick={this.logout} className="button" >
  //           Log out
  //         </button>
  //       </div>
  //     </div>
  //   ) :
  //   (
  // <TwitterLogin loginUrl="http://localhost:8080/auth/twitter"
  //               onFailure={this.onFailed} onSuccess={this.onSuccess}
  //               requestTokenUrl="http://localhost:8080/auth/twitter/reverse" />
  //   );

  // return (
  //   <div className="App">
  //     {content}
  //   </div>
  // );
  //}

}

export default App;
