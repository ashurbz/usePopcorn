import React, { useState } from "react";
import "./common.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(query);
  return (
    <div>
      <div className="search_container">
        <input
          type="search"
          placeholder="Search for movies"
          value={query}
          onChange={handleOnChange}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
