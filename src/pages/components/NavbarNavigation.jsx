import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import NavigationLinks from "../../Tools/NavigationLinks";
import logo from "./../../assets/img/icon-dark.png";
import { FaGithub } from "react-icons/fa";
import { Image } from "react-bootstrap";
import Content from "../../Tools/Content";
import { useState } from "react";

function NavbarNavigation() {
  const [expanded, setExpanded] = useState(false);

  const FrameworkLink = () => {
    return (
      <LinkContainer
        to={
          "/docs/framework/" +
          Object.keys(Content().framework).shift() +
          "/getting-started/about-as"
        }
      >
        <Nav.Link
          className="fw-bold d-flex align-items-center justify-content-center"
          onClick={() => setExpanded(!expanded)}
        >
          Framework
        </Nav.Link>
      </LinkContainer>
    );
  };

  return (
    <Navbar
      expanded={expanded}
      sticky="top"
      variant="dark"
      expand="lg"
      className="bg-dark-logo"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={() => setExpanded(false)}>
            <Image src={logo} width={50} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="ms-auto">
            <FrameworkLink />

            {NavigationLinks.map((link, index) =>
              link.type === "link" ? (
                <LinkContainer to={link.url} key={index}>
                  <Nav.Link
                    className="fw-bold d-flex align-items-center justify-content-center"
                    onClick={() => setExpanded(!expanded)}
                  >
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
