import React from 'react';

const SearchDisplay = (props) => {
  return <div>
    <ul>
      {props.matches.map( (match, key) => {
          return (
            <li key={key}>
              <span>Match Number: {match.number}</span>
              <span>Date of Match: {match.date}</span>
              <span>Player White: {match.white}</span>
              <span>Player Black: {match.black}</span>
              <span>Result of Match: {match.result}</span>
            </li>
          )
      })}
    </ul>
  </div>
}

export default SearchDisplay;