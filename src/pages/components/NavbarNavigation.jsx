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
      type: "items",
      url: "",
      childs: [
        { display_name: 'Getting started', url: '/framework/getting-started' },
        { display_name: 'Commands', url: '/framework/commands' },
        { display_name: 'Headers', url: '/framework/headers' },
        { display_name: 'Request', url: '/framework/request' },
        { display_name: 'Response', url: '/framework/response' },
        { display_name: 'Security', url: '/framework/security' },
        { display_name: 'Carbon', url: '/framework/carbon' },
        { display_name: 'Routes', url: '/framework/routes' },
        { display_name: 'Controllers', url: '/framework/controllers' },
        { display_name: 'Middleware', url: '/framework/middleware' },
        { display_name: 'Models', url: '/framework/models' },
        { display_name: 'Rules', url: '/framework/rules' },
      ],
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
                <NavDropdown key={index} title={link.display_name} menuVariant="dark" align={'end'}>
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
