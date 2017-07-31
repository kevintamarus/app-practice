import React from 'react';

const SearchDisplay = (props) => {
  return <div>
    <ul>
      {props.matches.map( (match, key) => {
          return (
            <div key={key}>
              <span className="display-divider">Match Number: {match.number}</span>
              <span className="display-divider">Date of Match: {match.date}</span>
              <span className="display-divider">Player White: {match.white}</span>
              <span className="display-divider">Player Black: {match.black}</span>
              <span className="display-divider">Result of Match: {match.result}</span>
            </div>
          )
      })}
    </ul>
  </div>
}

export default SearchDisplay;