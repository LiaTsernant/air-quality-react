import React from 'react';
import './Search.css'

class Search extends React.Component {
  state = {
    selected: '',
  }

  render() {
    return (
      <div>
        <form>
          <label for="city-input">Enter City or ZIP Code:</label>
          <input type="text" id="city-input" />
        </form>
      </div>
    )
  }
}

export default Search;