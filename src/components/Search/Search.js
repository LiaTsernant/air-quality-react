import React from 'react';
import './Search.css';
import debounce from 'lodash/debounce';

class Search extends React.Component {
  state = {
    inputField: '',
    error: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearchEnter(this.state.inputField);
  }

  // Waiting till user paused their input and then update state for preventing updates on each character
  handleChange = debounce((val) => {
    if (val !== "") {
      this.setState({
        inputField: val,
      })
    }
  }, 300);

  render() {
    return (
      <div id="search-box">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="city-input">Enter City or ZIP Code:</label>
          <div id="search-field">
            <input type="text"
              id="city-input"
              onChange={(e) => this.handleChange(e.target.value)}
              pattern="[0-9]*"
              required />
            <img id="search-img" src="search.png" alt="search" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;