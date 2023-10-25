import React, { useState } from "react";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";
import datosEjemplo from "./datos.json";
import "./ManejoGeneral.css";
import PaginaBase from "../PaginaBase";

const ManejoGeneral = () => {
  // Datos iniciales
  const [datos, setDatos] = useState(datosEjemplo.datos);

  // Estado para guardar el botón seleccionado
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  // Estado para la barra de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Manejar el clic en un botón seleccionado
  const handleBotonSeleccionado = (id) => {
    setBotonSeleccionado(id);
    console.log(botonSeleccionado);
  };

  // Filtrar los datos según la barra de búsqueda
  const filteredDatos = datos.filter((dato) => {
    return (
      dato.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dato.usuario.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <PaginaBase>
      <Container>
        <div className="table-header">
          <div className="buttons-row">
            <button
              onClick={() => handleBotonSeleccionado(1)}
              className={botonSeleccionado === 1 ? "selected" : "not-selected"}
            >
              Usuarios
            </button>
            <button
              onClick={() => handleBotonSeleccionado(2)}
              className={botonSeleccionado === 2 ? "selected" : "not-selected"}
            >
              Solicitudes
            </button>
            <button
              onClick={() => handleBotonSeleccionado(3)}
              className={botonSeleccionado === 3 ? "selected" : "not-selected"}
            >
              Problemas técnicos
            </button>
          </div>
          <InputGroup className="search-input">
            <FormControl
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
        <Table bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Correo</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            {filteredDatos.map((dato, index) => (
              <tr key={dato.id}>
                <td
                  style={{
                    backgroundColor: "#D6E49B",
                    border: "2px solid #000",
                  }}
                >
                  {dato.correo}
                </td>
                <td
                  style={{
                    backgroundColor: "#D6E49B",
                    border: "2px solid #000",
                  }}
                >
                  {dato.usuario}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </PaginaBase>
  );
};

export default ManejoGeneral;
