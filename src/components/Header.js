import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="me-5">
            <LinkContainer to="/">
              <h1>PISCO</h1>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="me-auto">
                <LinkContainer to="/trade">
                  <Nav.Link active={location.pathname === "/trade"}>
                    거래소
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/bank">
                  <Nav.Link active={location.pathname === "/bank"}>
                    자산 입출금
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/service">
                  <Nav.Link active={location.pathname === "/service"}>
                    고객센터
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <hr class="hr" />
              <Nav className="ml-auto gap-1 custom-button-group">
                <LinkContainer to="/login">
                  <Nav.Link
                    className="btn btn-primary custom-button"
                    active={location.pathname === "/login"}
                  >
                    로그인
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link
                    className="btn btn-primary custom-button"
                    active={location.pathname === "/signup"}
                  >
                    회원가입
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
