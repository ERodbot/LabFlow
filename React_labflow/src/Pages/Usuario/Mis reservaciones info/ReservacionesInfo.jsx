import PaginaBase from "../../PaginaBase";

/*rect-bootstrap*/
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/*Quitar despues, prueba para front-end*/
import reservacioninfo from "./reservacioninfotest.json";

/*Custom css*/
import "./ReservacionesInfo.css";

const ReservacionesInfo = () => {
  const [labinfo, setLabfinfo] = useState(reservacioninfo);
  console.log(labinfo);
  const eliminateReservation = (id) => {
    console.log(id);
  };
  return (
    <PaginaBase>
      <Card className="p-2 w-75 mx-auto" id="card-style">
        <Row>
          {/* Column 1 with static titles */}
          <Col md={6}>
            <Card className="p-3 border-0 ">
              <div>
                <h3 className="infoTitle">Opciones</h3>
                <p className="reservationProperty">Laboratorio</p>
                <p className="reservationProperty">Fecha</p>
                <p className="reservationProperty">Hora inicio</p>
                <p className="reservationProperty">Hora final</p>
                <p className="reservationProperty">Usuario</p>
                <p className="reservationProperty">Siglo del curso</p>
                <p className="reservationProperty">Nombre del curso</p>
                <p className="reservationProperty">Grupo</p>
                <p className="reservationProperty">Observaciones</p>
              </div>
            </Card>
          </Col>
          {/* Column 2 with a rounded rectangle and custom text */}
          <Col md={6}>
            <Card className="p-3 border-0">
              <div>
                <h3 className="infoTitle">Selección</h3>
                <div className="textSpace">
                  <p className="reservationProperty">{labinfo.nombre}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{labinfo.fecha}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">
                    {labinfo.espacio.inicio}
                  </p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{labinfo.espacio.final}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{labinfo.usuario}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">
                    {labinfo["sigle-del-curso"]}
                  </p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">
                    {labinfo["nombre-del-curso"]}
                  </p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{labinfo.grupo}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{labinfo.observaciones}</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
      <Container className="d-flex justify-content-center my-5">
        <Link to="http://localhost:5173/Mis_reservaciones">
          <Button
            id="button-style"
            onClick={() => eliminateReservation(labinfo.id)}
          >
            Cancelar reservación.
          </Button>
        </Link>
      </Container>
    </PaginaBase>
  );
};
export default ReservacionesInfo;