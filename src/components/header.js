import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="md" className="navbar px-3">
      <Navbar.Brand>
        <Nav.Link as={Link} to="/" className="nav-link">
          chris spencer
        </Nav.Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/projects" className="nav-link">
            portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            about
          </Nav.Link>
          <Nav.Link as={Link} to="/resume" className="nav-link">
            resume
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;