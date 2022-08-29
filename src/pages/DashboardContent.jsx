import { Button, Col, Container, Row } from "react-bootstrap";
import { FaReact, FaVuejs, FaGithub } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { RiTestTubeFill } from "react-icons/ri";
import codeDashboard from "../assets/img/code-dashboard.png";
import CodeBlock from "./components/CodeBlock";

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
            className="text-center mx-auto"
          >
            <Row>
              <h1 className="mt-5 mb-0 text-degradient">
                A simple and easy way to use
              </h1>

              <h1 className="text-degradient">Lion-Framework</h1>

              <p className="text-secondary description mb-4">
                Lion-Framework can also serve as an API backend for a JavaScript
                single page application or a mobile application.
              </p>

              <Col xs={8} className="mx-auto mb-5">
                <LinkContainer to="/framework/getting-started">
                  <Button variant="light">
                    Getting started <FiArrowRight />
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <hr className="text-white" />

      <Container className="text-center">
        <a href="https://github.com/Sleon4" target={"_blank"}>
          <FaGithub className="text-white" size={"3em"} />
        </a>
      </Container>

      <hr className="text-white" />

      <Container className="my-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row className="py-5 my-5">
              <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                <h1 className="text-degradient text-center">Testing</h1>

                <p className="text-secondary description mb-0">
                  testing Lion-Framework integrates unit tests internally with
                  PHPUnit, feel free to create the necessary tests to check the
                  proper functioning of your web app.
                </p>
              </Col>

              <Col xs={12} sm={12} md={5} lg={5} xl={5} className="text-center">
                <RiTestTubeFill className="text-white" size={"10em"} />
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row className="pb-5 mb-5">
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                className="text-center text-white"
              >
                <div className="mb-0">
                  <DiPhp size={"8em"} />
                </div>

                <>
                  <FaReact size={"5em"} />
                  <FaVuejs size={"5em"} />
                </>
              </Col>

              <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                <h1 className="text-degradient text-center">API</h1>

                <p className="text-secondary description mb-0">
                  Build complete and robust applications in PHP using
                  Lion-Framework and ReactJS. <br /> Or, let Lion-Framework work
                  as a robust back-end API for your ViteJS app, mobile app, or
                  other interface.
                </p>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row className="pb-5">
              <Col
                xs={12}
                sm={12}
                md={7}
                lg={7}
                xl={7}
                className="py-5 text-center"
              >
                <img src={codeDashboard} className={"rounded img-fluid"} />
              </Col>

              <Col xs={12} sm={12} md={5} lg={5} xl={5} className="my-3 p-5">
                <h1 className="text-degradient text-center">Routes</h1>

                <p className="text-secondary description">
                  Create all the routes you want for your web app, call your API
                  from ReactJS or VueJS.
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
