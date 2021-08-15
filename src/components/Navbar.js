import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const scrollTo = (ref) => ref.current.scrollIntoView(true);

  return (
    <nav className="navbar sticky-top">
      <div className="container-lg">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item" onClick={() => scrollTo(props.portfolioRef)}>
            <button className="nav-link">Portfolio</button>
          </li>
          <li className="nav-item" onClick={() => scrollTo(props.aboutRef)}>
            <button className="nav-link">About</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  portfolioRef: PropTypes.object,
  aboutRef: PropTypes.object,
};
