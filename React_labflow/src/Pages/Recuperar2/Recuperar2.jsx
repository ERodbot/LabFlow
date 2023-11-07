import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recuperar2.css";
import NavbarInicio from "../../Componentes/NavbarInicio/NavbarInicio";
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Recuperar2 = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form data from code and password here
    console.log("Code:", code);
    console.log("Password:", password);
    // Add any other logic you need to handle form submission
  };

  return (
    <>
      <Container>
        <NavbarInicio
          linkName={"iniciar sesión"}
          link={"http://localhost:5173/iniciar_sesion"}
        ></NavbarInicio>
      </Container>
      <Container>
        <Form id="form" onSubmit={handleSubmit}>
          <Form.Group className="input-control">
            <Form.Label htmlFor="code">Código de recuperación</Form.Label>
            <InputGroup>
              <FormControl
                type="text"
                id="code"
                value={code}
                onChange={handleCodeChange}
              />
              <div className="error"></div>
            </InputGroup>
          </Form.Group>
          <Form.Group className="input-control">
            <Form.Label htmlFor="password">Nueva Contraseña</Form.Label>
            <InputGroup>
              <FormControl
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="error"></div>
            </InputGroup>
          </Form.Group>
          <div></div>
          <div className="input-control">
            <Button
              variant="primary"
              type="submit"
              className="btn mt-3"
              href="./iniciar_sesion"
            >
              Recuperar cuenta
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Recuperar2;
