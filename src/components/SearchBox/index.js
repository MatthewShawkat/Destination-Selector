import React, { useState } from 'react';
import SearchResults from '../SearchResults';
import searchService from '../../services/searchService';
import './style.css';

function SearchBox() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let timeout;

  function handleInputChange(event) {
    const keyword = event.target.value;

    if(keyword.length > 1) {
      // debounce the user input with 200ms
      clearTimeout(timeout);
      timeout = setTimeout(function() {

      setIsLoading(true);
      query(keyword);
    }, 200);  
    } else {
      setSearchResults([]);
    }
  }

  function query(keyword) {
    searchService.query(keyword).then(res => {
      setIsLoading(false);
      setSearchResults(res.results.docs);
    });
  }

  return (
    <div className="SearchBox">
      <h1 className="SearchBox__title" id="searchBox-title">Let’s find your ideal car</h1>

      <div className="SearchBox__container">
        <label id="searchBox-label" className="SearchBox__label" htmlFor="searchBox-input">
          Pick-up Location
        </label>
        
        {isLoading &&
          <img
            className="SearchBox__spinner"
            alt="loading-spinner" 
            src="https://cdn2.rcstatic.com/images/site_graphics/newsite/preloader64.gif" 
          />
        }
        
        <input 
          className="SearchBox__input" 
          id="searchBox-input" 
          placeholder="city, airport, station, region, district…"
          aria-describedby="searchBox-title"
          aria-labelledby="searchBox-label"
          type="text" 
          onChange={event => handleInputChange(event)}
        />

        {searchResults.length > 0 && 
          <SearchResults results={searchResults}/>
        }
      </div>
    </div>
  );
}

export default SearchBox;