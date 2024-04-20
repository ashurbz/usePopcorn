import React from "react";
import "./common.css";

const Header = ({ movieData, children }) => {
  return (
    <div className="header_container">
      <div className="logo">PopCorn</div>
      <div className="search_container"> {children} </div>
      <div>Result Found {movieData.length}</div>
    </div>
  );
};

export default Header;
