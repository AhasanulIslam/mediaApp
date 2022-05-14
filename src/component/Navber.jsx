import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import "./NavBar.css";
import { HomeTwoTone } from '@ant-design/icons';


const Navber = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink  to="/" className="nav-logo">
          <> </>
          <i className="fas fa-code"></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* {localStorage.getItem('role') === '2'} */}
          <li className="nav-item">
            <NavLink
              
              to="/quizde"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <HomeTwoTone />
            </NavLink>
            <NavLink
              
              to="/approvepage"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              User
            </NavLink>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/rej"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Unfollow User
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              
              to="/studentlist"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Profie Update
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              
              to="/createpost"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Create Post
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={logout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
