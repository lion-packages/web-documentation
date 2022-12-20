import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import NavigationLinks from "../../Tools/NavigationLinks";

function NavbarNavigation() {
  return (
    <Navbar bg="dark-blue" variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>LION</Navbar.Brand>
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
