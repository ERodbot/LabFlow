import React, { useState } from "react";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";
import datosEjemplo from "./datos.json";
import PaginaBase from "../../PaginaBase";
import "./ManejoGeneral.css";
import { useAuth } from "../../../contexts/auth";

const ManejoGeneral = () => {

  const { user } = useAuth();
  console.log(user)
  
  const [datos, setDatos] = useState(datosEjemplo.datos);
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBotonSeleccionado = (id) => setBotonSeleccionado(id);

  const filteredDatos = datos.filter((dato) =>
    ["correo", "usuario"].some((key) =>
      dato[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
     <PaginaBase>
      <Container>
        <div className="table-header">
          <div className="buttons-row">
            {[1, 2, 3].map((buttonId) => (
              <button
                key={buttonId}
                onClick={() => handleBotonSeleccionado(buttonId)}
                className={
                  botonSeleccionado === buttonId ? "selected" : "not-selected"
                }
              >
                {buttonId === 1
                  ? "Usuarios"
                  : buttonId === 2
                  ? "Solicitudes"
                  : "Problemas técnicos"}
              </button>
            ))}
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
              <tr
                key={dato.id}
                onClick={() => {
                  window.location.href = "/principal";
                }}
              >
                {["correo", "usuario"].map((key) => (
                  <td key={key} id="custom-td">
                    {dato[key]}
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

export default ManejoGeneral;
