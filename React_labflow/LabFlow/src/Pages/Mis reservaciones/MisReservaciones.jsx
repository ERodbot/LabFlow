import React from "react";
import PaginaBase from "../PaginaBase";
import {
  Container,
  Row,
  Col,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./MisReservaciones.css";
import reservacionesData from "./misreservaciones.json";
import { Link } from "react-router-dom";

const MisReservaciones = () => {
  const [reservaciones, setReservaciones] = React.useState(
    reservacionesData.reservas
  );

  const [filteredReservaciones, setFilteredReservaciones] =
    React.useState(reservaciones);

  const [searchTerm, setSearchTerm] = React.useState("");

  const [individualReservation, setIndividualReservation] =
    React.useState(null);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleTableRowClick = (rutaNueva) => {
    // Manejar la navegación al hacer clic en una fila
  };

  React.useEffect(() => {
    const filtered = reservaciones.filter((reservacion) => {
      return (
        reservacion.Fecha.includes(searchTerm) ||
        reservacion.Hora.includes(searchTerm) ||
        reservacion.Laboratorio.includes(searchTerm) ||
        reservacion.Estado.includes(searchTerm)
      );
    });

    setFilteredReservaciones(filtered);
  }, [searchTerm, reservaciones]);

  const handleReservationSelection = (index) => {
    console.log(index + 1);
    window.location.href = "Mis_reservaciones_info";
  };

  return (
    <PaginaBase>
      <Container>
        <div className="table-header">
          <strong>Reservaciones</strong>
          <InputGroup className="search-input">
            <FormControl
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </InputGroup>
        </div>
        <Table bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Laboratorio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservaciones.map((reservacion, index) => (
              <tr key={index} onClick={() => handleReservationSelection(index)}>
                <td
                  style={{
                    backgroundColor: "#F0E7BA",
                    border: "2px solid #000",
                  }}
                >
                  {reservacion.Fecha}
                </td>
                <td
                  style={{
                    backgroundColor: "#F0E7BA",
                    border: "2px solid #000",
                  }}
                >
                  {reservacion.Hora}
                </td>
                <td
                  style={{
                    backgroundColor: "#F0E7BA",
                    border: "2px solid #000",
                  }}
                >
                  {reservacion.Laboratorio}
                </td>
                <td
                  style={{
                    backgroundColor: "#F0E7BA",
                    border: "2px solid #000",
                  }}
                >
                  {reservacion.Estado}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </PaginaBase>
  );
};

export default MisReservaciones;
