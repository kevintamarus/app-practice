import React from 'react';

class Post extends React.Component {
  render () {
    return (
      <div className="post-main">
        <h1>Submit your matches here:</h1>
        <form>
          Date: <input name="input-date" type="text"/>
          Player White: <input name="input-white" type="text"/>
          Player Black: <input name="input-black" type="text"/>
          Result: <input name="input-result" type="text"/>
          <button className="submit" value="Submit" onClick={this.props.clickSubmit}>Submit Match</button> 
        </form>
      </div>
    )
  }
}

export default Post;
