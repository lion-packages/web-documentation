import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import NavigationLinks from "../../Tools/NavigationLinks";

import logo from "./../../assets/img/logo-web.png";

function NavbarNavigation() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="bg-dark-logo border-bottom border-secondary py-0"
      style={{ "--bs-border-opacity": ".5" }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} width={220} height={65} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NavigationLinks.map((link, index) =>
              link.type === "link" ? (
                <LinkContainer to={link.url} key={index}>
                  <Nav.Link>{link.display_name}</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNavigation;
