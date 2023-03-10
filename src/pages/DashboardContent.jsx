import { Button, Col, Container, Row } from "react-bootstrap";
import { FaReact, FaVuejs, FaGithub } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { RiTestTubeFill } from "react-icons/ri";
import codeDashboard from "../assets/img/code-snap-2.png";
import { AiFillGithub } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";

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
                xs={6}
                sm={5}
                md={5}
                lg={4}
                xl={4}
                className="mx-auto mt-2 mb-5"
              >
                <LinkContainer to="/framework/content">
                  <Button variant="light" className="rounded-pill">
                    <FiArrowRight size={"1.4em"} />
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
              <Col xs={11} sm={12} md={10} lg={7} xl={7} className="mx-auto">
                <h1 className="text-degradient text-center">Testing</h1>

                <p className="text-secondary description mb-0">
                  testing Lion-Framework integrates unit tests internally with
                  PHPUnit, feel free to create the necessary tests to check the
                  proper functioning of your web app.
                </p>
              </Col>

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
            </Row>
          </Col>
        </Row>
      </Container>

      <hr className="text-white" />

      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center pb-3">
          <div className="col-md-4 d-flex align-items-center">
            {/* © */}
            <span className="mb-3 mb-md-0 text-white">2023 LION</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-muted"
                href="mailto:sergioleon4004@hotmail.com"
                target={"_blank"}
              >
                <RiMailSendFill size={"1.8em"} color={"#FFFFFF"} />
              </a>
            </li>

            <li className="ms-3">
              <a
                className="text-muted"
                href="https://github.com/Sleon4"
                target={"_blank"}
              >
                <AiFillGithub size={"1.8em"} color={"#FFFFFF"} />
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </>
  );
}

export default DashboardContent;
