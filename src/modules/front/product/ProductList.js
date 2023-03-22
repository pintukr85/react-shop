import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductList() {
  return (
    <Container fluid>
      <Row>
        <Col sm="4">
          1 of 3
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
