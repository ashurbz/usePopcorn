import React from "react";
import "./common.css";
import SearchBar from "./SearchBar";

const Header = ({ movieData }) => {
  return (
    <div className="header_container">
      <div className="logo">PopCorn</div>
      <div className="search_container">
        <SearchBar />
      </div>
      <div>Result Found {movieData.length}</div>
    </div>
  );
};

export default Header;
