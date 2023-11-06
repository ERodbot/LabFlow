import React, { useState, useEffect } from "react";
import PaginaBase from "../../PaginaBase";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";
import "./MisReservaciones.css";
import { useAuth} from "../../../contexts/auth";
import { reservaEmail } from "../../../api/reserva";
import { useNavigate } from "react-router-dom";


const MisReservaciones = () => {

  const [reservaciones, setReservaciones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReservaciones, setFilteredReservaciones] = useState([]);

  const navigate = useNavigate();
  const {user} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await reservaEmail(user.email);
        console.log(response.data);
        const sortedReservaciones = response.data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        setReservaciones(sortedReservaciones);
      } catch (error) {
        console.log("Error fetching lab details: ", error);
      }
    };
    fetchData();
  }, []);



  useEffect(() => {
    const filtered = reservaciones.filter((reservacion) =>
      ["fecha", "inicio", "laboratorio", "estado"].some((key) =>
        reservacion[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    setFilteredReservaciones(filtered);
  }, [searchTerm, reservaciones]);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString('es-ES', options);
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
            {filteredReservaciones.map((reservacion) => (
              <tr
                key={reservacion._id}
                onClick={() => {
                  navigate("/reservaciones_info", {state: {reservaInfo: reservacion}});
                }}
              >
              <td id="td">{formatDate(reservacion.fecha)}</td>
              <td id="td">{reservacion.inicio}</td>
              <td id="td">{reservacion.laboratorio}</td>
              <td id="td">{reservacion.estado}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </PaginaBase>
  );
};

export default MisReservaciones;
