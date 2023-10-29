import React, { useState, useEffect } from "react";
import PaginaBase from "../../PaginaBase";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";
import "./AdministrarReservaciones.css";
import reservacionesData from "./misreservaciones.json";

const AdministrarReservaciones = () => {
  const [reservaciones, setReservaciones] = useState(
    reservacionesData.reservas
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReservaciones, setFilteredReservaciones] =
    useState(reservaciones);

  const handleSearch = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    const filtered = reservaciones.filter((reservacion) =>
      Object.values(reservacion).some((value) => value.includes(searchTerm))
    );
    setFilteredReservaciones(filtered);
  }, [searchTerm, reservaciones]);

  const handleReservationSelection = () => {
    // Handle the selection logic here
  };

  return (
    <PaginaBase isadmin={true}>
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
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservaciones.map((reservacion, index) => (
              <tr key={index} onClick={handleReservationSelection}>
                {Object.values(reservacion).map((value, subIndex) => (
                  <td id="custom-td" key={subIndex}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </PaginaBase>
  );
};

export default AdministrarReservaciones;
