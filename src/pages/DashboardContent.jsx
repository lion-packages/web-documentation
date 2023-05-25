import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { DiPhp } from "react-icons/di";
import { FiArrowRight } from "react-icons/fi";
import { RiTestTubeFill } from "react-icons/ri";
import codeDashboard from "../assets/img/code-snap-3.png";
import { FaReact, FaVuejs, FaGithub, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function DashboardContent() {
  return (
    <>
      <Container fluid className="my-5">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="text-center mx-auto"
          >
            <h1 className="mt-5 mb-0 text-degradient">LION-FRAMEWORK</h1>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={10}
            lg={8}
            xl={8}
            className="text-center mx-auto mb-3"
          >
            <Row>
              <p className="text-secondary description mb-4">
                Lion-Framework can also serve as an API backend for a JavaScript
                single page application or a mobile application.
              </p>

              <Col
                xs={12}
                sm={5}
                md={5}
                lg={5}
                xl={4}
                className="mx-auto mt-2 mb-5"
              >
                <LinkContainer to="/framework/content">
                  <Button variant="dark-gradient" size="lg" className="fw-bold me-3">
                    {"Install"}
                  </Button>
                </LinkContainer>

                <LinkContainer to="/libraries/content">
                  <Button variant="dark-gradient" size="lg" className="fw-bold">
                    {"Packages"}
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div
        className="bg-dark-logo py-3 border-top border-bottom border-secondary"
        style={{ "--bs-border-opacity": ".5" }}
      >
        <Container className="text-center">
          <a
            href="mailto:sergioleon4004@hotmail.com"
            target={"_blank"}
            className="me-4"
          >
            <MdEmail className="text-warning" size={"3em"} />
          </a>

          <a
            href="https://github.com/Sleon4"
            target={"_blank"}
            className="me-4"
          >
            <FaGithub className="text-white" size={"3em"} />
          </a>

          <a
            href="https://www.youtube.com/channel/UCJBOJVKok44BZt0kKlBeZyA"
            target={"_blank"}
          >
            <FaYoutube className="text-danger" size={"3em"} />
          </a>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row className="py-5">
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                className="text-center text-white d-none d-lg-block"
              >
                <div className="mb-0">
                  <DiPhp size={"8em"} />
                </div>

                <>
                  <FaReact size={"5em"} />
                  <FaVuejs size={"5em"} />
                </>
              </Col>

              <Col xs={11} sm={12} md={10} lg={7} xl={7} className="mx-auto">
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
            <Row>
              <Col
                xs={11}
                sm={12}
                md={10}
                lg={5}
                xl={5}
                className="my-3 mx-auto"
              >
                <h1 className="text-degradient text-center">Routes</h1>

                <p className="text-secondary description">
                  Create all the routes you want for your web app, call your API
                  from ReactJS or VueJS.
                </p>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={7}
                lg={7}
                xl={7}
                className="text-center d-none d-lg-block pb-5 my-5"
              >
                <img src={codeDashboard} className={"rounded img-fluid"} />
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                className="text-center d-none d-lg-block"
              >
                <RiTestTubeFill className="text-white" size={"10em"} />
              </Col>

              <Col xs={11} sm={12} md={10} lg={7} xl={7} className="mx-auto">
                <h1 className="text-degradient text-center">Testing</h1>

                <p className="text-secondary description mb-0">
                  Testing Lion-Framework integrates unit tests internally with
                  PHPUnit, feel free to create the necessary tests to check the
                  proper functioning of your web app.
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
