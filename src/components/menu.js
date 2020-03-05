import React from "react";
import '../styles/style.scss'

import { Navbar, Nav } from "react-bootstrap"

const Menu = () => {
 
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark" variant="dark">
      <Navbar.Brand href="/" className="logo"><span className="logo-decoration"></span><strong>JGA</strong>LMEIDA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
          <Nav.Link href="#sobre">SOBRE</Nav.Link>
          <Nav.Link href="#trabalhos">TRABALHOS</Nav.Link>
          <Nav.Link href="#contato">CONTATO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu;
