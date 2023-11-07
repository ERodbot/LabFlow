import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import ucricon from "../../images/favicon ucr.png";
import "./NavbarInicio.css";

const NavbarInicio = ({ linkName, link }) => {
  return (
    <Navbar className="navbar navbar-expand-sm custom-navbar" fixed="top">
      <Navbar.Brand className="navbar-brand mr-auto">
        <img src={ucricon} alt="Inicio" className="rounded image-inicio" />
      </Navbar.Brand>
      <Nav className="navbar-nav my-auto">
        <Nav.Item style={{ paddingRight: "20px" }} className="nav-item">
          <Nav.Link href={link} className="a-nav nav-link btn custom-text">
            {linkName}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default NavbarInicio;
