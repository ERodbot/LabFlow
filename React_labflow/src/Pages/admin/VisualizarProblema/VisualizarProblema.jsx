import React, { useState } from "react";
import PaginaBase from "../../PaginaBase";
import { Card, Col, Row, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const VisualizarProblema = () => {


  const location = useLocation();
  const [problemaInfo, setProblemaInfo] = useState(location.state?.problemaInfo);
  console.log(problemaInfo);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <PaginaBase>
      <Card className="p-5 w-50 mx-auto mt-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Laboratorio:</Form.Label>
            <Form.Control type="text" readOnly value={problemaInfo.laboratorio} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Fecha:</Form.Label>
            <Form.Control type="text" readOnly value={formatDate(problemaInfo.createdAt)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Problema:</Form.Label>
            <Form.Control type="text" readOnly value={problemaInfo.problema} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              readOnly
              value={problemaInfo.descripcion}
            />
          </Form.Group>
        </Form>
      </Card>
    </PaginaBase>
  );
};

export default VisualizarProblema;
