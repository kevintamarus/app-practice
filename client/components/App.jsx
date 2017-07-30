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
      display5: null,
      date: '',
      white: '',
      black: '',
      result: '',

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlecClickSearch = this.handleClickSearch.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }

  handleInputChange(stateToChange, input) {
    let string = input.target.value;
    this.setState({[stateToChange]: string});
  }
  //axios GET
  handleClickSearch() {
    axios.get('/match')
    .then(({data}) => {
      this.displayResults(data);
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
      this.displayResults('You did not fill out the form completely, please try again!');
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
    }
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
          <Post handleClickSubmit={this.handleClickSubmit} handleInputChange={this.handleInputChange}/>
        </div>
        <div>
          <Search handleClickSearch={this.handleClickSearch}/>
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