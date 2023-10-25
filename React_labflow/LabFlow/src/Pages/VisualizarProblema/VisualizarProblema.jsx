import React, { useState } from "react";
import PaginaBase from "../PaginaBase";
import { Card, Col, Row, Form } from "react-bootstrap";
import problems from "./problema.json";

const VisualizarProblema = () => {
  const [problemData, setProblemData] = useState(problems);

  return (
    <PaginaBase>
      <Card className="p-5 w-50 mx-auto mt-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Usuario:</Form.Label>
            <Form.Control type="text" readOnly value={problemData.usuario} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Fecha:</Form.Label>
            <Form.Control type="text" readOnly value={problemData.fecha} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Problema:</Form.Label>
            <Form.Control type="text" readOnly value={problemData.problema} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-left">Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              readOnly
              value={problemData.descripción}
            />
          </Form.Group>
        </Form>
      </Card>
    </PaginaBase>
  );
};

export default VisualizarProblema;
