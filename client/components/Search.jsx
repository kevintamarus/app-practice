import React from 'react';
import SearchDisplay from './SearchDisplay';
class Search extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      matches: [],
    }
  }

  render () {
    return (
      <div className="search-main">
        <h1>Search Matches:</h1>
        <input name="search-text" type="text" onChange={(input) => this.props.handleSearchText(input)}/>

        <div>
          <select onChange={(input) => this.props.handleSearchType(input)}>
            <option value="date">Date of Match</option>
            <option value="white">Player White</option>
            <option value="black">Player Black</option>
            <option value="result">Result of Match</option>
          </select>
          <input type="submit" value="Submit" onClick={(e) => this.props.handleClickSearch(e)}></input>
        </div>

        <div className="display-match">
          <SearchDisplay matches={this.props.matches}/>
        </div>
      </div>
    )
  }
}

export default Search;