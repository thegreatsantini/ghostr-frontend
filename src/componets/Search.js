import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

let categories = [];
// const languages = [
//   {
//     name: 'C'
//   },
//   {
//     name: 'Elm'
//   },
// ];

// const languages = ['C','Elm'];

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };


//const categories = [ 'love','instagood','photooftheday','fashion','beautiful','happy','cute','tbt','like4like','followme','picoftheday','follow','me','selfie','summer','art','instadaily','friends','repost','nature','girl','fun','style','smile','food','instalike','likeforlike','family','travel','fitness','igers','tagsforlikes','follow4follow','nofilter','life','beauty','amazing','instamood','instagram','photography','vscocam','sun','photo','music','beach','followforfollow','bestoftheday','sky','ootd','sunset','dog','vsco','l4l','makeup','f4f','foodporn','hair','pretty','swag','cat','model','motivation','girls','baby','party','cool','lol','gym','design','instapic','funny','healthy','night','tflers','yummy','flowers','lifestyle','hot','instafood','wedding','fit','handmade','black','pink','blue','work','workout','blackandwhite','drawing','inspiration','home','holiday','christmas','nyc','london','sea','instacool','goodmorning','iphoneonly' ]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : categories.filter(categorie =>
    categorie.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

class Search extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/data')
      .then(res => res.json())
      .then(data => this.setState({
        suggestions: data.categories
      }));
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    //console.log(getSuggestions(value));
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search;
