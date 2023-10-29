// LaboratorioCard.js
import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LaboratoryCard.css";
import labbigicon from "../../images/labbigicon.jpg";
import ucricon from "../../images/edit.svg";

const LaboratorioCard = ({ laboratorio, showIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const redirect = () => {
    window.location.href = "Manejo_laboratorios";
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
            Mantenimiento: Cada {laboratorio.mantenimiento.cada} veces{" "}
            {laboratorio.mantenimiento.veces}
          </Card.Text>
          <Card.Title className="my-auto">
            Laboratorio: {laboratorio.nombre}
          </Card.Title>
          {showIcon && (
            <img
              onClick={redirect}
              className="custom-icon"
              src={ucricon}
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
          <Card.Title className="my-auto">
            Laboratorio: {laboratorio.nombre}
          </Card.Title>
        </>
      )}
    </Card>
  );
};

export default LaboratorioCard;
