import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./common.css";

const Layout = () => {
  return (
    <div className="layout_container">
      <Header />
      <Main />
    </div>
  );
};

export default Layout;
