// LaboratorioCard.js
import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./LaboratoryCard.css";
import labbigicon from "../../images/labbigicon.jpg";
import editicon from "../../images/edit.svg";


const LaboratorioCard = ({ laboratorio, showIcon }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const redirect = () => {
    navigate("/manejo_labs", { state: { lab: laboratorio } })
  };


  const formatMaintenanceMessage = (mantenimiento) => {
    const amount = mantenimiento.amount;
    const interval = mantenimiento.interval;
    return `${amount} ${amount > 1 ? 'veces' : 'vez'} cada ${interval}`;
  };


  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "18rem",
        height: "22rem",
        backgroundColor: "#41ADE7",
        padding: "0rem",
      }}
    >
      {isHovered ? (
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Text className="mx-5 my-auto">
            Ubicación: {laboratorio.ubicacion}
          </Card.Text>
          <Card.Text className="mx-5 my-auto">
            Mantenimiento: {formatMaintenanceMessage(laboratorio.mantenimiento)}
          </Card.Text>
          <Card.Title className="my-auto align-items-center">
            {laboratorio.nombre}
          </Card.Title>
          {showIcon && (
            <img
              onClick={redirect}
              className="custom-icon"
              src={editicon}
              alt="editar lab"
            />
          )}
        </Card.Body>
      ) : (
        <>
          <Card.Img
            variant="top"
            src={labbigicon}
            style={{ width: "100%", height: "85%" }}
          />
          <Card.Title className="my-auto d-flex flex-column align-items-center">
            {laboratorio.nombre}
          </Card.Title>
        </>
      )}
    </Card>
  );
};

export default LaboratorioCard;
