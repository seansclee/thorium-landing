import React, { useState } from "react";

import sgLogo from "../../assets/sg-logo.svg";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";

import "./index.scss";

const Header = () => {
  const navLinks = [
    "Home",
    "Our Portfolio",
    "Suppliers",
    "Carriers",
    "Our Causes",
    "News",
    "About Us",
  ];

  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <div className="sg-header">
      <div className="sg-header__inner-container">
        <Link className="sg-header__logo" to="/">
          <img src={sgLogo} alt="SG" />
        </Link>
        <div className="sg-header__main">
          <div className="sg-header-content--top">
            <ul className="social-links">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
            <div className="login">
              <button className="login-button" onClick={handleLoginClick}>
                Log In
              </button>
              <button className="chevron" onClick={handleLoginClick}>
                <i
                  className={classnames("fa fa-chevron-down", {
                    open: loginOpen,
                    closed: !loginOpen,
                  })}
                />
              </button>
            </div>
          </div>

          <div
            className={classnames("sg-header-content--middle", {
              open: loginOpen,
              closed: !loginOpen,
            })}
          >
            <form className="login-form">
              <label for="username">Username:</label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
              <br />
              <label for="password">Password:</label>
              <br />
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter password"
              />
              <br />
              <input className="login-button" type="submit" value="Log In" />
            </form>
          </div>

          <div className="sg-header-content--bottom">
            <ul className="nav-list">
              {navLinks?.map((navLink, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${navLink.toLowerCase().replace(/\s/g, "-")}`}
                    activeStyle={{
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    {navLink}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
