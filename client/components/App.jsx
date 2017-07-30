import React, {Component} from 'react';
import Post from './Post.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props),

    this.state = {
      displayResults: 'There Are No Matches To Display'
    }
    this.clickSearch = this.clickSearch.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  clickSubmit(data) {
    data.preventDefault();
    this.displayResults('Submit Button Clicked');
  }

  clickSearch() {
    this.displayResults("No Matches Found, Please Try Again!");
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