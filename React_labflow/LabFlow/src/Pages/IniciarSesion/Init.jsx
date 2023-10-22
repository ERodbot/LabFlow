import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Init.css";

import {
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <Navbar className="navbar navbar-expand-sm custom-navbar" fixed="top">
          <Navbar.Brand href="index.html" className="navbar-brand mr-auto">
            <img
              src="/client-ucr/images/favicon ucr.png"
              alt="Inicio"
              className="rounded image-inicio"
            />
          </Navbar.Brand>
          <Nav className="navbar-nav my-auto">
            <Nav.Item style={{ paddingRight: "20px" }} className="nav-item">
              <Nav.Link href="registro.html" className="a-nav nav-link btn">
                Registrarse
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
      <Container>
        <Form id="form" action="/">
          <Form.Group className="input-control">
            <Form.Label htmlFor="email">Correo electrónico</Form.Label>
            <InputGroup>
              <FormControl type="email" id="email" name="email" />
              <div className="error"></div>
            </InputGroup>
          </Form.Group>
          <Form.Group className="input-control">
            <Form.Label htmlFor="password">Password</Form.Label>
            <InputGroup>
              <FormControl type="password" name="password" id="password" />
              <div className="error"></div>
            </InputGroup>
          </Form.Group>
          <div>
            <a href="./recuperar.html" className="recuperar-c">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="input-control">
            <Button variant="primary" type="submit" className="btn">
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
