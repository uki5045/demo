import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className={"d-flex align-items-center mx-auto"}>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
