import React from "react";
import { Link } from "gatsby";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const Menu = () => {
 
  return (
    <Navbar className="navbar-dark" variant="dark">
      <Navbar.Brand href="/" className="logo"><strong>JGA</strong>LMEIDA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">TRABALHOS</Nav.Link>
          <Nav.Link href="/">SOBRE</Nav.Link>
          <Nav.Link href="/">CONTATO</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Menu;
