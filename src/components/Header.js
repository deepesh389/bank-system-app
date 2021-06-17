import React from 'react';
import { Link, NavLink } from "react-router-dom";
 const Header = () => (
  <header className="header">
    <div className="content-container">
       
      <div className="header__content">
      
    <NavLink activeStyle={{color: "whitesmoke"}} className="header__title" to="/" exact={true}>
       <h1>Home</h1>
    </NavLink>
    <NavLink activeStyle={{color: "whitesmoke"}} activeClassName="active" className="header__title" to="/aboutus">
       <h1>About</h1>
    </NavLink>
    </div>
    </div>
  </header>
);
export default Header;



