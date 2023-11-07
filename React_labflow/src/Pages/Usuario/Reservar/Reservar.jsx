import React, { useState, useEffect} from "react";
import {
  Dropdown,
  Button,
  ButtonGroup,
  Container,
  Card,
  Form,
  Row,
  Col
} from "react-bootstrap";
import PaginaBase from "../../PaginaBase";
import LabSchedule from "../../../Componentes/LabSchedule/LabSchedule";
import "./Reservar.css";
import { useAuth} from "../../../contexts/auth";
import { LabsDetails } from "../../../api/lab";
import { crearReserva } from "../../../api/reserva";



const Reservar = () => {

  const { user } = useAuth();

  const [laboratorios, setLaboratorios] = useState([]);
  const [fechas, setFechas] = useState([]);
  const [horas, setHoras] = useState([]);
  const [reservationChange, setReservationChange] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LabsDetails();
        const labNombres = response.data.map((lab) => lab.nombre);
        setLaboratorios(labNombres);
      } catch (error) {
        console.log("Error fetching lab details: ", error);
      }
    };
    fetchData();

    const timeSlots = Array.from({ length: 13 }, (_, i) => `${7 + i}:00`);
    setHoras(timeSlots);

    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    endOfYear.setHours(23, 59, 59, 999);
    const allDates = [];

    for (let date = new Date(today); date <= endOfYear; date.setDate(date.getDate() + 1)) {
      // Format the date in 'YYYY-MM-DD' format
      const formattedDate = date.toISOString().split('T')[0];
      allDates.push(formattedDate);
    }

    setFechas(allDates);

  }, []);



  const [formState, setFormState] = useState({
    laboratorio: "Laboratorio 1",
    fecha: "2023-01-01",
    inicio: null,
    final: null,
    usuario: user.email,
    sigla_del_curso: "",
    nombre_del_curso: "",
    grupo: "",
    observaciones: ""
  });

  const handleDropdownChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleInputChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleSubmit = async () => {
    // Access the form data from formState
    let errors = [];
    if (!formState.laboratorio) {
      errors.push("Laboratorio is required.");
    }
    if (!formState.fecha) {
      errors.push("Fecha is required.");
    }
    if (!formState.inicio) {
      errors.push("Hora inicio is required.");
    }
    if (!formState.final) {
      errors.push("Hora final is required.");
    }
    if (!formState.sigla_del_curso) {
      errors.push("Sigla del curso is required.");
    }
    if (!formState.nombre_del_curso) {
      errors.push("Nombre del curso is required.");
    }
    if (!formState.grupo) {
      errors.push("Grupo is required.");
    }
  
    // Check if there are any errors
    if (errors.length > 0) {
      // Log the errors or display them to the user
      console.error("Form validation errors:", errors);
      alert("Por favor llene todos los campos.");
      // Stop the form submission if there are errors
      return;
    }

    console.log(formState);

    try {
      const response = await crearReserva(formState);
      console.log("Response: ", response.data);
      alert("Reservación creada exitosamente!");
      setReservationChange((prev) => prev + 1);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("Error al crear la reservación.");
      }
      console.error("Error creating reservation:", error);
    }


  };


  const createDropdown = (label, options, field) => (
    <Dropdown as={ButtonGroup} className="m-3">
      <Button id="custom-button">{formState[field] || label}</Button>
      <Dropdown.Toggle id="custom-button" split />
      <Dropdown.Menu style={field === 'fecha' ? { maxHeight: '300px', overflowY: 'scroll' } : {}}>
        {options.map((option) => (
          <Dropdown.Item
            key={option}
            onClick={() => handleDropdownChange(field, option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <PaginaBase>
      <Container id="custom-container">
        <Row>
        <Col md={6}>
          <Card className="w-100 mx-auto border-0">
            {createDropdown("Laboratorio", laboratorios, "laboratorio")}
            {createDropdown("Fecha", fechas, "fecha")}
            {createDropdown("Hora inicio", horas, "inicio")}
            {createDropdown("Hora final", horas, "final")}

            {[
            { label: "Sigla del curso", key: "sigla_del_curso" },
            { label: "Nombre del curso", key: "nombre_del_curso" },
            { label: "Grupo", key: "grupo" },
            { label: "Observaciones", key: "observaciones" }
            ].map(({ label, key }) => (
            <Form.Group className="m-3" controlId={`form${key}`}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formState[key]}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </Form.Group>
          ))}

          </Card>
        </Col>
        <Col md={6}>
          <LabSchedule laboratorio={formState.laboratorio} date={formState.fecha} showIcon={true} reservationChange={reservationChange}/>
        </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Button id="custom-button" onClick={handleSubmit} style={{width: 'auto', height: '3rem'}}>
          Solicitar Reservación
        </Button>
      </Container>
    </PaginaBase>
  );
};

export default Reservar;
