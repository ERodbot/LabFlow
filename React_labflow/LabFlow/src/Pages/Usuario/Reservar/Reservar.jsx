import React, { useState } from "react";
import {
  Dropdown,
  Button,
  ButtonGroup,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import PaginaBase from "../../PaginaBase";
import "./Reservar.css";
import reservar from "./reservar.json";

const Reservar = () => {
  const [date, setDate] = useState(null);
  const [space, setSpace] = useState(null);
  const [lab, setLab] = useState(null);
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [observations, setObservations] = useState("");
  const [acronym, setAcronym] = useState("");

  // Event handler to update the state when an item is selected in the dropdown menus
  const handleLabChange = (event) => {
    console.log(event.target.value);
    setLab(event.target.value);
  };

  const handleSpaceChange = (selectedSpace) => {
    setSpace(selectedSpace);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  // Event handler to save the form data when the "Solicitar Reservación" button is clicked
  const handleSubmit = () => {
    // Save the form data to your state variables or send it to the server
    console.log("Lab:", lab);
    console.log("Space:", space);
    console.log("Date:", date);
    console.log("Course:", course);
    console.log("Group:", group);
    console.log("Observations:", observations);
    console.log("Acronym:", acronym);
  };

  return (
    <PaginaBase>
      <Container id="custom-container">
        <Card className="w-50 mx-auto border-0">
          <Dropdown as={ButtonGroup} className="m-3">
            <Button id="custom-button">{lab ? lab : "Laboratorio"}</Button>
            <Dropdown.Toggle
              className="custom-dropdown"
              split
              id="dropdown-split-lab"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              {reservar.labs.map((laboratorio) => (
                <Dropdown.Item
                  onClick={() => setLab(laboratorio)}
                  key={laboratorio}
                  eventKey={laboratorio}
                >
                  {laboratorio}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="m-3">
            <Button id="custom-button">{date ? date : "Fecha"}</Button>
            <Dropdown.Toggle
              className="custom-dropdown"
              split
              id="dropdown-split-date"
            />
            <Dropdown.Menu>
              {reservar.fechas.map((fechareserva) => (
                <Dropdown.Item
                  onClick={() => setDate(fechareserva)}
                  key={fechareserva}
                  eventKey={fechareserva}
                >
                  {fechareserva}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="m-3">
            <Button id="custom-button">
              {space ? space : "Espacio temporal"}
            </Button>
            <Dropdown.Toggle
              className="custom-dropdown"
              split
              id="dropdown-split-space"
            />
            <Dropdown.Menu>
              {reservar.espacio.map((espacioTemporal) => (
                <Dropdown.Item
                  onClick={() => setSpace(espacioTemporal)}
                  key={espacioTemporal}
                  eventKey={espacioTemporal}
                >
                  {espacioTemporal}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Group className="m-3" controlId="descripcionCourse">
            <Form.Label>Curso</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="descripcionGroup">
            <Form.Label>Grupo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="descripcionObservations">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="descripcionAcronym">
            <Form.Label>Siglas del curso</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={acronym}
              onChange={(e) => setAcronym(e.target.value)}
            />
          </Form.Group>
        </Card>
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
