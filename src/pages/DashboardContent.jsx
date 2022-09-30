import { Button, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import { FaReact, FaVuejs, FaGithub } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { RiTestTubeFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import codeDashboard from "../assets/img/code-snap.png";
import CodeBlock from "./components/CodeBlock";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DashboardContent() {
  const [response, setResponse] = useState({ status: "", message: "" });
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = Date.now();

    axios
      .post("https://lion-client-php.herokuapp.com/new-text", { text: text })
      .then((res) => {
        setResponse({ status: res.data.status, message: res.data.message });
        setTime(Math.abs(start - Date.now()));
      });
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={8}
            xl={8}
            className="text-center mx-auto mb-3"
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

              <Col xs={6} sm={5} md={5} lg={4} xl={4} className="mx-auto mt-3 mb-5">
                <div className="d-grid gap-2">
                  <LinkContainer to="/framework/getting-started">
                    <Button variant="light">
                      Getting started <FiArrowRight />
                    </Button>
                  </LinkContainer>

                  <Button
                    variant="light"
                    href="https://1drv.ms/u/s!AstHz58BpA9Jb3RVv6MNrLbYL_U?e=3EcdMp"
                    target="_blank"
                  >
                    Desktop
                  </Button>
                </div>
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

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row className="mb-5">
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
        </Row>
      </Container>

      <hr className="text-white" />

      <Container className="my-5">
        <h3 className="mt-5 mb-0 text-degradient text-center">SEND DATA</h3>

        <Row className="text-white">
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <Form
              onSubmit={handleSubmit}
              className="border border-secondary rounded p-4 mt-5"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Write something here</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="hello world..."
                    onChange={(e) => setText(e.target.value)}
                    autoComplete="off"
                    required
                  />

                  <Button type="submit" variant="outline-primary">
                    SEND
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>

          <Col xs={12} sm={12} md={7} lg={7} xl={7} className="mt-5">
            <h5>JSON Response</h5>

            <CodeBlock
              language={"json"}
              content={
                `// time: ${time} ms\n\n` +
                "{\n" +
                `\tstatus: '${response.status}'\n` +
                `\tmessage: '${response.message}'\n` +
                "}"
              }
            />

            <hr />

            <h5>Javascript/ReactJS</h5>

            <CodeBlock
              language={"javascript"}
              content={
                "// use with POSTMAN\n\n" +
                "axios.post('https://lion-client-php.herokuapp.com/new-text', { text: text }).then(res => {\n" +
                "\tconsole.log(res.data);\n" +
                "});"
              }
            />

            <h5>Lion-Framework PHP</h5>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionRoute\\Route;\n\n" +
                "Route::post('new-text', fn() => response->success(request->text));"
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardContent;
