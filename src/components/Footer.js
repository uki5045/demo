import React from "react";
import { Container, Row, Col, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer className="bg-light py-3 footer">
      <Container className="py-5">
        <Row>
          <Col xs={12} sm={6}>
            <h3 className="text-uppercase">PISCO</h3>
          </Col>
          <Col xs={12} sm={6}>
            <h6 className="text-uppercase">자산 입출금</h6>
            <Nav className="flex-column">
              <LinkContainer exact to="/">
                <NavItem>입금</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>출금</NavItem>
              </LinkContainer>
              <LinkContainer to="/services">
                <NavItem>입출금 내역</NavItem>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <NavLink to="#">
            <i className="fab fa-facebook fa-2x mx-3"></i>
          </NavLink>
          <NavLink to="#">
            <i className="fab fa-twitter fa-2x mx-3"></i>
          </NavLink>
          <NavLink to="#">
            <i className="fab fa-instagram fa-2x mx-3"></i>
          </NavLink>
        </Row>
        <Row className="justify-content-center mt-3">
          <p className="text-muted">
            Copyright &copy; {new Date().getFullYear()} Your Website
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
