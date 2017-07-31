import React, {Component} from 'react';
import Post from './Post.jsx';
import Search from './Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      display: 'Click Search To Begin!',
      date: '',
      white: '',
      black: '',
      result: '',
      matches: [],
      searchText: '',
      searchType: 'date',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.handleSearchType = this.handleSearchType.bind(this);
  }

  handleInputChange(stateToChange, input) {
    let string = input.target.value;
    this.setState({[stateToChange]: string});
  }

  handleSearchText(input) {
    let string = input.target.value;
    this.setState({searchText: string});
  }
  
  handleSearchType(type) {
    let string = type.target.value;
    this.setState({searchType: string});
  }
  
  displayResults(match) {
    if(match.length === 0) {
      this.setState({display: 'No Matches Found'});
    } else if(Array.isArray(match)) {
      this.setState({display: `${match}`});
    } else {
      this.setState({display: match});
    }
  }
  //axios GET
  handleClickSearch(input) {
    input.preventDefault();
    let type = this.state.searchType;
    axios.get('/match')
    .then(({data}) => {
      let filteredData = data.filter(match => {
        return match[type] === this.state.searchText;
      })
      this.setState({matches: filteredData});
      this.displayResults(filteredData);
    })
    .catch(err => {
      console.log(err, ": An error occured, couldn't get data");
      this.displayResults("An error occured, couldn't get data");
    });
  }
  //axios POST
  handleClickSubmit(data) {
    data.preventDefault();
    if(this.state.date === '' || this.state.white === '' || this.state.black === '' || this.state.result === '') {
      this.displayResults('You did not fill out the form correctly, please try again!');
    } else {
      axios.post('/match', {
        number: 1,
        date: this.state.date,
        white: this.state.white,
        black: this.state.black,
        result: this.state.result,
      })
      .then((response) => {
        console.log(response);
        this.displayResults('Match Submitted Sucessfully!');
      })
      .catch((err) => {
        console.log(err,": An error occurred, couldn't submit data" );
        this.displayResults("An error occurred, couldn't submit data");
      })
      document.getElementById("form-submit").reset();
    }
  }

  render () {
    return (
      <div>
        <h1>HACK REACTOR CHESS MATCHES</h1>
        <div>
          <Post handleClickSubmit={this.handleClickSubmit} handleInputChange={this.handleInputChange}/>
        </div>
        <div>
          <Search handleClickSearch={this.handleClickSearch} handleSearchText={this.handleSearchText} handleSearchType={this.handleSearchType} matches={this.state.matches}/>
        </div>
        <div className="display">{this.state.display}</div>
        <div className="display-match">
          <div className="display1">{this.state.display1}</div>
          <div className="display2">{this.state.display2}</div>
          <div className="display3">{this.state.display3}</div>
          <div className="display4">{this.state.display4}</div>
          <div className="display5">{this.state.display5}</div>
        </div>
      </div>
    )
  }
}

export default App;