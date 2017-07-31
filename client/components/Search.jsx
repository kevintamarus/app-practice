import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props),
    this.state = {

    }
  }

  render () {
    return (
      <div className="search-main">
        <h1>Search Match:</h1>
        <div className="dropdown">
          <select>
            <option value="match-number">Match Number</option>
            <option value="date">Date of Match</option>
            <option value="white">Player White</option>
            <option value="black">Player Black</option>
            <option value="result">Result</option>
          </select>
          <input name="search-text" type="text"/>
          <button className="search-button" onClick={this.props.handleClickSearch}>Search for Matches</button>
        </div>
        <div className="display-match"></div>
      </div>
    )
  }
}

export default Search;