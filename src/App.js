import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';
import TwitterLogin from 'react-twitter-auth';

class App extends Component {
  //state = { users: [] }
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  onSuccess = (response) => {
    console.log('success');
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user, token: token});
      }
    });
  };

  onFailed = (error) => {
    console.log('fail');
    alert(error);
  };

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     console.log(this.state.user);
  //   }, 3000);
    
  // }

  // componentDidMount() {
  //   fetch('http://localhost:8080/users')
  //     .then(res => res.json())
  //     .then(users => {
  //       //this.setState({ users });
  //       console.log(users);
  //     })
  //     .then(data => console.log(data));

    // fetch('http://localhost:8080/fe')
    //   .then(res => res.json())
    //   .then(data => {
    //     //window.location = data.redirect;
    //     console.log(data);
    //   });
  // }
  // render() {
  //   return (
  //     <Switch>
  //       <Route exact path='/' component={(props) => <Home />} />
  //       <Route path='/profile' component={(props) => <Profile />} />
  //     </Switch>
  //   );
  // }

  // <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
  //                   onFailure={this.onFailed} onSuccess={this.onSuccess}
  //                   requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>

    //   <TwitterLogin loginUrl="http://localhost:8080/auth/twitter"
    //                 onFailure={this.onFailed} onSuccess={this.onSuccess}
    //                 requestTokenUrl="http://localhost:8080/twitter/reverse"/>
    // );

  render() {
    let content = !!this.state.isAuthenticated ?
    (
      <div>
        <p>Authenticated</p>
        <div>
          {this.state.user.email} {/* change email to name */}
        </div>
        <div>
          <button onClick={this.logout} className="button" >
            Log out
          </button>
        </div>
      </div>
    ) :
    (
  <TwitterLogin loginUrl="http://localhost:8080/auth/twitter"
                onFailure={this.onFailed} onSuccess={this.onSuccess}
                requestTokenUrl="http://localhost:8080/auth/twitter/reverse" />
    );

  return (
    <div className="App">
      {content}
    </div>
  );
}}

export default App;
