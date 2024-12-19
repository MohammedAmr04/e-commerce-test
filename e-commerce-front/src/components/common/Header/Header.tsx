import { Container, Nav, Navbar } from "react-bootstrap";
import HeaderBasket from "../../eCommerce/HeaderBasket/HeaderBasket";
import { NavLink } from "react-router-dom";
import "./styles.css";
export default function Header() {
  return (
    <header className="pt-1 pb-1" style={{ backgroundColor: "#274D60" }}>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/home"
            style={{ color: "#6ba3be", fontWeight: "bold" }}
          >
            WearAura
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className="" as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Catgories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                about
              </Nav.Link>

              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
          <HeaderBasket />
        </Container>
      </Navbar>
    </header>
  );
}
