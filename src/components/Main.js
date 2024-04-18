import React from "react";
import "./common.css";

const Main = ({ children }) => {
  return (
    <div className="main_container">
      <div className="boxes">{children}</div>
    </div>
  );
};

export default Main;
