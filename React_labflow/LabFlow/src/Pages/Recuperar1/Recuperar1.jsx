import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import NavbarInicio from "../../Componentes/NavbarInicio/NavbarInicio";
import "./Recuperar1.css";

function Recuperar1() {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <NavbarInicio
        linkName={"iniciar sesión"}
        link={"http://localhost:5173/iniciar_sesion"}
      ></NavbarInicio>
      <Form id="form" action="/">
        <Form.Group>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="mt-4 custom-button" href="./recuperar2">
          Enviar código de recuperación
        </Button>
      </Form>
    </Container>
  );
}

export default Recuperar1;
