import React, { useEffect, useRef } from "react";
import "./common.css";

const SearchBar = ({ query, onSearch }) => {
  const handleOnChange = (e) => {
    onSearch(e.target.value);
  };

  const element = useRef(null);

  useEffect(() => {
    element.current.focus();
  }, []);

  console.log(element);

  return (
    <div>
      <div className="search_container">
        <input
          type="search"
          placeholder="Search for movies"
          value={query}
          onChange={handleOnChange}
          ref={element}
        />
      </div>
    </div>
  );
};

export default SearchBar;
