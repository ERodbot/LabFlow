import PaginaBase from "../../PaginaBase";
import LaboratorioCard from "../../../Componentes/LaboratoryCard/LaboratoryCard";

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
    </PaginaBase>
  );
};

export default LaboratoriosAdmin;
