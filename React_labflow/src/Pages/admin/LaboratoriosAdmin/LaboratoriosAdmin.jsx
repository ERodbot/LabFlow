import PaginaBase from "../../PaginaBase";
import LaboratorioCard from "../../../Componentes/LaboratoryCard/LaboratoryCard";
import TwoButtons from "../../../Componentes/TwoButtons/TwoButtons";

/*rect-bootstrap*/
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {LabsDetails} from "../../../api/lab.jsx"

/*Custom css*/
import "./LaboratoriosAdmin.css";

// ...

const LaboratoriosAdmin = () => {
  const [laboratorios, setLaboratorios] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await LabsDetails();
      setLaboratorios(response.data);
    } catch (error) {
      console.log("Error fetching lab details: ", error);
    }
  };

    fetchData();
  }, []);

  return (
    <PaginaBase>
      <Container style={{ marginTop: "8rem" }}>
        <Row className="g-5">
          {laboratorios && laboratorios.map((laboratorio, indice) => (
            <Col key={indice}>
              <LaboratorioCard laboratorio={laboratorio} showIcon={true} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Row>
          <Col>
            <Link to="/manejo_labs">
              <Button className="mx-auto custom-button">
                Agregar laboratorios
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="Visualizar_Problema">
              <Button className="mx-auto custom-button">Ver reportes</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </PaginaBase>
  );
};

export default LaboratoriosAdmin;
