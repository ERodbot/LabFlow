import React, { useState } from "react";
import {
  Dropdown,
  Button,
  ButtonGroup,
  Container,
  Card,
  Form,
  Row,
  Col
} from "react-bootstrap";
import PaginaBase from "../../PaginaBase";
import LabSchedule from "../../../Componentes/LabSchedule/LabSchedule";
import "./Reservar.css";
import reservar from "./reservar.json";

const Reservar = () => {
  const [formState, setFormState] = useState({
    lab: null,
    date: null,
    inicio: null,
    final: null,
    course: "",
    group: "",
    observations: "",
    acronym: "",
  });

  const handleDropdownChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleInputChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSubmit = () => {
    // Access the form data from formState
    console.log("Form State:", formState);
    // Perform further actions or submit the data
  };

  // Placeholder para pruebas
  const labInfo = {
    nombre: "Laboratorio 1",
    fecha: "05-11-2023",

  }

  const createDropdown = (label, options, field) => (
    <Dropdown as={ButtonGroup} className="m-3">
      <Button id="custom-button">{formState[field] || label}</Button>
      <Dropdown.Toggle className="custom-dropdown" split />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option}
            onClick={() => handleDropdownChange(field, option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <PaginaBase>
      <Container id="custom-container">
        <Row>
        <Col md={6}>
          <Card className="w-100 mx-auto border-0">
            {createDropdown("Laboratorio", reservar.labs, "lab")}
            {createDropdown("Fecha", reservar.fechas, "date")}
            {createDropdown("Hora inicio", reservar.horas, "inicio")}
            {createDropdown("Hora final", reservar.horas, "final")}

            {["curso", "grupo", "observaciones", "siglas del curso"].map(
              (field) => (
                <Form.Group className="m-3" controlId={`descripcion${field}`}>
                  <Form.Label>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={formState[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                </Form.Group>
              )
            )}
          </Card>
        </Col>
        <Col md={6}>
          <LabSchedule laboratorio={labInfo.nombre} date={labInfo.fecha} showIcon={true}/>
        </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Button id="custom-button" onClick={handleSubmit}>
          Solicitar Reservación
        </Button>
      </Container>
    </PaginaBase>
  );
};

export default Reservar;
