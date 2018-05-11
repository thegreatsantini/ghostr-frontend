import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './componets/Home'
import Profile from './componets/Profile'
import './App.css';
// import TwitterLogin from 'react-twitter-auth';
// import Autosuggest from 'react-autosuggest';

// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   }
// ];

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.name;

// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => (
//   <div>
//     {suggestion.name}
//   </div>
// );

//     // Autosuggest is a controlled component.
//     // This means that you need to provide an input value
//     // and an onChange handler that updates this value (see below).
//     // Suggestions also need to be provided to the Autosuggest,
//     // and they are initially empty because the Autosuggest is closed.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAuthenticated: false, 
      user: null, 
      token: ''
      // value: '',
      // suggestions: []
    };
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

  // onChange = (event, { newValue }) => {
  //   this.setState({
  //     value: newValue
  //   });
  // };

  // // Autosuggest will call this function every time you need to update suggestions.
  // // You already implemented this logic above, so just use it.
  // onSuggestionsFetchRequested = ({ value }) => {
  //   this.setState({
  //     suggestions: getSuggestions(value)
  //   });
  // };

  // // Autosuggest will call this function every time you need to clear suggestions.
  // onSuggestionsClearRequested = () => {
  //   this.setState({
  //     suggestions: []
  //   });
  // };

 
    

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
  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then(res => res.json())
      .then(seededUsers => {
        this.setState({ users: seededUsers[0] });
      })
      // .then(() => console.log(this.state.users))
  }
  render() {
    // const { value, suggestions } = this.state;

    // // Autosuggest will pass through all these props to the input.
    // const inputProps = {
    //   placeholder: 'Type a programming language',
    //   value,
    //   onChange: this.onChange
    // };

    // // Finally, render it!
    return (
      <div>
        <Switch>
          <Route exact path='/' component={(props) => <Home />} />
          <Route path='/profile' component={(props) => <Profile />} />
        </Switch>
        {/*<Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />*/}
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
