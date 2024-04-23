import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import NavigationLinks from "../../Tools/NavigationLinks";

import logo from "./../../assets/img/lion-black-icon-long.png";
import { FaGithub } from "react-icons/fa";
import { Image } from "react-bootstrap";

function NavbarNavigation() {
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      className="bg-dark-logo border-bottom border-secondary py-0"
      style={{ "--bs-border-opacity": ".5" }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image src={logo} height={80} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NavigationLinks.map((link, index) =>
              link.type === "link" ? (
                <LinkContainer to={link.url} key={index}>
                  <Nav.Link className="fw-bold d-flex align-items-center justify-content-center">
                    {link.display_name}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown
                  key={index}
                  title={link.display_name}
                  menuVariant="dark"
                  align={"end"}
                >
                  {link.childs.map((child, indexChild) => (
                    <LinkContainer to={child.url} key={indexChild}>
                      <NavDropdown.Item>{child.display_name}</NavDropdown.Item>
                    </LinkContainer>
                  ))}
                </NavDropdown>
              )
            )}
            <Nav.Link href="#" className="d-none d-xl-block">
              <div className="vr h-100"></div>
            </Nav.Link>
            <Nav.Link
              href={"https://github.com/lion-packages"}
              target="_blank"
              className="d-none d-xl-block"
            >
              <FaGithub size={"2.5em"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNavigation;
