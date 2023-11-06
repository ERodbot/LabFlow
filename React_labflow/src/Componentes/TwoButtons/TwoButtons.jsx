import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TwoButtons.css";
const TwoButtons = ({ textbtn1, linkbtn1, textbtn2, linkbtn2 }) => {
  return (
    <Container className="d-flex justify-content-center my-5 ">
      <Row>
        <Col>
          <Link to={linkbtn1}>
            <Button className="mx-auto" id="custom-button">
              {textbtn1}
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to={linkbtn2}>
            <Button className="mx-auto" id="custom-button">
              {textbtn2}
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default TwoButtons;
