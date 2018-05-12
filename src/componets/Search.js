import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import '../App.css'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, suggestionList) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : suggestionList.filter(categorie =>
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

class Search extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      suggestionList: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/data')
      .then(res => res.json())
      .then(data => this.setState({
        suggestionList: data.categories
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
      suggestions: getSuggestions(value, this.state.suggestionList)
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

    const searchStyle = {
      display: 'block',
      width: '100%',
      height: '34px',
      padding: '6px 12px',
      fontSize: '14px',
      lineHeight: '1.42857143',
      color: '#555',
      backgroundColor: '#fff',
      backgroundImage: 'none',
      border: '1px solid #ccc',
      borderRadius: '4px',
      webkitBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
      boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
      webkitTransition: 'border - color ease -in -out .15s, -webkit - box - shadow ease -in -out .15s',
      oTransition: 'border - color ease -in -out .15s, box - shadow ease -in -out .15s',
      transition: 'border - color ease -in -out .15s, box - shadow ease -in -out .15s',
    }
    // Finally, render it!
    return (
      <Autosuggest
        style={searchStyle}
        className="form-control"
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
