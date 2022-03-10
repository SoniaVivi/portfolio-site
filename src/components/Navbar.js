import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.nav`
  margin-bottom: 50px;
  border-bottom: 1px solid ${(props) => props.theme.lightBorder};
  background-color: ${(props) => props.theme.background};
`;

const Wrapper = styled.div`
  flex-direction: row-reverse;
`;

const NavList = styled.ul`
  flex-direction: row;
`;

const NavItem = styled.li`
  margin-left: 8px;
`;

const NavLink = styled.button`
  color: ${(props) => props.theme.text};
`;

const Navbar = (props) => {
  const scrollTo = (ref) => ref.current.scrollIntoView(true);

  return (
    <Container className="navbar sticky-top">
      <Wrapper className="container-lg">
        <NavList className="navbar-nav">
          <NavItem className="nav-item active">
            <NavLink as="a" className="nav-link" href="#">
              Featured
            </NavLink>
          </NavItem>
          <NavItem
            className="nav-item"
            onClick={() => scrollTo(props.portfolioRef)}
          >
            <NavLink className="nav-link">Portfolio</NavLink>
          </NavItem>
          <NavItem
            className="nav-item"
            onClick={() => scrollTo(props.aboutRef)}
          >
            <NavLink className="nav-link">About</NavLink>
          </NavItem>
        </NavList>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

Navbar.propTypes = {
  portfolioRef: PropTypes.object,
  aboutRef: PropTypes.object,
};
