import PaginaBase from "../../PaginaBase";
import LaboratorioCard from "../../../Componentes/LaboratoryCard/LaboratoryCard";

/*rect-bootstrap*/
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import labbigicon from "../../../images/labbigicon.jpg";
import { Link } from "react-router-dom";

import {LabsDetails} from "../../../api/lab.jsx"


/*Custom css*/
import "./Laboratorios.css";

// ...

const Laboratorios = () => {

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
      <Container id="top-8">
        <Row className="g-5">
          {laboratorios && laboratorios.map((laboratorio, indice) => (
            <Col key={indice}>
              <LaboratorioCard laboratorio={laboratorio} showIcon={false} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Link to="/Reportes">
          <Button style={{ backgroundColor: "#41ADE7", border: "none" }}>
            Reportar problema
          </Button>
        </Link>
      </Container>
    </PaginaBase>
  );
};

export default Laboratorios;
