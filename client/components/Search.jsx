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

        {/* <form id="form-search"onChange={(type) => {this.props.handleSearchType(type)}}>
          <select onChange={(type) => {this.props.handleSearchType(type)}}>
            <option value="date">Date of Match</option>
            <option value="white">Player White</option>
            <option value="black">Player Black</option>
            <option value="result">Result of Match</option>
          </select>
          <input type="submit" value="Submit" onClick={(type) => this.props.handleClickSearch(type)}></input>
        </form>  */}

        <div className="display-match">
          {/* {this.props.matches.map( (match) => {
            <SearchDisplay  match={match}/>
          })} */}
        </div>
      </div>
    )
  }
}

export default Search;