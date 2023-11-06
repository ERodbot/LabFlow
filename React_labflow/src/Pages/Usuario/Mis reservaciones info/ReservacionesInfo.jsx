import PaginaBase from "../../PaginaBase";

/*rect-bootstrap*/
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



/*Custom css*/
import "./ReservacionesInfo.css";

const ReservacionesInfo = () => {

  const location = useLocation();
  const [reservacionInfo, setReservaInfo] = useState(location.state?.reservaInfo);

  const eliminateReservation = (id) => {
    console.log(id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString('es-ES', options);
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
                  <p className="reservationProperty">{reservacionInfo.laboratorio}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{formatDate(reservacionInfo.fecha)}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">
                    {reservacionInfo.inicio}
                  </p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{reservacionInfo.final}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{reservacionInfo.usuario}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">
                    {reservacionInfo["sigla_del_curso"]}
                  </p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">
                    {reservacionInfo["nombre_del_curso"]}
                  </p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{reservacionInfo.grupo}</p>
                </div>
                <div className="textSpace">
                  <p className="reservationProperty">{reservacionInfo.observaciones}</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
      <Container className="d-flex justify-content-center my-5">
        <Link to="/mis_reservaciones">
          <Button
            id="button-style"
            onClick={() => eliminateReservation(reservacionInfo._id)}
          >
            Cancelar reservación.
          </Button>
        </Link>
      </Container>
    </PaginaBase>
  );
};
export default ReservacionesInfo;
