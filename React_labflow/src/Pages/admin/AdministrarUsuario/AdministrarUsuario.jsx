import DisplayInfoUser from "../../../Componentes/DisplayInfoUser/DisplayInfoUser";
import PaginaBase from "../../PaginaBase";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./AdministrarUsuario.css";

const AdministrarUsuario = () => {


  const location = useLocation();
  const [usuarioInfo, setUsuarioInfo] = useState(location.state?.usuarioInfo);

  console.log(usuarioInfo);


  return (
    <PaginaBase>
      <Container>
        <DisplayInfoUser data={usuarioInfo}/>
        <Container>
          <Container className="d-flex justify-content-center my-5">
            <Row>
              <Col>
                <Link to="http://localhost:5173/Principal">
                  <Button className="mx-auto custom-button">
                    Cancelar Solicitud
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="http://localhost:5173/Principal">
                  <Button className="mx-auto custom-button">
                    Aceptar Solicitud
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </PaginaBase>
  );
};
export default AdministrarUsuario;
