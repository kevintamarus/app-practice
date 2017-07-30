import React, {Component} from 'react';
import Post from './Post.jsx';
import Search from './Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props),

    this.state = {
      displayResults: 'There Are No Matches To Display'
    }
    this.clickSearch = this.clickSearch.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }
  //axios GET
  clickSearch() {
    axios.get('/match')
    .then(({data}) => {
      console.log('data received')
      this.displayResults(data);
    })
    .catch(err => {
      console.log("an error occured, couldn't get data");
      this.displayResults("An Error Occurred, Couldn't Get Data");
    });

    this.displayResults("No Matches Found, Please Try Again!");
  }
  //axios POST
  clickSubmit(data, ) {
    data.preventDefault();
    axios.post('/', {
      date: "july29",
      white: "Kevin",
      black: "Tamarus",
      result: "Draw"
    })
    .then((response) => {
      console.log(response);
      this.displayResults('Match Submitted Sucessfully!');
    })
    .catch((error) => {
      console.log(error);
      this.displayResults("An Error Occurred, Couldn't Submit Data");
    })
  }

  

  displayResults(match) {
    if(!match) {
      this.setState({displayResults: "No Matches Found, Please Try Again!"});
    } else {
      this.setState({displayResults : match});
    }
  }

  render () {
    return (
      <div>
        <h1>HACK REACTOR CHESS MATCHES</h1>
        <div>
          <Post clickSubmit={this.clickSubmit}/>
        </div>
        <div>
          <Search clickSearch={this.clickSearch}/>
        </div>
        <div className="display">{this.state.displayResults}</div>
      </div>
    )
  }
}

export default App;