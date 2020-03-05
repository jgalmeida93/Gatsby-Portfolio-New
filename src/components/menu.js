import React from "react";
import '../styles/style.scss'

import { Navbar, Nav } from "react-bootstrap"

const Menu = () => {
 
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="sm" className="navbar-dark" variant="dark">
        <Navbar.Brand href="/" className="logo"><span className="logo-decoration"></span><strong>JGA</strong>LMEIDA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link href="#sobre">SOBRE</Nav.Link>
            <Nav.Link href="#trabalhos">TRABALHOS</Nav.Link>
            <Nav.Link href="#contato">CONTATO</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Menu;
