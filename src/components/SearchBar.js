import React from "react";
import "./common.css";

const SearchBar = ({ query, onSearch }) => {
  const handleOnChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className="search_container">
        <input
          type="search"
          placeholder="Search for movies"
          value={query}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
