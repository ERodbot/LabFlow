import { useState, useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarUsuario = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">UCR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/laboratorios">Laboratorios</Nav.Link>
            <Nav.Link href="/laboratorios">Laboratorios</Nav.Link>
            <Nav.Link href="/laboratorios">Laboratorios</Nav.Link>
            <Nav.Link href="/laboratorios">Laboratorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarUsuario;
