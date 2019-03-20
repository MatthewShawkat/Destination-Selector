import React from 'react';
import './style.css';

function SearchItem(props) {

  return (
    <li className="SearchItem">
      {props.type && 
        <div className={`SearchItem__section SearchItem__type SearchItem__type--${props.type}`}>
          {props.type}
        </div>
      }
      <div className="SearchItem__section">
        <div className="SearchItem__name">{props.name}</div>
        <div className="SearchItem__location">{props.location}</div>
      </div>
    </li>
  );
}

export default SearchItem;