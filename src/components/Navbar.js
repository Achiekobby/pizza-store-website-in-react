import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize",showButton);

  useEffect(() => {
    showButton();
  }, []);

  const closeOnClick=()=>setClick(false);

  const handleClick = () => setClick(!click);

  return (
    //   LeftSide of the Navigation bar
    <nav className="navbar">
      <div className="navbar-container">
        <div className="leftSide">
          <img src={Logo} alt="Website Logo" />
        </div>

        {/* Right side of the navigation bar */}
        <div className={click ? "rightSide active" : "rightSide"}>
          <ul className="nav-items">
            <li className="nav-link-item">
              <Link to="/" className="nav-link" onClick={closeOnClick}>
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/about" className="nav-link" onClick={closeOnClick}>
                About
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/menu" className="nav-link" onClick={closeOnClick}>
                Menu
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/contact" className="nav-link" onClick={closeOnClick}>
                Contact
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/sign-in" className="nav-link"onClick={closeOnClick}>
                Sign-In
              </Link>
            </li>
          </ul>
          {button && (
            <Buttons buttonStyle="btn--outline" buttonSize="btn--small"onClick={closeOnClick}>
              SIGN-UP
            </Buttons>
          )}
        </div>
        {/* Mobile Menu icon */}
        <div className="mobile-menu" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
