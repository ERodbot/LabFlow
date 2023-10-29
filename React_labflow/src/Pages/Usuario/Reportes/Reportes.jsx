import PaginaBase from "../../PaginaBase";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Reportes = () => {
  const [problema, setProblema] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!problema || !descripcion) {
      alert("Please fill out both fields."); // Show an error message if either field is empty
    } else {
      // Handle the form submission, e.g., send data to your server
      alert("Form submitted successfully!");
    }
  };

  return (
    <PaginaBase>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="problema">
                <Form.Label>1 - Problema</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describa el problema"
                  value={problema}
                  onChange={(e) => setProblema(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="descripcion">
                <Form.Label>2 - Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escriba una descripción detallada"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </PaginaBase>
  );
};
export default Reportes;
