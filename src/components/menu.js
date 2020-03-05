import React from "react";
import { Link } from "gatsby";
import '../styles/style.scss'

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const Menu = () => {
 
  return (
    <Navbar className="navbar-dark" variant="dark">
      <Navbar.Brand href="/" className="logo"><span className="logo-decoration"></span><strong>JGA</strong>LMEIDA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="#sobre">SOBRE</Nav.Link>
          <Nav.Link href="#trabalhos">TRABALHOS</Nav.Link>
          <Nav.Link href="#contato">CONTATO</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Menu;
