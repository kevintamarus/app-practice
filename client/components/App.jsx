import React, {Component} from 'react';
import Post from './Post.jsx';
import Search from './Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props),

    this.state = {
      display1: 'Click Search To Begin!',
      display2: null,
      display3: null,
      display4: null,
    }
    this.clickSearch = this.clickSearch.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }
  //axios GET
  clickSearch() {
    axios.get('/match')
    .then(({data}) => {
      this.displayResults(data);
    })
    .catch(err => {
      console.log("An error occured, couldn't get data");
      //this.displayResults("An Error Occurred, Couldn't Get Data");
    });
  }
  //axios POST
  clickSubmit(data) {
    data.preventDefault();
    axios.post('/match', {
      number: 1,
      date: "July 29",
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
      this.displayResults("An error occurred, couldn't submit data");
    })
  }

  

  displayResults(match) {
    if(typeof match !== 'object') {
      this.setState({display: match});
    } else {
      this.setState({
        display: null,
        display1: `Match#: ${match.number}`,
        display2: `Date: ${match.date}`  ,
        display3:`Player White: ${match.white}`,
        display4: `Player Black: ${match.black}`,
        display5: `Result: ${match.result}`,
      });
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