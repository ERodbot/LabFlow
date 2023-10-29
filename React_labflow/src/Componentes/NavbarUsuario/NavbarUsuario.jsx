/*React*/
import { useState, useEffect, useReducer } from "react";
/*Reac-Bootstrap*/
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/*Custom css*/
import "./NavbarUsuario.css";

/*Imagenes*/
import ucrlogo from "../../images/logotipoucr.png";

const NavbarUsuario = () => {
  return (
    <Navbar className="navbar navbar-expand-sm custom-navbar " fixed="top">
      <Container>
        <Navbar.Brand href="/Principal" className="mr-4">
          <img
            src={ucrlogo}
            alt="ucr logo"
            style={{ width: "10rem", height: "5rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Reservar" className="mx-4 custom-navbar-font">
              Reservar
            </Nav.Link>
            <Nav.Link href="/Laboratorios" className="mx-4 custom-navbar-font">
              Laboratorios
            </Nav.Link>
            <Nav.Link
              href="/Mis_reservaciones"
              className="mx-4 custom-navbar-font"
            >
              Mis reservaciones
            </Nav.Link>
            <Nav.Link
              href="/Disponibilidad"
              className="mx-4 custom-navbar-font"
            >
              Disponibilidad
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarUsuario;
