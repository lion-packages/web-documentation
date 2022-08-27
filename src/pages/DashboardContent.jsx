import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function DashboardContent() {
  const [repositories, setRepositories] = useState([
    {
      name: "Lion-Framework",
      url: "/framework/getting-started",
      type: "framework",
      description: "A simple and easy way to use lion-framework",
    },
    {
      name: "Lion-Route",
      url: "/libraries/route",
      type: "library",
      description:
        "This library has a quick use of the router with regular expressions based on mrjgreen's phroute",
    },
    {
      name: "Lion-SQL",
      url: "/libraries/sql",
      type: "library",
      description:
        "Package responsible for generating and executing MySQL processes",
    },
    {
      name: "Lion-Command",
      url: "/libraries/command",
      type: "library",
      description:
        "Library created with the function of executing commands from PHP",
    },
    {
      name: "Lion-Security",
      url: "/libraries/security",
      type: "library",
      description:
        "Library created with the function of implementing AES and RSA Security functions for PHP",
    },
    {
      name: "Lion-Files",
      url: "/libraries/files",
      type: "library",
      description:
        "Library created with the function of working internal system files",
    },
    {
      name: "Lion-Request",
      url: "/libraries/request",
      type: "library",
      description:
        "Library created to request input data and response requests",
    },
    {
      name: "Lion-Mailer",
      url: "/libraries/mailer",
      type: "library",
      description: "Library created for easy email sending based on PHPMailer",
    },
  ]);

  return (
    <Container className="my-5">
      <Row>
        {repositories.map((repository, index) => (
          <Col
            xs={12}
            sm={10}
            md={6}
            lg={6}
            xl={6}
            className="mx-auto mb-3"
            key={index}
          >
            <div className="bg-dark-blue rounded text-white p-3">
              <div className="mb-3">
                <h4>
                  <i className="bi bi-code me-2"></i>
                  {repository.name + " / " + repository.type}
                </h4>
              </div>

              <p>
                {repository.description + " "}
                <Link to={repository.url}>read more...</Link>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DashboardContent;
