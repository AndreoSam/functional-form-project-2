import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          View
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="add">
          Add
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
