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
      twitterId: '',
      displayName: '',
      user: null
    };
  }

  componentDidMount() {
  // OAuth: Added function for Twitter users
    axios.get('http://localhost:8080/auth/user').then(response => {
      console.log('axios response', response);
      if (response.data.user) {
        console.log('if statement');
        // We found a twitter user in the server session
        let twitterUser = {
          twitterId: response.data.user.twitterId,
          displayName: response.data.user.displayName
        }
        this.setState({ twitterUser })
      } else {
        console.log('else statement');
        // We did not find a user in the server session
        this.setState({ user: null })
      }
    })

    // fetch('http://localhost:8080/')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('data from twitter', data);
    //     if(data && data.redirect){
    //       fetch(data.redirect)
    //       .then(twitterResults => {
    //         console.log("user info\n", twitterResults);
    //         this.setState({ userName: twitterResults.user.screen_name })
    //       })
    //     }
    //   });

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
