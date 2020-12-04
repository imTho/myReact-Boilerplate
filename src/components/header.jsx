import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Define reducer

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/" exact>
            LOGO
          </NavLink>
        </div>
        <div className="nav-toggle">
          <div className="hamburger-menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
