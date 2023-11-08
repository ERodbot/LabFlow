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
import "./ManejoLabs.css";
import guardar from "../../../images/save.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {updateLab} from "../../../api/lab.jsx"

const ManejoLabs = () => {

  const location = useLocation();
  const [lab, setLab] = useState(location.state?.lab);
  const navigate = useNavigate();

  console.log(lab);
  console.log(lab._id);


  // fetch a detalles de laboratorio especifico
  const interval = ["semana", "mes", "día"];
  const [nombre, setNombre] = useState(lab.nombre);
  const [ubicacion, setUbicacion] = useState(lab.ubicacion);
  const [amount, setAmount] = useState(lab.mantenimiento.amount);
  const [selectedInterval, setSelectedInterval] = useState(lab.mantenimiento.interval);
 
  const onClick = (e) => {
    const id = lab._id;
    const doc = {
      nombre: nombre,
      ubicacion: ubicacion,
      mantenimiento: {
        amount: amount,
        interval: selectedInterval
      }
    }
    const res = updateLab(doc, id);
    e.preventDefault();
    navigate("/laboratorios_admin");

  };

  return (
    <PaginaBase>
      <Container className="margin-custom">
        <Card className="p-5 w-50 mx-auto mt-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-left">Nombre:</Form.Label>
              <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-left">Ubicación:</Form.Label>
              <Form.Control type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
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
                        value={amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          setAmount(value.replace(/[^0-9]+/g, '')); // Regex para quitar letras y caracteres especiales
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Dropdown as={ButtonGroup} className="w-25 mx-auto">
                      <Button id="custom-button">{selectedInterval}</Button>
                      <Dropdown.Toggle
                        className="custom-dropdown"
                        split
                        id="dropdown-split-lab"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        {interval.map((opcion, index) => (
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedInterval(opcion);
                            }}
                            key={index}
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
            </Container>
          </Form>
          <Container className="my-5">
            <Row className="align-items-center">
              <Col>
                <Button className="custom-button my-auto">
                  <img className="icon" src={guardar} alt="guardar" onClick={onClick}/>
                </Button>
              </Col>
              <Col> 
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </PaginaBase>
  );
};

export default ManejoLabs;
