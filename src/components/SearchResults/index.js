import React from 'react';
import SearchItem from '../SearchItem';
import './style.css';

function SearchResults(props) {
  return (
    <ul className="SearchResults">
      {props.results.map((item, index) => {
        let type, name, location;

        switch(item.placeType) {
          case 'A':
            type = 'Airport';
            name = `${item.name}`;
            location = `${item.city}, ${item.country}`;
            break;
          case 'C':
            type = 'City';
            name = `${item.name}`;
            location = `${item.region}, ${item.country}`;
            break;
          case 'D':
            type = 'District';
            name = `${item.name}`;
            location = `${item.region}, ${item.country}`;
            break;
          default:
            name = `${item.name}`;
            break;  
        }
 
        return <SearchItem key={index} type={type} name={name} location={location}/>;
      })}

    </ul>
  );
}

export default SearchResults;