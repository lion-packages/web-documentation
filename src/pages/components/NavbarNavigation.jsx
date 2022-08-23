import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function NavbarNavigation() {
  const [links, setLinks] = useState([
    {
      display_name: "Framework",
      type: "link",
      url: "",
      childs: [],
    },
    {
      display_name: "Libraries",
      type: "items",
      url: "#",
      childs: [
        { display_name: "Command", url: "/libraries/command" },
        { display_name: "Files", url: "/libraries/files" },
        { display_name: "Mailer", url: "/libraries/mailer" },
        { display_name: "Request", url: "/libraries/request" },
        { display_name: "Route", url: "/libraries/route" },
        { display_name: "Security", url: "/libraries/security" },
        { display_name: "SQL", url: "/libraries/sql" },
      ],
    },
  ]);

  return (
    <Navbar bg="dark-blue" variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>LION</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) =>
              link.type === "link" ? (
                <LinkContainer to={link.url} key={index}>
                  <Nav.Link>
                    {link.display_name}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown key={index} title={link.display_name} menuVariant="dark">
                  {link.childs.map((child, indexChild) => (
                    <LinkContainer to={child.url} key={indexChild}>
                      <NavDropdown.Item>
                        {child.display_name}
                      </NavDropdown.Item>
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
