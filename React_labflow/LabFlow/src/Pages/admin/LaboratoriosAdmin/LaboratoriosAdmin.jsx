import PaginaBase from "../../PaginaBase";
import LaboratorioCard from "../../../Componentes/LaboratoryCard/LaboratoryCard";

/*rect-bootstrap*/
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/*Quitar despues, prueba para front-end*/
import labtest from "./labtest.json";

/*Custom css*/
import "./LaboratoriosAdmin.css";

// ...

const LaboratoriosAdmin = () => {
  const [laboratorios, setLaboratorios] = React.useState(labtest.laboratorios);

  return (
    <PaginaBase>
      <Container style={{ marginTop: "8rem" }}>
        <Row className="g-5">
          {laboratorios.map((laboratorio, indice) => (
            <Col key={indice}>
              <LaboratorioCard laboratorio={laboratorio} showIcon={true} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Row>
          <Col>
            <Link to="http://localhost:5173/Manejo_laboratorios">
              <Button className="mx-auto custom-button">
                Agregar laboratorios
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="http://localhost:5173/Visualizar_Problema">
              <Button className="mx-auto custom-button">Ver reportes</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </PaginaBase>
  );
};

export default LaboratoriosAdmin;
