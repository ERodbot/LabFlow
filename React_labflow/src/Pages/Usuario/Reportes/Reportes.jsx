import PaginaBase from "../../PaginaBase";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { LabsDetails } from "../../../api/lab";
import { enviarReporte } from "../../../api/reporte";
import { useNavigate } from "react-router-dom";

const Reportes = () => {
  
  const [problema, setProblema] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [laboratorios, setLaboratorios] = React.useState([]);
  const [selectedLaboratorio, setSelectedLaboratorio] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LabsDetails();
        const labNombres = response.data.map((lab) => lab.nombre);
        setLaboratorios(labNombres);

        if (labNombres.length > 0) {
          setSelectedLaboratorio(labNombres[0]);
        }

      } catch (error) {
        console.log("Error fetching lab details: ", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!problema || !descripcion) {
      alert("Por favor llene ambos campos."); 
    } else {
      
      const reporte = {
        laboratorio: selectedLaboratorio,
        problema: problema,
        descripcion: descripcion,
      };

      try {
        const response = enviarReporte(reporte);
        console.log("Reporte enviado: ", response);
        alert("Reporte enviado exitosamente!");
        navigate("/Laboratorios");
      } catch (error) {
        console.log("Error al enviar reporte: ", error);
        alert("Error al enviar reporte.")
      }

    }
  };

  return (
    <PaginaBase>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="laboratorio">
                <Form.Label>Laboratorio</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedLaboratorio}
                  onChange={(e) => setSelectedLaboratorio(e.target.value)}
                >
                  {laboratorios.map((nombre, index) => (
                    <option key={index} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="problema">
                <Form.Label>Problema</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Describa el problema"
                  value={problema}
                  onChange={(e) => setProblema(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escriba una descripción detallada"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </PaginaBase>
  );
};
export default Reportes;
