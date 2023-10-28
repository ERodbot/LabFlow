import React, { useState } from "react";
import PaginaBase from "../../PaginaBase";
import {
  Card,
  Col,
  Row,
  Form,
  Container,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import lab from "./lab.json";
import "./ManejoLabs.css";
import guardar from "../../../images/save.svg";
import borrar from "../../../images/delete.svg";
import añadir from "../../../images/add.svg";

const ManejoLabs = () => {
  const [schedule, setSchedule] = useState(lab.mantenimiento.veces);
  const [times, setTimes] = useState(lab.mantenimiento.cada);
  const [space, setSpace] = useState(lab.horario);

  return (
    <PaginaBase>
      <Container className="margin-custom">
        <Card className="p-5 w-50 mx-auto mt-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-left">Nombre:</Form.Label>
              <Form.Control type="text" value={lab.nombre} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-left">Ubicación:</Form.Label>
              <Form.Control type="text" value={lab.ubicacion} />
            </Form.Group>
            <Container className="border p-5">
              <Container>
                <Row className="align-items-center">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-left">
                        Mantenimiento:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        readOnly
                        value={lab.mantenimiento.veces}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Dropdown as={ButtonGroup} className="w-25 mx-auto">
                      <Button
                        style={{ backgroundColor: "#7CB755", border: "none" }}
                      >
                        {schedule}
                      </Button>
                      <Dropdown.Toggle
                        style={{ backgroundColor: "#7CB755", border: "none" }}
                        split
                        id="dropdown-split-lab"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        {lab.cada.map((opcion) => (
                          <Dropdown.Item
                            onClick={() => {
                              setSchedule(opcion);
                            }}
                            key={opcion}
                            eventKey={opcion}
                          >
                            {opcion}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="align-items-center">
                  <Col>
                    <p>Horario</p>
                  </Col>
                  <Col>
                    <Dropdown as={ButtonGroup} className="w-25 mx-auto">
                      <Button
                        style={{ backgroundColor: "#7CB755", border: "none" }}
                      >
                        {space}
                      </Button>
                      <Dropdown.Toggle
                        style={{ backgroundColor: "#7CB755", border: "none" }}
                        split
                        id="dropdown-split-horario"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        {lab.opciones.map((every) => (
                          <Dropdown.Item
                            onClick={() => {
                              setSpace(every);
                            }}
                            key={every}
                            eventKey={every}
                          >
                            {every}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Form>
          <Container className="my-5">
            <Row className="align-items-center">
              <Col>
                <Button className="custom-button my-auto">
                  <img className="icon" src={guardar} alt="guardar" />
                </Button>
              </Col>
              <Col>
                <Button className="custom-button my-auto">
                  <img className="icon" src={borrar} alt="borrar" />
                </Button>
              </Col>
              <Col>
                <Button className="custom-button my-auto">
                  <img className="icon" src={añadir} alt="borrar" />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </PaginaBase>
  );
};

export default ManejoLabs;
