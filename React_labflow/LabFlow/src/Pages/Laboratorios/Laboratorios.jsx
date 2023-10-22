import PaginaBase from "../PaginaBase";

/*rect-bootstrap*/
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import labbigicon from "../../images/labbigicon.jpg";
import { Link } from "react-router-dom";

/*Quitar despues, prueba para front-end*/
import labtest from "./labtest.json";

/*Custom css*/
import "./Laboratorios.css";

const Laboratorios = () => {
  const [laboratorios, setLaboratorios] = React.useState(labtest.laboratorios);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <PaginaBase>
      <Container style={{ marginTop: "8rem" }}>
        <Row className="g-5">
          {laboratorios.map((laboratorio, indice) => {
            const condition = (indice + 1) % 4 === 0;
            return (
              <React.Fragment key={indice}>
                <Col>
                  <Card
                    key={indice}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      width: "18rem",
                      height: "22rem",
                      backgroundColor: "#41ADE7",
                      padding: "0rem",
                    }}
                    className="custom-card"
                  >
                    {isHovered ? (
                      <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Text className="mx-auto my-auto mb-3">
                          Ubicación: {laboratorio.ubicacion}
                        </Card.Text>
                        <Card.Text className="mx-auto my-auto">
                          Mantenimiento: Cada {laboratorio.mantenimiento.cada}{" "}
                          veces {laboratorio.mantenimiento.veces}
                        </Card.Text>
                        <Card.Title className="my-auto">
                          Laboratorio: {laboratorio.nombre}
                        </Card.Title>
                      </Card.Body>
                    ) : (
                      <>
                        <Card.Img
                          variant="top"
                          src={labbigicon}
                          style={{ width: "100%", height: "85%" }}
                        />
                        <Card.Title className="my-auto">
                          Laboratorio: {laboratorio.nombre}
                        </Card.Title>
                      </>
                    )}
                  </Card>
                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Link to="http://localhost:5173/Reportes">
          <Button style={{ backgroundColor: "#41ADE7", border: "none" }}>
            Añadir laboratorios
          </Button>
        </Link>
      </Container>
    </PaginaBase>
  );
};

export default Laboratorios;
