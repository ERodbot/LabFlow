import PaginaBase from "../PaginaBase";
import { Container, Carousel } from "react-bootstrap"; // Importing Container and Carousel components
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/auth";

import "./Principal.css";
import image1 from "../../images/favicon ucr.png";
import image2 from "../../images/favicon ucr.png";
import image3 from "../../images/favicon ucr.png";

const Principal = () => {
  const { user } = useAuth();

  return (
    <PaginaBase isadmin = {user.admin}>
      <hr className="line" />
      <Container className="d-flex justify-content-center align-items-center">
        <Carousel className="carousel-p-style mx-auto">
          <Carousel.Item>
            <img src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
      <hr className="line" />
      <Container className="d-flex justify-content-center">
        <img
          src={image1}
          alt="First slide"
          style={{ width: "2rem", height: "2rem", marginTop: "4rem" }}
        />
      </Container>
    </PaginaBase>
  );
};
export default Principal;
