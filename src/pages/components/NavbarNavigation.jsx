import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

import NavigationLinks from "../../Tools/NavigationLinks";

import logo from "./../../assets/img/logo-web.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaYoutube } from "react-icons/fa";
import SelectVersionButton from "./SelectVersionButton";

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
            <img src={logo} width={180} height={50} />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

          <SelectVersionButton />
          
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

            {[
              {
                href: "https://www.youtube.com/channel/UCJBOJVKok44BZt0kKlBeZyA",
                icon: <FaYoutube size={"1.5em"} />,
              },
              {
                href: "https://github.com/Sleon4",
                icon: <FaGithub size={"1.5em"} />,
              },
              {
                href: "mailto:sergioleon4004@hotmail.com",
                icon: <AiOutlineMail size={"1.5em"} />,
              },
            ].map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                target="_blank"
                className="d-none d-xl-block"
              >
                {link.icon}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNavigation;
