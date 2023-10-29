import PaginaBase from "../../PaginaBase";
import LaboratorioCard from "../../../Componentes/LaboratoryCard/LaboratoryCard";

/*rect-bootstrap*/
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import labbigicon from "../../../images/labbigicon.jpg";
import { Link } from "react-router-dom";

/*Quitar despues, prueba para front-end*/
import labtest from "./labtest.json";

/*Custom css*/
import "./Laboratorios.css";

// ...

const Laboratorios = () => {
  const [laboratorios, setLaboratorios] = React.useState(labtest.laboratorios);

  return (
    <PaginaBase>
      <Container id="top-8">
        <Row className="g-5">
          {laboratorios.map((laboratorio, indice) => (
            <Col key={indice}>
              <LaboratorioCard laboratorio={laboratorio} showIcon={false} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Link to="http://localhost:5173/Reportes">
          <Button style={{ backgroundColor: "#41ADE7", border: "none" }}>
            Reportar problema
          </Button>
        </Link>
      </Container>
    </PaginaBase>
  );
};

export default Laboratorios;
