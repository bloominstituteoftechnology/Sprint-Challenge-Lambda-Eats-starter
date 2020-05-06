import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 1% 15%;
`;

const Nav = styled.div`
  font-size: 1.5rem;
  display: flex;

  width: 200px;
  justify-content: space-around;
`;

const Navbar = () => {
  return (
    <NavDiv>
      <h1>Lambda Eats</h1>
      <Nav>
        <Link to="/">Home</Link>

        <Link to="/library">Library</Link>
      </Nav>
    </NavDiv>
  );
};

export default Navbar;
