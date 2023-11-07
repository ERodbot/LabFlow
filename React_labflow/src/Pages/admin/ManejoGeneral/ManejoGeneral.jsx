import React, { useEffect, useState } from "react";
import { Container, Table, InputGroup, FormControl } from "react-bootstrap";
import PaginaBase from "../../PaginaBase";
import "./ManejoGeneral.css";
import { useAuth } from "../../../contexts/auth";
import { getReservas } from "../../../api/reserva";
import { getUsers } from "../../../api/user";
import { getReportes } from "../../../api/reporte";

const ManejoGeneral = () => {

  const { user } = useAuth();
  
  const [usuarios, setUsuarios] = useState([]);
  const [solicitudes, setSolicitudes] = useState([]);
  const [problemas, setProblemas] = useState([]);
  const [reservas, setReservas] = useState([]);

  const [botonSeleccionado, setBotonSeleccionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const handleBotonSeleccionado = (id) => {
    setBotonSeleccionado(id);
  };

  const obtenerDatos = (id) => {
    switch (id) {
      case 1:
        return usuarios;
      case 2:
        return solicitudes;
      case 3:
        return problemas;
      case 4:
        return reservas;
      default:
        return [];
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString('es-ES', options);
  };

  const filteredDatos = () => {
    if (botonSeleccionado === 1) {
      return usuarios.filter(usuario =>
        ["nombre", "email"].some(key =>
          usuario[key] && usuario[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (botonSeleccionado === 2) {
      return solicitudes.filter(solicitud =>
        ["fecha", "email"].some(key =>
          solicitud[key] && solicitud[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (botonSeleccionado === 3) {
      return problemas.filter(problema =>
        ["createAt", "laboratorio"].some(key =>
          problema[key] && problema[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      return reservas.filter(reserva =>
        ["inicio", "usuario"].some(key =>
          reserva[key] && reserva[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const res = await getReservas();
        setReservas(res.data);

        const users = await getUsers();
        console.log(users.data)
        setUsuarios(users.data);

        const problemas = await getReportes();
        console.log(problemas.data)
        setProblemas(problemas.data);

        //aqui se hace la obtencion de las solicitudes, problemas y usuarios
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatos();
  }, []);
  return (
      <PaginaBase>
      <Container>
        <div className="table-header">
          <div className="buttons-row">
            {[1, 2, 3, 4].map((buttonId) => (
              <button
                key={buttonId}
                onClick={() => handleBotonSeleccionado(buttonId)}
                className={
                  botonSeleccionado === buttonId ? "selected" : "not-selected"
                }
              >
                <div className="justify-content-around width: 150px margin: 5px">
                  {buttonId === 1
                    ? "Usuarios"
                    : buttonId === 2
                    ? "Solicitudes"
                    : buttonId === 3
                    ? "Problemas técnicos"
                    : "Reservas"
                    }
                  </div>
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
        {/* <Table bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            {filteredDatos.map((dato) => (
              <tr
                key={dato.id}
                onClick={() => {
                  window.location.href = "/principal";
                }}
              >
                {["inicio", "usuario"].map((key) => (
                  <td key={key} id="custom-td">
                    {dato[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table> */}
  <Table bordered hover className="custom-table">
  <thead>
    <tr>
      {botonSeleccionado === 3 ? ( // Problemas técnicos
        <>
          <th>Laboratorio</th>
          <th>Fecha</th>
        </>
      ) : botonSeleccionado === 1 ? ( // Usuarios
        <>
          <th>Correo</th>
          <th>Nombre</th>
        </>
      ) : ( // Reservas u otros
        <>
          <th>Hora</th>
          <th>Correo</th>
        </>
      )}
    </tr>
  </thead>
  <tbody>
    {filteredDatos().map((dato, index) => (
      <tr
        key={index}
        onClick={() => {
          window.location.href = "/principal";
          id="custom-td"
        }}
      >
        {botonSeleccionado === 3 ? ( // Problemas técnicos
          <>
            <td>{dato.laboratorio}</td>
            <td>{formatDate(dato.createdAt)}</td>
          </>
        ) : botonSeleccionado === 1 ? ( // Usuarios
          <>
            <td>{dato.email}</td>
            <td>{dato.nombre}</td>
          </>
        ) : ( // Reservas u otros
          <>
            <td>{dato.inicio}</td>
            <td>{dato.usuario}</td>
          </>
        )}
      </tr>
    ))}
  </tbody>
</Table>
      </Container>
    </PaginaBase>
  );
};

export default ManejoGeneral;
