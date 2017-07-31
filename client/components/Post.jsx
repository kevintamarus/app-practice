import React from 'react';

class Post extends React.Component {
  render () {
    return (
      <div className="post-main">
        <h1>Submit Your Match Here:</h1>
        <form>
          Date: <input name="input-date" type="text" onChange={(input) => this.props.handleInputChange('date', input)}/>
          Player White: <input name="input-white" type="text" onChange={(input) => this.props.handleInputChange('white', input)}/>
          Player Black: <input name="input-black" type="text" onChange={(input) => this.props.handleInputChange('black', input)}/>
          Result: <input name="input-result" type="text" onChange={(input) => this.props.handleInputChange('result', input)}/>
          <button className="submit" value="Submit" onClick={this.props.handleClickSubmit}>Submit Match</button> 
        </form>
      </div>
    )
  }
}

export default Post;
