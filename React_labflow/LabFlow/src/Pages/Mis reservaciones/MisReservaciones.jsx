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

const MisReservaciones = () => {
  const [reservaciones, setReservaciones] = React.useState(
    reservacionesData.reservas
  );
  const [filteredReservaciones, setFilteredReservaciones] =
    React.useState(reservaciones);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
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
              <tr key={index}>
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
