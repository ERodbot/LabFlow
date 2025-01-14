import React, { useState, createContext, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Init.css";
import NavbarInicio from "../../Componentes/NavbarInicio/NavbarInicio";
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";"";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { iniciar_sesion, user, isAuthenticated } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    iniciar_sesion({email, password});
  };

  useEffect(() => {
    if(isAuthenticated)
    navigate("/principal");
  }, [isAuthenticated]);
  return (
    <>
      <Container>
        <NavbarInicio
          linkName={"Registrarse"}
          link={"http://localhost:5173/registrarse"}
        ></NavbarInicio>
      </Container>
      <Container>
        <Form id="form" onSubmit={handleSubmit}>
          <Form.Group className="input-control">
            <Form.Label htmlFor="email">Correo electrónico</Form.Label>
            <InputGroup>
              <FormControl
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="error"></div>
            </InputGroup>
          </Form.Group>
          <Form.Group className="input-control">
            <Form.Label htmlFor="password">Password</Form.Label>
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
          <div>
            <a href="./recuperar" className="recuperar-c">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="input-control">
            <Button
              id="submit"
              variant="primary"
              type="submit"
              className="btn mt-3"
            >
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
