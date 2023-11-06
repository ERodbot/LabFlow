import React, { useState, useEffect } from "react";
import PaginaBase from "../../PaginaBase";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";
import "./MisReservaciones.css";
import reservacionesData from "./misreservaciones.json";

const MisReservaciones = () => {
  const [reservaciones, setReservaciones] = useState(
    reservacionesData.reservas
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReservaciones, setFilteredReservaciones] =
    useState(reservaciones);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = reservaciones.filter((reservacion) =>
      ["Fecha", "Hora", "Laboratorio", "Estado"].some((key) =>
        reservacion[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
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
              <tr
                key={index}
                onClick={() => {
                  window.location.href = "/reservaciones_info";
                }}
              >
                {["Fecha", "Hora", "Laboratorio", "Estado"].map((key) => (
                  <td id="td">{reservacion[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </PaginaBase>
  );
};

export default MisReservaciones;
