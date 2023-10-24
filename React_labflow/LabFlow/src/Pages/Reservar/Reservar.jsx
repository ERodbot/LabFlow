import React, { useState } from "react";
import {
  Dropdown,
  Button,
  ButtonGroup,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import PaginaBase from "../PaginaBase";
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
      <Container style={{ marginTop: "10%" }}>
        <Card className="w-50 mx-auto border-0">
          <Dropdown
            as={ButtonGroup}
            onClick={(event) => handleLabChange(event)}
            className="m-3"
          >
            <Button style={{ backgroundColor: "#7CB755", border: "none" }}>
              Laboratorio
            </Button>
            <Dropdown.Toggle
              style={{ backgroundColor: "#7CB755", border: "none" }}
              split
              id="dropdown-split-lab"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              {reservar.labs.map((laboratorio) => (
                <Dropdown.Item key={laboratorio}>{laboratorio}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup} className="m-3">
            <Button style={{ backgroundColor: "#7CB755", border: "none" }}>
              Horario
            </Button>
            <Dropdown.Toggle
              style={{ backgroundColor: "#7CB755", border: "none" }}
              split
              id="dropdown-split-space"
            />
            <Dropdown.Menu>
              {reservar.espacio.map((espacioTemporal) => (
                <Dropdown.Item
                  key={espacioTemporal}
                  onSelect={() => handleSpaceChange(espacioTemporal)}
                >
                  {espacioTemporal}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup} className="m-3">
            <Button style={{ backgroundColor: "#7CB755", border: "none" }}>
              Fecha
            </Button>
            <Dropdown.Toggle
              style={{ backgroundColor: "#7CB755", border: "none" }}
              split
              id="dropdown-split-date"
            />
            <Dropdown.Menu>
              {reservar.fechas.map((fechareserva) => (
                <Dropdown.Item
                  key={fechareserva}
                  onSelect={() => handleDateChange(fechareserva)}
                >
                  {fechareserva}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="m-3" controlId="descripcionCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="descripcionGroup">
            <Form.Label>Group</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="descripcionObservations">
            <Form.Label>Observations</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Observations"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="descripcionAcronym">
            <Form.Label>Acronym</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Acronym"
              value={acronym}
              onChange={(e) => setAcronym(e.target.value)}
            />
          </Form.Group>
        </Card>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Button
          style={{ backgroundColor: "#7CB755", border: "none" }}
          onClick={handleSubmit}
        >
          Solicitar Reservación
        </Button>
        <h1>{lab} hola</h1>
        <h1>{date}</h1>
        <h1>{space}</h1>
      </Container>
    </PaginaBase>
  );
};

export default Reservar;
