import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarInicio from "../../Componentes/NavbarInicio/NavbarInicio";
import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Registro.css";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Container>
      <NavbarInicio
        linkName={"Iniciar sesión"}
        link={"/iniciar_sesion"}
      ></NavbarInicio>
      <Form id="form" onSubmit={handleSubmit}>
        <Form.Group className="input-control">
          <Form.Label htmlFor="email">Correo electrónico</Form.Label>
          <InputGroup>
            <FormControl
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error"></div>
          </InputGroup>
        </Form.Group>
        <Form.Group className="input-control">
          <Form.Label htmlFor="name">Nombre</Form.Label>
          <InputGroup>
            <FormControl
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="error"></div>
          </InputGroup>
        </Form.Group>
        <Form.Group className="input-control">
          <Form.Label htmlFor="apellido1">Primer apellido</Form.Label>
          <InputGroup>
            <FormControl
              type="text"
              id="apellido1"
              name="apellido1"
              value={apellido1}
              onChange={(e) => setApellido1(e.target.value)}
            />
            <div className="error"></div>
          </InputGroup>
        </Form.Group>
        <Form.Group className="input-control">
          <Form.Label htmlFor="apellido2">Segundo apellido</Form.Label>
          <InputGroup>
            <FormControl
              type="text"
              id="apellido2"
              name="apellido2"
              value={apellido2}
              onChange={(e) => setApellido2(e.target.value)}
            />
            <div className="error"></div>
          </InputGroup>
        </Form.Group>
        <Form.Group className="input-control">
          <Form.Label htmlFor="password">Contraseña</Form.Label>
          <InputGroup>
            <FormControl
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error"></div>
          </InputGroup>
        </Form.Group>
        <Form.Group className="input-control">
          <Form.Label htmlFor="c-password">
            Confirmación de contraseña
          </Form.Label>
          <InputGroup>
            <FormControl
              type="password"
              id="c-password"
              name="c-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="error"></div>
          </InputGroup>
        </Form.Group>
        <div className="input-control">
          <Button
            variant="primary"
            type="submit"
            className="btn mt-3"
            href="./iniciar_sesion"
          >
            Registrarse
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
