import React, { useState } from "react";
import { Table, Container, Button, Dropdown } from "react-bootstrap";

const data = {
  correoElectronico: "correo@example.com",
  nombre: "John",
  primerApellido: "Doe",
  segundoApellido: "Smith",
};

const DropdownComponent = ({ active, privilege, setPrivilege }) => {
  if (active) {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {privilege}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setPrivilege("admin")}>
            Admin
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setPrivilege("usuario base")}>
            Usuario Base
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setPrivilege("gestor")}>
            Gestor
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    return <span>{privilege}</span>;
  }
};

const DisplayInfoUser = () => {
  const [privilege, setPrivilege] = useState("admin");
  const active = true; // Cambia esto según tu lógica para mostrar el Dropdown

  return (
    <Container>
      <Table bordered hover className="br-auto">
        <tbody>
          <tr>
            <td style={{ background: "#ADC05C", color: "white" }}>
              Correo Electrónico
            </td>
            <td>{data.correoElectronico}</td>
          </tr>
          <tr>
            <td style={{ background: "#ADC05C", color: "white" }}>Nombre</td>
            <td>{data.nombre}</td>
          </tr>
          <tr>
            <td style={{ background: "#ADC05C", color: "white" }}>
              Primer Apellido
            </td>
            <td>{data.primerApellido}</td>
          </tr>
          <tr>
            <td style={{ background: "#ADC05C", color: "white" }}>
              Segundo Apellido
            </td>
            <td>{data.segundoApellido}</td>
          </tr>
          <tr>
            <td style={{ background: "#ADC05C", color: "white" }}>
              Privilegio
            </td>
            <td>
              <DropdownComponent
                active={active}
                privilege={privilege}
                setPrivilege={setPrivilege}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default DisplayInfoUser;
