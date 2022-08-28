import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaReact, FaVuejs, FaCubes } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { MdSecurity } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowRight } from "react-icons/fi";

function DashboardContent() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="my-5 p-3 text-center mx-auto"
          >
            <h1 className="mb-0 text-degradient">
              A simple and easy way to use
            </h1>

            <h1 className="text-degradient">Lion-Framework</h1>

            <p className="text-secondary description">
              Lion-Framework can also serve as an API backend for a JavaScript
              single page application or a mobile application.
            </p>

            <Col xs={6} className="mx-auto my-5">
              <LinkContainer to="/framework/getting-started">
                <Button variant="light">
                  Getting started <FiArrowRight />
                </Button>
              </LinkContainer>
            </Col>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="my-5">
            <Row>
              <Col xs={12} sm={12} md={5} lg={5} xl={5} className="py-5 text-center">
                <div className="mb-0">
                  <DiPhp className="text-white mb-0" size={"8em"} />
                </div>

                <>
                  <FaReact className="text-white mb-0" size={"6em"} />
                  <FaVuejs className="text-white" size={"6em"} />
                </>
              </Col>

              <Col xs={12} sm={12} md={7} lg={7} xl={7} className="p-5">
                <h1 className="text-degradient text-center">API</h1>

                <p className="text-secondary description mb-0">
                  Build complete and robust applications in PHP using
                  Lion-Framework and ReactJS.
                </p>

                <p className="text-secondary description">
                  Or, let Lion-Framework work as a robust back-end API for your
                  ViteJS app, mobile app, or other interface.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardContent;
