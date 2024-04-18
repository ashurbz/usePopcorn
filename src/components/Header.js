import React from "react";
import "./common.css";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo">PopCorn</div>
      <div className="search_container">
        <SearchBar />
      </div>
      <div>Found X results</div>
    </div>
  );
};

export default Header;
